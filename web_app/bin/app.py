import web , rdflib , os , json , re , requests
from urllib.parse import urlparse ,  parse_qs
from rdflib import URIRef , XSD, Namespace , Literal
from rdflib.namespace import OWL, DC , RDF , RDFS
from rdflib.plugins.sparql import prepareQuery
from SPARQLWrapper import SPARQLWrapper, JSON
from collections import defaultdict


# namespaces
PROV = Namespace("http://www.w3.org/ns/prov#")
CITO = Namespace("http://purl.org/spar/cito/")

# TO BE CHANGED
# SPARQL endpoint
# endpoint = 'http://51.15.52.21:9999/blazegraph/sparql'
endpoint = 'http://localhost:9999/blazegraph/sparql'
dbpediaEndpoint = 'http://it.dbpedia.org/sparql'

# preprare queries
allExcerptsQuery = """
	PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
	PREFIX oa: <http://www.w3.org/ns/oa#>
	PREFIX owl: <http://www.w3.org/2002/07/owl#>
	PREFIX cito: <http://purl.org/spar/cito/>
	PREFIX frbr: <http://purl.org/vocab/frbr/core#>
	PREFIX dcterms: <http://purl.org/dc/terms/>
	PREFIX prism: <http://prismstandard.org/namespaces/1.2/basic/>
	SELECT *
	FROM <https://w3id.org/bufalinis-notebook/edition/>
	WHERE {

			?source a oa:Annotation ; oa:hasBody ?body .
      		?body rdf:value ?text ; prism:startingPage ?page . ?page rdfs:label ?pageLabel .
      		OPTIONAL {?body rdfs:label ?biblRef .}
      		OPTIONAL {?source oa:motivatedBy ?motivationURI . ?motivationURI rdfs:label ?motivation .}
			OPTIONAL {?body dcterms:references ?entity . ?entity rdfs:label ?entityLabel . }
			OPTIONAL {?body frbr:partOf+ ?exp . ?exp frbr:realizationOf ?work . ?work dcterms:creator ?creatorURI ; rdfs:label ?workLabel . ?creatorURI rdfs:label ?creator . } .
			OPTIONAL {?body frbr:translationOf ?original ; frbr:realizer ?translatorURI . ?translatorURI rdfs:label ?translator .
                     OPTIONAL {?original oa:hasBody ?originalBody . ?originalBody rdf:value ?translatedText ; rdfs:label ?originalLabel.  }
                     OPTIONAL {?originalBody frbr:partOf+ ?originalExp . ?originalExp frbr:realizationOf ?originalWork . ?originalWork rdfs:label ?originalWorkLabel ; dcterms:creator ?originalCreatorURI . ?originalCreatorURI rdfs:label ?originalCreator}
                     }
            OPTIONAL {?body dcterms:relation ?relatedExcerpt . ?relatedExcerpt oa:hasBody ?relatedBody . }
			OPTIONAL {?body dcterms:complementOf ?otherExcerpt . ?otherExcerpt oa:hasBody ?otherBody . }
    }

"""


allWorksQueryQuotation = """
	PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
	PREFIX oa: <http://www.w3.org/ns/oa#>
	PREFIX frbr: <http://purl.org/vocab/frbr/core#>
	PREFIX fabio: <http://purl.org/spar/fabio/>
	PREFIX dcterms: <http://purl.org/dc/terms/>
	SELECT ?work ?workLabel (COUNT(?excerpt) AS ?count)
	FROM <https://w3id.org/bufalinis-notebook/edition/>
	WHERE {
		{ ?work a fabio:WorkCollection} UNION
		{ ?work a fabio:Work } UNION
		{ ?work a fabio:Play } UNION
		{ ?work a fabio:Poem } UNION
		{ ?work a fabio:Novel }
		?work rdfs:label ?workLabel .
		FILTER NOT EXISTS {?work frbr:partOf ?anotherWork }
		OPTIONAL {?excerpt a fabio:Excerpt ; frbr:partOf+ ?expr. ?expr frbr:realizationOf ?work .}
	}
	GROUP BY ?work ?workLabel ?creator
	ORDER BY DESC(?count) ?workLabel
"""

allSameAsQuery = """
	PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
	PREFIX oa: <http://www.w3.org/ns/oa#>
	PREFIX owl: <http://www.w3.org/2002/07/owl#>
	SELECT *
	FROM <https://w3id.org/bufalinis-notebook/edition/>
	WHERE {
		?s owl:sameAs ?externalURI .
	}
"""

singleExcerptQuery = """
	PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
	PREFIX oa: <http://www.w3.org/ns/oa#>
	PREFIX owl: <http://www.w3.org/2002/07/owl#>
	PREFIX cito: <http://purl.org/spar/cito/>
	PREFIX frbr: <http://purl.org/vocab/frbr/core#>
	PREFIX dcterms: <http://purl.org/dc/terms/>
	SELECT *
	FROM <https://w3id.org/bufalinis-notebook/edition/>
	WHERE { ?source a oa:Annotation ; oa:hasBody ?body . ?body rdf:value ?text .
			OPTIONAL {?body dcterms:references ?entity . ?entity rdfs:label ?entityLabel . }
			OPTIONAL {?source oa:hasBody ?traslatedBody ; oa:motivatedBy ?motivationURI . ?motivationURI rdfs:label ?motivation . ?traslatedBody frbr:translationOf ?original ; frbr:realizer ?translatorURI .
					?original oa:hasBody ?originalBody . ?originalBody rdf:value ?translatedText ; rdfs:label ?originalLabel. ?translatorURI rdfs:label ?translator .
					?originalBody frbr:partOf+ ?originalExp . ?originalExp frbr:realizationOf ?originalWork . ?originalWork dcterms:creator ?originalCreatorURI . ?originalCreatorURI rdfs:label ?originalCreator }
			OPTIONAL {?body dcterms:relation ?relatedExcerpt . ?relatedExcerpt oa:hasBody ?relatedBody . }
			OPTIONAL {?body dcterms:complementOf ?otherExcerpt . ?otherExcerpt oa:hasBody ?otherBody . }
	}"""


citedPeopleQuery = """
	PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
	PREFIX oa: <http://www.w3.org/ns/oa#>
	PREFIX owl: <http://www.w3.org/2002/07/owl#>
	PREFIX dcterms: <http://purl.org/dc/terms/>
	PREFIX foaf: <http://xmlns.com/foaf/0.1/>
	PREFIX frbr: <http://purl.org/vocab/frbr/core#>
	SELECT *
	FROM <https://w3id.org/bufalinis-notebook/edition/>
	WHERE {
			?s a foaf:Person ; rdfs:label ?person ; owl:sameAs ?externalURI .
	  		?excerpt dcterms:references ?s . ?body oa:hasBody ?excerpt .
	  		OPTIONAL {?excerpt frbr:partOf+ ?exp . ?exp frbr:realizationOf ?work . ?work dcterms:creator ?author . ?author rdfs:label ?authorLabel .}
	  		OPTIONAL {?excerpt frbr:realizer ?realizer . ?realizer rdfs:label ?realizerLabel . }
	}
	ORDER BY ?person
	"""

allPeopleRelationsQuery = """
	PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
	PREFIX cito: <http://purl.org/spar/cito/>
	PREFIX prov: <http://www.w3.org/ns/prov#>
	PREFIX hico: <http://purl.og/emmedi/hico/>
	SELECT *
	WHERE {
			graph ?influenceGraph {
              ?passive prov:qualifiedInfluence ?influence .
              ?influence prov:agent ?active ; rdfs:label ?influenceLabel .
              ?active ?relation ?passive .
            }

            ?influenceGraph prov:wasGeneratedBy ?intAct .
      		?intAct prov:wasAssociatedWith ?interpreter ; hico:isExtractedFrom ?excerpt .
      		OPTIONAL {?intAct cito:citesAsAuthority ?author .}

      		?active rdfs:label ?activeLabel .
      		?passive rdfs:label ?passiveLabel .
	}
"""


# add author of translated text; add entities cited in translations ;

# run queries against the SPARQL endpoint before the homepage loads
try:
	sparql = SPARQLWrapper(endpoint)
	sparql.setTimeout(55)
	sparql.setQuery(allExcerptsQuery)
	sparql.setReturnFormat(JSON)
	results = sparql.query().convert()
	# preparing JSONs to serve it client-side (viewer) including texts and metadata
	dictExcerpts = {}
	metadata = {}
	for result in results["results"]["bindings"]:
		dictExcerpts[result["source"]["value"].rsplit('/', 1)[-1]] = result["text"]["value"]
		# variable outputs
		if "motivation" in result.keys():
			motivation = "<p>"+result["motivation"]["value"]+"</p>"
		else:
			motivation = '<p>not defined</p>'
		if "originalCreator" in result.keys():
			originalCreator = "<p>"+result["originalCreator"]["value"]+"</p>"
		else:
			originalCreator = '<p>unknown</p>'
		# quotations
		if "biblRef" in result.keys() and "creator" in result.keys():
			if "entityLabel" in result.keys():
				entities = "<p>"+result["entityLabel"]["value"]+"</p>"
			else:
				entities = '<p>-</p>'
			metadata[result["source"]["value"].rsplit('/', 1)[-1]] = motivation+"<h4>Testo citato</h4><i>"+result["biblRef"]["value"]+"</i><p>"+result["creator"]["value"]+"</p><h4>entit&#224; citate</h4>"+entities
		# comments
		if "biblRef" in result.keys() and "creator" not in result.keys():
			metadata[result["source"]["value"].rsplit('/', 1)[-1]] = motivation+"<i>"+result["biblRef"]["value"]+"</i>"
		if "biblRef" not in result.keys() and "creator" not in result.keys():
			metadata[result["source"]["value"].rsplit('/', 1)[-1]] = motivation
		# ?
		if "biblRef" not in result.keys() and "creator" in result.keys():
			metadata[result["source"]["value"].rsplit('/', 1)[-1]] = "<p>"+result["creator"]["value"]+"</p>"
		# translations
		if "biblRef" not in result.keys() and "creator" not in result.keys() and "translator" in result.keys() and "translatedText" in result.keys():
			metadata[result["source"]["value"].rsplit('/', 1)[-1]] = motivation+"<h4>Traduzione dall'originale</h4><p>"+result["translatedText"]["value"]+"</p><i>"+result['originalLabel']['value']+"</i><p>"+originalCreator+"</p><h4>Traduttore</h4><p>"+result["translator"]["value"]+"</p>"

except:
	print('oooops, something went wrong with allExcerptsQuery')

try:
	sparql = SPARQLWrapper(endpoint)
	sparql.setTimeout(55)
	sparql.setQuery(allWorksQueryQuotation)
	sparql.setReturnFormat(JSON)
	quotsResults = sparql.query().convert()
except:
	print('oooops something went wrong with allWorksQueryQuotation')

try:
	sparql = SPARQLWrapper(endpoint)
	sparql.setTimeout(55)
	sparql.setQuery(allSameAsQuery)
	sparql.setReturnFormat(JSON)
	sameAsResults = sparql.query().convert()
except:
	print('oooops something went wrong with allSameAsQuery')

try:
	sparql = SPARQLWrapper(endpoint)
	sparql.setTimeout(55)
	sparql.setQuery(citedPeopleQuery)
	sparql.setReturnFormat(JSON)
	citedPeopleResults = sparql.query().convert()
except:
	print('oooops something went wrong with citedPeopleQuery')

try:
	sparql = SPARQLWrapper(endpoint)
	sparql.setTimeout(55)
	sparql.setQuery(allPeopleRelationsQuery)
	sparql.setReturnFormat(JSON)
	relationsResults = sparql.query().convert()
except:
	print('oooops something went wrong with allPeopleRelationsQuery')

# WEB APP
# routing
urls = (
	'/','home',
	'/viewer', 'index',
	'/viewer_(.*)', 'index_page',
	'/excerpt/(.*)', 'excerpt',
	'/library','library',
	'/introduction','intro',
	'/bibliography','biblio',
	'/indexes','indexes',
	'/(sparql)','sparql',
	'/resource/(.*)','resource',
	'/static/bufalini_quaderno.xml', 'xml'
)

# templates
render = web.template.render('templates/', base="layout", globals={'re':re})
renderRDF = web.template.render('templates/', globals={'re':re})
renderXML = web.template.render('templates/', globals={'re':re})

# render xml
class xml:
	def GET(self):
		web.header('Content-Type', 'text/xml')
		return renderXML.resource()

# any RDF resource: content negotiation
class resource(object):
	def GET(self, idRes):
		entityTBD = 'https://w3id.org/bufalinis-notebook/'+idRes
		describeEntityQuery = """
			DESCRIBE <"""+entityTBD+""">
		"""
		try:
			sparql = SPARQLWrapper(endpoint)
			sparql.setTimeout(55)
			sparql.setQuery(describeEntityQuery)
			sparql.setReturnFormat(JSON)
			describeResults = sparql.query().convert()
			print(describeEntityQuery)
			print(describeResults)
		except:
			print('oooops something went wrong with describeEntityQuery')
		return renderRDF.resource(data=describeResults, entity=entityTBD)


# home
class home(object):
    def GET(self):
        return render.home()

# introduzione
class intro(object):
    def GET(self):
        return render.intro()

# edizione
class index(object):
	def GET(self):
		web.header("Cache-Control", "public, max-age=2592000")
		return render.index(dict=json.dumps(dictExcerpts), metadataDict=json.dumps(metadata))

# edizione - permalink for openings
class index_page(object):
	def GET(self, pageNum):
		return render.index_page(dict=json.dumps(dictExcerpts), metadataDict=json.dumps(metadata), num=pageNum)

# indici
class indexes(object):
	def GET(self):

		return render.indexes(citedPeopleList=citedPeopleResults, relationsList=relationsResults)

# biblioteca
class library(object):
	def GET(self):
		# dict for citations tab
		excerptsDict = defaultdict(list)
		authorsList = defaultdict(list)
		authorsQuots = defaultdict(list)
		for result in results["results"]["bindings"]:
			if "biblRef" in result.keys():
				biblRefText = result["biblRef"]["value"]
			else:
				biblRefText = '-'
			if "workLabel" in result.keys():
				workLabel = result["workLabel"]["value"]
			else:
				workLabel = '-'
			if "creator" in result.keys():
				creatorURI = result["creatorURI"]["value"]
				creatorText = result["creator"]["value"]
			else:
				creatorURI = ''
				creatorText = '-'
			# excerptsDict - work : {excerptID , biblRef}
			if 'work' in result.keys() and result['work']['value'] in excerptsDict:
				excerptsDict[result['work']['value']].append( {'workLabel': workLabel , 'authorURI': creatorURI , 'author' : creatorText, 'source': result["source"]["value"].rsplit('/',1)[-1] , 'bibref' : biblRefText})
			elif 'work' in result.keys() and result['work']['value'] not in excerptsDict:
				excerptsDict[result['work']['value']] = [{'workLabel': workLabel , 'authorURI': creatorURI , 'author' : creatorText, 'source': result["source"]["value"].rsplit('/',1)[-1] , 'bibref' : biblRefText}]

			# authorsList TO BE REVISED - IT TAKES TOO LONG
			if "creator" in result.keys() and result['creatorURI']['value'] not in authorsList:
				authorsList[result["creatorURI"]["value"]] = [{'name': result["creator"]["value"]}]
				for person in sameAsResults["results"]["bindings"]:
					if result['creatorURI']['value'] == person['s']['value']:
						authorsList[result["creatorURI"]["value"]].append({'sameAs': person['externalURI']['value']})
						# if 'dbpedia' in person['externalURI']['value']:

						# 	try:
						# 		sparql = SPARQLWrapper(dbpediaEndpoint)
						# 		sparql.setTimeout(55)
						# 		sparql.setQuery("""
						# 			SELECT DISTINCT ?abstract
						# 			WHERE {
						# 				<"""+person['externalURI']['value']+"""> <http://dbpedia.org/ontology/abstract> ?abstract .
						# 			}
						# 			""")
						# 		sparql.setReturnFormat(JSON)
						# 		personResults = sparql.query().convert()
						# 	except:
						# 		print 'oooops something went wrong with allWorksQueryQuotation'
						# 	for resultSameAs in personResults['results']['bindings']:
						# 		authorsList[result["creatorURI"]["value"]].append({'abstract':resultSameAs['abstract']['value']})
						# else:
						# 	pass

			elif "creator" in result.keys() and result['creatorURI']['value'] in authorsList:
				pass

			# authorsQuots
			if "creator" in result.keys() and result['creatorURI']['value'] not in authorsQuots:
				authorsQuots[result["creatorURI"]["value"]] = [(result["source"]["value"].rsplit('/',1)[-1] , biblRefText)]
			elif "creator" in result.keys() and result['creatorURI']['value'] in authorsQuots:
				authorsQuots[result["creatorURI"]["value"]].append( (result["source"]["value"].rsplit('/',1)[-1] , biblRefText) )

		authorsListInfo = sorted(authorsList.iteritems(),key= lambda k,v: (v[0]))
		return render.library(quots=quotsResults, citations=excerptsDict, authors=authorsListInfo, authorAndQuots=authorsQuots)

# bibliografia
class biblio(object):
    def GET(self):
        return render.biblio()

# HTML view of excerpts
class excerpt(object):
	def GET(self, idQuote):
		for result in results["results"]["bindings"]:
			if "biblRef" in result.keys():
				biblRefText = result["biblRef"]["value"]
			else:
				biblRefText = '-'
			if "creator" in result.keys():
				creatorURI = result["creatorURI"]["value"]
				creatorText = result["creator"]["value"]
			else:
				creatorURI = ''
				creatorText = '-'
			if "work" in result.keys():
				workURI = result["work"]["value"]
				workLabel = result["workLabel"]["value"]
			else:
				workURI = ''
				workLabel = ''

			if "translator" in result.keys():
				translatorURI = result["translatorURI"]["value"]
				translatorText = result["translator"]["value"]
			else:
				translatorURI = ''
				translatorText = ''

			if result["source"]["value"].rsplit('/',1)[-1] == idQuote:
				return render.excerpt(	source=result["source"]["value"],
										motivation=result["motivation"]["value"],
										text=result["text"]["value"],
										work=workURI,
										workLabel=workLabel,
										biblRef=biblRefText,
										creatorID=creatorURI,
										creator=creatorText ,
										translatorID=translatorURI,
										translator=translatorText,
										page=result["pageLabel"]["value"],
										sameAs=sameAsResults
										)


class sparql:
    def GET(self, active):
        content_type = web.ctx.env.get('CONTENT_TYPE')
        return self.__run_query_string(active, web.ctx.env.get("QUERY_STRING"), content_type)

    def POST(self, active):
        content_type = web.ctx.env.get('CONTENT_TYPE')
        web.debug("The content_type value: ")
        web.debug(content_type)

        cur_data = web.data()
        if "application/x-www-form-urlencoded" in content_type:
            return self.__run_query_string(active, cur_data, True, content_type)
        elif "application/sparql-query" in content_type:
            return self.__contact_tp(cur_data, True, content_type)
        else:
            raise web.redirect("/sparql")

    def __contact_tp(self, data, is_post, content_type):
        accept = web.ctx.env.get('HTTP_ACCEPT')
        if accept is None or accept == "*/*" or accept == "":
            accept = "application/sparql-results+xml"
        if is_post:
            req = requests.post('http://localhost:9999/blazegraph/sparql', data=data,
                                headers={'content-type': content_type, "accept": accept})
        else:
            req = requests.get("%s?%s" % ('http://localhost:9999/blazegraph/sparql', data),
                               headers={'content-type': content_type, "accept": accept})

        if req.status_code == 200:
            web.header('Access-Control-Allow-Origin', '*')
            web.header('Access-Control-Allow-Credentials', 'true')
            web.header('Content-Type', req.headers["content-type"])

            return req.text
        else:
            raise web.HTTPError(
                str(req.status_code), {"Content-Type": req.headers["content-type"]}, req.text)

    def __run_query_string(self, active, query_string, is_post=False,
                           content_type="application/x-www-form-urlencoded"):
        parsed_query = parse_qs(query_string)#parsed_query = urlparse.parse_qs(query_string)
        if query_string is None or query_string.strip() == "":

            return render.sparql(active)
        if re.search("updates?", query_string, re.IGNORECASE) is None:
            if "query" in parsed_query:
                return self.__contact_tp(query_string, is_post, content_type)
            else:
                raise web.redirect("/sparql")
        else:
            raise web.HTTPError(
                "403", {"Content-Type": "text/plain"}, "SPARQL Update queries are not permitted.")




if __name__ == "__main__":
	app = web.application(urls, globals())
	app.internalerror = web.debugerror
	app.run()
