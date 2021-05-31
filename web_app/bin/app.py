import web , rdflib , os , json , re , requests
from rdflib import URIRef , XSD, Namespace , Literal
import urlparse
from rdflib.namespace import OWL, DC , RDF , RDFS
from rdflib.plugins.sparql import prepareQuery
from SPARQLWrapper import SPARQLWrapper, JSON
from collections import defaultdict , OrderedDict
from queries import allExcerptsQuery, allWorksQueryQuotation, allSameAsQuery, singleExcerptQuery, citedPeopleQuery, allPeopleRelationsQuery, query_excerpts, query_quotes, query_sameas , query_cited_people, query_relations, query_resource, query_mentioned_people, query_translated_people, query_quotations_people, query_translatedby, temp_remove_text

# namespaces
PROV = Namespace("http://www.w3.org/ns/prov#")
CITO = Namespace("http://purl.org/spar/cito/")

# run queries against the SPARQL endpoint before the homepage loads
results, dictExcerpts, metadata = query_excerpts()
quotsResults = query_quotes()
sameAsResults = query_sameas()
citedPeopleResults = query_cited_people()
mentions = query_mentioned_people()
translations = query_translated_people()
quotations = query_quotations_people()
#translatedby = query_translatedby()
#relationsResults = query_relations()


# routing
prefix = ''
urls = (
	prefix + '/resource/(.*)','resource',
	prefix + '/','home',
	prefix + '/introduction','intro',
	prefix + '/viewer', 'index',
	prefix + '/excerpt-(.*)', 'excerpt',
	prefix + '/indexes','indexes',
	prefix + '/library','library',
	prefix + '/static/bufalini_quaderno.xml', 'xml',
	prefix + '/treemapPeople','treemapPeople',
	prefix + '/treemapWorks','treemapWorks',
	prefix + '/setsPeople','setsPeople',
	prefix + '/setsWorks','setsWorks',
	prefix + '/graphPeople','graphPeople',
	prefix + '/playWithPeople','playWithPeople',
	prefix + '/playWithWorks','playWithWorks',
	prefix + '/(sparql)','sparql',
	prefix + '/specifications','specifications',
	prefix + '/webApplication','webApplication',
	prefix + '/downloadDataset','downloadDataset',
	prefix + '/publications','publications',
	prefix + '/credits','credit',
	prefix + '/licences','licences'
)

# templating
render = web.template.render('templates/', base="layout", globals={'re':re, 'sorted':sorted})
renderNest = web.template.render('templates/', globals={'re':re,'sorted':sorted})
renderRDF = web.template.render('templates/', globals={'re':re,'sorted':sorted})
renderXML = web.template.render('templates/', globals={'re':re,'sorted':sorted})

# render xml
class xml:
	def GET(self):
		web.header('Content-Type', 'text/xml')
		return renderXML.resource()

# render RDF resource: content negotiation
class resource(object):
	def GET(self, idRes):
		entityTBD = 'https://w3id.org/bufalinis-notebook/'+idRes
		describeResults= query_resource(entityTBD)
		return renderRDF.resource(data=describeResults, entity=entityTBD)

# homepage
class home(object):
    def GET(self):
        return render.home()

# introduction
class intro(object):
    def GET(self):
        return render.intro()


# digital edition
class index(object):
	def GET(self):
		web.header("Cache-Control", "public, max-age=2592000")
		# dict for citations
		excerptsDict = defaultdict(list)
		for result in results['results']['bindings']:
			biblRef = result['biblRef']['value'] if 'biblRef' in result.keys() else '-'
			workLabel = result['workLabel']['value'] if 'workLabel' in result.keys() else '-'
			creator = result['creator']['value'] if 'creator' in result.keys() else '-'
			originalCreator = result['originalCreator']['value'] if 'originalCreator' in result.keys() else '-'

			# excerptsDict - work : {excerptID , biblRef}
			if 'work' in result.keys() and result['work']['value'] in excerptsDict:
				excerptsDict[result['work']['value']].append( {'workLabel': workLabel , 'creator': creator, 'originalCreator' : originalCreator, 'source': result['source']['value'].rsplit('/',1)[-1] , 'bibref' : biblRef})
			elif 'work' in result.keys() and result['work']['value'] not in excerptsDict:
				excerptsDict[result['work']['value']] = [{'workLabel': workLabel , 'creator': creator, 'originalCreator' : originalCreator, 'source': result['source']['value'].rsplit('/',1)[-1] , 'bibref' : biblRef}]

		# list work, author
		listTitles = list({quot['workLabel']['value'] for quot in quotsResults['results']['bindings']})

		resPeople=[]
		listWorkAuth = []
		for cit in excerptsDict:
			cits = excerptsDict[cit]
			for y in cits:

				##################################################################################################################
				# TEMP remove verse/excerpt/volume/sample/etc. work labels
				bibRef= temp_remove_text(y['bibref'])
				##################################################################################################################

				for title in listTitles:
					if y['workLabel'] == title:
						if y['originalCreator'] != '-':
							if y['originalCreator'] != y['creator']:
								work = title + '=' + y['originalCreator'] + ', tra. ' + y['creator'] + '__' + bibRef + ', ' + y['originalCreator'] + ', tra. ' + y['creator'] + '#' + y['source']
								if work not in listWorkAuth:
									listWorkAuth.append(work)
								# to add to mentioned people list
								author = y['creator']
								if author not in resPeople:
									resPeople.append(author)
						else:
							work = title + '=' + y['creator'] + '__' + bibRef + ', ' + y['creator'] + '#' + y['source']
							if work not in listWorkAuth:
								listWorkAuth.append(work)
							# to add to mentioned people list
							author = y['creator']
							if author not in resPeople:
								resPeople.append(author)

		listWorkAuth = sorted(listWorkAuth)

		# dict work, author, further information
		dictWorks = {}
		for work in listWorkAuth:
			work = work.split('__')[0]
			dictWorks[work] = ''

		for key in dictWorks.keys():
			listTemp = []
			for item in listWorkAuth:
				keyListCit = item.split('__')[0]
				valueListCit = item.split('__')[1]
				if keyListCit == key:
					listTemp.append(valueListCit)
				dictWorks[key] = listTemp
			listTemp = []

		dictWorks = dict(sorted(dictWorks.items(), key = lambda value: re.sub("Il |Lo |La |I |Gli |Le |Un |Un\'|Una |L\'|Dell\'","", value[0].lower(),  flags=re.IGNORECASE)))

		# list of works and attributes to be used to develop the dictionary of mentioned people
		listWorksAttr = []
		for key in dictWorks:
			for value in dictWorks[key]:
				if value not in listWorksAttr:
					listWorksAttr.append(value)

		# list of mentioned person, person who makes the citation, work the citation appears in, excerpt code
		for people in citedPeopleResults['results']['bindings']:
			if people['person']['value'] not in resPeople:
				resPeople.append(people['person']['value'])
		resPeople=sorted(resPeople)


		listCit = []
		for pers in citedPeopleResults['results']['bindings']:
			person = pers['person']['value']
			ex = pers['body']['value'].rsplit('/',1)[-1]
			for work in listWorksAttr:
				if 'authorLabel' in pers.keys():
					if ex in work:
						cit = person + '----' + work
						if cit not in listCit:
							listCit.append(cit)

				elif ('authorLabel' in pers.keys()) and ('realizerLabel' in pers.keys()):
					if ex in work:
						cit = person + '----' + work
						if cit not in listCit:
							listCit.append(cit)

				elif ('authorLabel' not in pers.keys()) and ('realizerLabel' in pers.keys()):
					cit = person + '----' + pers['realizerLabel']['value'] + '#' + ex
					if cit not in listCit:
						listCit.append(cit)

		# dict pers, related people, works and excerpts
		dictPersCit = {}
		for pers in resPeople:
			dictPersCit[pers] = ''

		for key in dictPersCit.keys():
			listTemp = []
			for item in listCit:
				keyListCit = item.split('----')[0]
				valueListCit = item.split('----')[1]
				if keyListCit == key:
					listTemp.append(valueListCit)
				dictPersCit[key] = listTemp
			listTemp = []

		return render.index(dict=json.dumps(dictExcerpts), metadataDict=json.dumps(metadata), dictWorks=dictWorks, dictPersCit=dictPersCit)

# people index
class indexes(object):
	def GET(self):

		# list all people
		inList=citedPeopleResults['results']['bindings']
		people=list({people['person']['value'] for people in inList})

		resPeople = [] # sorting by last name
		for pers in people:
			splitkeylist = pers.strip().rpartition(' ')
			keylabel = splitkeylist[2]+', '+splitkeylist[0] if (len(splitkeylist[0]) > 2 and splitkeylist[0] != ', ' and "Autore" not in splitkeylist[0] and "(" not in splitkeylist[0] and "(" not in splitkeylist[2]) else splitkeylist[0]+' '+splitkeylist[2] if len(splitkeylist[2]) == 1  else pers
			resPeople.append([pers,keylabel])
		resPeople = sorted(resPeople, key=lambda x: x[1] )
		print(resPeople)
		# external uris
		externalURI = defaultdict(list)
		for people in inList:
			if 'externalURI' in people.keys():
				externalURI[people['person']['value']].append(people['externalURI']['value'])
		externalURI = {k:list(set(v)) for k,v in externalURI.items()}

		# mentions
		mentions_list = defaultdict(list)
		for mention in mentions["results"]["bindings"]:
			name = mention['person']['value']
			excerpt = mention['source']['value'].rsplit('/',1)[-1]
			work = mention['workLabel']['value'] if 'workLabel' in mention.keys() else '-'
			citing = mention['authorLabel']['value'] if 'authorLabel' in mention.keys() else '-'
			mentions_list[name].append( {'source':excerpt, 'work':work, 'citing':citing } )
		mentions_list = dict(mentions_list)

		# excerpts tranlsated by the person at hand
		translations_list = defaultdict(list)
		for translation in translations["results"]["bindings"]:
			name = translation['person']['value']
			excerpt = translation['source']['value'].rsplit('/',1)[-1]
			work = translation['workLabel']['value'] if 'workLabel' in translation.keys() else '-'
			cited = translation['authorLabel']['value'] if 'authorLabel' in translation.keys() else '-'
			translations_list[name].append( {'source':excerpt, 'work':work, 'cited':cited } )
		translations_list = dict(translations_list)

		# excerpts tranlsated by other people
		translatedby_list = defaultdict(list)
		for translatedby in translations["results"]["bindings"]:
			name = translatedby['person']['value']
			excerpt = translatedby['source']['value'].rsplit('/',1)[-1]
			work = translatedby['workLabel']['value'] if 'workLabel' in translatedby.keys() else '-'
			citing = translatedby['authorLabel']['value'] if 'authorLabel' in translatedby.keys() else None
			if citing:
				translatedby_list[citing].append( {'source':excerpt, 'work':work, 'translator':name } )
		translatedby_list = dict(translatedby_list)

		# quotations
		quotations_list = defaultdict(list)
		for quotation in quotations["results"]["bindings"]:
			name = quotation['person']['value']
			excerpt = quotation['source']['value'].rsplit('/',1)[-1]
			work = quotation['workLabel']['value'] if 'workLabel' in quotation.keys() else '-'
			if 'tra' not in excerpt: # remove quotations of translations, which are already in translations_list
				quotations_list[name].append( {'source':excerpt, 'work':work } )
		quotations_list = dict(quotations_list)



		# dict for citations tab
		# excerptsDict = defaultdict(list)
		# for result in results["results"]["bindings"]:
		# 	biblRefText = result["biblRef"]["value"] if "biblRef" in result.keys() else  '-'
		# 	workLabel = result["workLabel"]["value"] if "workLabel" in result.keys() else '-'
		# 	creatorURI = result["creatorURI"]["value"] if "creator" in result.keys() else ''
		# 	creatorText = result["creator"]["value"] if "creator" in result.keys() else '-'
		# 	originalCreator = result['originalCreator']['value'] if 'originalCreator' in result.keys() else '-'
		#
		# 	# excerptsDict - work : {excerptID , biblRef}
		# 	if 'work' in result.keys() and result['work']['value'] in excerptsDict:
		# 		excerptsDict[result['work']['value']].append( {'workLabel': workLabel , 'originalCreator': originalCreator, 'authorURI': creatorURI , 'author' : creatorText, 'source': result["source"]["value"].rsplit('/',1)[-1] , 'bibref' : biblRefText})
		# 	elif 'work' in result.keys() and result['work']['value'] not in excerptsDict:
		# 		excerptsDict[result['work']['value']] = [{'workLabel': workLabel , 'originalCreator': originalCreator, 'authorURI': creatorURI , 'author' : creatorText, 'source': result["source"]["value"].rsplit('/',1)[-1] , 'bibref' : biblRefText}]
		#
		# # list works, excerpts
		# inList=quotsResults['results']['bindings']
		# #resQuotes=sorted(list({book['workLabel']['value'] for book in inList}))
		#
		# # list works verses, excerpts
		# listWorsCit = []
		# for cit in excerptsDict.keys():
		# 	for x in excerptsDict[cit]:
		# 		bibRef= temp_remove_text(x['bibref']) # TODO remove
		#
		# 		if x['originalCreator'] != '-':
		# 			work =  bibRef + ', ' + x['originalCreator'] + ', tra. ' + '#' + x['source']
		# 			if work not in listWorsCit:
		# 				listWorsCit.append(work)
		# 		else:
		# 			work =  bibRef + ', #' + x['source']
		# 			if work not in listWorsCit:
		# 				listWorsCit.append(work)
		#print("\nlistWorsCit",listWorsCit,"\n\ncitedPeopleResults",citedPeopleResults)
		return render.indexes(uris=externalURI, mentions_list=mentions_list, translations_list=translations_list, quotations_list=quotations_list,translatedby_list=translatedby_list, citedPeopleList=citedPeopleResults, resPeople=resPeople ) #, citations=excerptsDict, listWorsCit=listWorsCit

# works index
class library(object):
	def GET(self):
		# dict for citations tab
		excerptsDict = defaultdict(list)
		listWorkAuth = []

		for result in results['results']['bindings']:
			work = result['work']['value'] if 'work' in result.keys() else None
			biblRef = result['biblRef']['value'] if 'biblRef' in result.keys() else '-'
			workLabel = result['workLabel']['value'] if 'workLabel' in result.keys() else '-'
			creator = result['creator']['value'] if ('creator' in result.keys() and 'translator' not in result.keys()) \
				else result['translator']['value'] if ('translator' in result.keys()) else '-'
			originalCreator = result['originalCreator']['value'] if 'originalCreator' in result.keys() else '-'

			# excerptsDict - work : {excerptID , biblRef}
			if work:
				unique_key = work+'_'+workLabel+'=#'+creator
				excerptsDict[unique_key].append(
					{'source': result['source']['value'].rsplit('/',1)[-1] ,
					'bibRef' : temp_remove_text(biblRef) })

		# list work, author
		for k,v in excerptsDict.items():
			string_work_author_excerpt = ''
			string_work_author_excerpt += k.split('_')[1]
			for excerpt_dict in v:
				string_work_author_excerpt += '____'+excerpt_dict['source']+ '----' + excerpt_dict['bibRef'] + ', ' + k.split('#')[1]
			listWorkAuth.append(string_work_author_excerpt)

		# FILTERS: "work, author"
		sortedWorkAuth = list({work.split('____')[0] for work in listWorkAuth} )
		sortedWorkAuth = sorted(sortedWorkAuth, key = lambda value: re.sub("Il |Lo |La |I |Gli |Le |Un |Un\'|Una |L\'|Dell\'","", value.lower(),  flags=re.IGNORECASE))

		# CONTENT: dict work, author, further information
		dictIndexWorks = defaultdict(list)

		for work in listWorkAuth:
			new_key = work.split('____')[0] # title=#author
			for result in results['results']['bindings']:
				source = result['source']['value'].rsplit('/',1)[-1]
				biblRef = result['biblRef']['value'] if 'biblRef' in result.keys() else '-'
				creator = result['creator']['value'] if 'creator' in result.keys() else '-'
				translator = result['translator']['value'] if 'translator' in result.keys() else '-'
				originalWorkLabel = temp_remove_text(result['originalLabel']['value']) if 'originalLabel' in result.keys() else result['originalWorkLabel']['value'] if 'originalWorkLabel' in result.keys() else '-'
				if 'work' in result.keys() \
					and result['workLabel']['value'] == new_key.split('=')[0] \
					and result['creator']['value'] == new_key.split('#')[1]: # quotations
					if source+'----'+temp_remove_text(biblRef)+', '+creator not in dictIndexWorks[new_key]:
						dictIndexWorks[new_key].append( source+'----'+temp_remove_text(biblRef)+', '+creator )
				elif 'originalWork' in result.keys() \
					and result['originalWorkLabel']['value'] == new_key.split('=')[0]\
					and result['originalCreator']['value'] == new_key.split('#')[1] : # translations or comments
					if source+'----'+temp_remove_text(originalWorkLabel)+', tr. '+translator not in dictIndexWorks[new_key]:
						dictIndexWorks[new_key].append( source+'----'+temp_remove_text(originalWorkLabel)+', tr. '+translator )

		dictIndexWorks = dict(dictIndexWorks)
		dictIndexWorks = { k:sorted(v) for k,v in dictIndexWorks.items()}
		sortedDictIndexWorks = dict(OrderedDict(sorted(dictIndexWorks.items())))

		return render.library(sortedWorkAuth=sortedWorkAuth, dictIndexWorks=sortedDictIndexWorks)

# people treemap
class treemapPeople(object):
    def GET(self):
        return render.treemapPeople()

# works treemap
class treemapWorks(object):
	def GET(self):
		return render.treemapWorks()

# people sets
class setsPeople(object):
    def GET(self):
        return render.setsPeople()

# works sets
class setsWorks(object):
    def GET(self):
        return render.setsWorks()

# people graph
class graphPeople(object):
    def GET(self):
        return render.graphPeople()

# people play with data
class playWithPeople(object):
    def GET(self):
        return render.playWithPeople()

# works play with data
class playWithWorks(object):
    def GET(self):
        return render.playWithWorks()

# specifications
class specifications(object):
    def GET(self):
        return render.specifications()

# web application
class webApplication(object):
    def GET(self):
        return render.webApplication()

# download the dataset
class downloadDataset(object):
    def GET(self):
        return render.downloadDataset()

# publications
class publications(object):
    def GET(self):
        return render.publications()

# credits
class credit(object):
    def GET(self):
        return render.credit()

# licences
class licences(object):
    def GET(self):
        return render.licences()

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
            req = requests.post('http://localhost:9989/blazegraph/sparql', data=data,
                                headers={'content-type': content_type, "accept": accept})
        else:
            req = requests.get("%s?%s" % ('http://localhost:9989/blazegraph/sparql', data),
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
        parsed_query =urlparse.parse_qs(query_string)
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

# off key
