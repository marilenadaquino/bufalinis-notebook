import web , rdflib , os , json , re , requests
from rdflib import URIRef , XSD, Namespace , Literal
import urlparse
from rdflib.namespace import OWL, DC , RDF , RDFS
from rdflib.plugins.sparql import prepareQuery
from SPARQLWrapper import SPARQLWrapper, JSON
from collections import defaultdict

# SPARQL endpoint
# endpoint = 'http://51.15.52.21:9999/blazegraph/sparql'
endpoint = 'http://localhost:9989/blazegraph/sparql'
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
	SELECT DISTINCT *
	FROM <https://w3id.org/bufalinis-notebook/edition/>
	WHERE {
			?source a oa:Annotation ; oa:hasBody ?body ; oa:motivatedBy ?motivationURI .
			?body rdf:value ?text ; prism:startingPage ?page . ?page rdfs:label ?pageLabel .
			?motivationURI rdfs:label ?motivation .

			OPTIONAL {?body rdfs:label ?biblRef .}

			OPTIONAL {?body dcterms:references ?entity . ?entity rdfs:label ?entityLabel . }

			{	?body frbr:partOf+ ?exp . ?exp frbr:realizationOf ?work .
				?work dcterms:creator ?creatorURI ; rdfs:label ?workLabel . ?creatorURI rdfs:label ?creator .
				FILTER(LANG(?creator) = "it").
				FILTER NOT EXISTS { ?body frbr:realizer ?translatorURI }
				FILTER NOT EXISTS { ?work frbr:partOf ?broaderWork }
			} UNION
			{ ?body frbr:realizer ?translatorURI .
				?translatorURI rdfs:label ?translator . FILTER(LANG(?translator) = "it")
				OPTIONAL {
					?body frbr:translationOf ?original . ?original oa:hasBody ?originalBody .
					?originalBody rdf:value ?translatedText .
					OPTIONAL {?originalBody rdfs:label ?originalLabel. }
					OPTIONAL {?originalBody frbr:partOf+ ?originalExp . ?originalExp frbr:realizationOf ?originalWork .
					?originalWork rdfs:label ?originalWorkLabel ; dcterms:creator ?originalCreatorURI .
					?originalCreatorURI rdfs:label ?originalCreator.
					FILTER NOT EXISTS { ?originalWorkLabel frbr:partOf ?anotherbroaderWork . }
					FILTER(LANG(?originalCreator) = "it")}
				}

			}
			OPTIONAL {?body dcterms:relation ?relatedExcerpt . ?relatedExcerpt oa:hasBody ?relatedBody . }
			OPTIONAL {?body dcterms:complementOf ?otherExcerpt . ?otherExcerpt oa:hasBody ?otherBody . }

	}

ORDER BY ?source
"""


allWorksQueryQuotation = """
	PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
	PREFIX oa: <http://www.w3.org/ns/oa#>
	PREFIX frbr: <http://purl.org/vocab/frbr/core#>
	PREFIX fabio: <http://purl.org/spar/fabio/>
	PREFIX dcterms: <http://purl.org/dc/terms/>
	SELECT ?work ?workLabel (COUNT(?excerpt) AS ?count) (GROUP_CONCAT(?excerpt; separator=" ") as ?excerpts_uris)
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
	GROUP BY ?work ?workLabel ?creator ?excerpts_uris
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
					?original oa:hasBody ?originalBody . ?originalBody rdf:value ?translatedText ; rdfs:label ?originalLabel. ?translatorURI rdfs:label ?translator . FILTER(LANG(?translator) = "it").
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
	SELECT DISTINCT *
	FROM <https://w3id.org/bufalinis-notebook/edition/>
	WHERE {
			?s a foaf:Person ; rdfs:label ?person .
			OPTIONAL { ?s owl:sameAs ?externalURI .}

			{   # mentions
				?excerpt dcterms:references ?s .
				?body oa:hasBody ?excerpt . ?excerpt frbr:partOf+ / frbr:realizationOf ?work .
				FILTER NOT EXISTS { ?work frbr:partOf ?broaderWork }
				OPTIONAL {
					?work dcterms:creator ?author . ?author rdfs:label ?authorLabel .
					FILTER(LANG(?authorLabel) = "it")
					}
			}

			UNION { # authors
				?work dcterms:creator ?s .
				FILTER NOT EXISTS { ?work frbr:partOf ?broaderWork }
				OPTIONAL {
					?body oa:hasBody ?excerpt . ?excerpt frbr:partOf+ / frbr:realizationOf ?work .
					}
				}

			UNION { # translators
				?work frbr:realizer ?s .
				?body oa:hasBody ?excerpt . ?excerpt frbr:partOf+ / frbr:realizationOf ?work .
				?body oa:hasBody ?excerpt . ?excerpt frbr:realizer ?realizer .
				?realizer rdfs:label ?realizerLabel .
				FILTER(LANG(?realizerLabel) = "it").
			}

	  FILTER(LANG(?person) = "it")


	}
	ORDER BY ?person
	"""

mentionedQuery = """
	PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
	PREFIX oa: <http://www.w3.org/ns/oa#>
	PREFIX owl: <http://www.w3.org/2002/07/owl#>
	PREFIX dcterms: <http://purl.org/dc/terms/>
	PREFIX foaf: <http://xmlns.com/foaf/0.1/>
	PREFIX frbr: <http://purl.org/vocab/frbr/core#>
	SELECT DISTINCT *
	FROM <https://w3id.org/bufalinis-notebook/edition/>
	WHERE {
			?s a foaf:Person ; rdfs:label ?person .
			?excerpt dcterms:references ?s .
			?source oa:hasBody ?excerpt .
			OPTIONAL { ?excerpt frbr:partOf+ / frbr:realizationOf ?work .
			?work rdfs:label ?workLabel .
			FILTER NOT EXISTS { ?work frbr:partOf ?broaderWork }
			OPTIONAL {?work dcterms:creator ?author . ?author rdfs:label ?authorLabel .}
			FILTER(LANG(?authorLabel) = "it")}
	}
	ORDER BY ?person
	"""

translationQuery = """
	PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
	PREFIX oa: <http://www.w3.org/ns/oa#>
	PREFIX owl: <http://www.w3.org/2002/07/owl#>
	PREFIX dcterms: <http://purl.org/dc/terms/>
	PREFIX foaf: <http://xmlns.com/foaf/0.1/>
	PREFIX frbr: <http://purl.org/vocab/frbr/core#>
	SELECT DISTINCT *
	FROM <https://w3id.org/bufalinis-notebook/edition/>
	WHERE {
			?excerpt frbr:realizer ?s ; frbr:partOf+ / frbr:realizationOf ?work .
			?work rdfs:label ?workLabel . FILTER NOT EXISTS { ?work frbr:partOf ?broaderWork }
			?s a foaf:Person ; rdfs:label ?person .
			?source oa:hasBody ?excerpt .
			OPTIONAL {?excerpt frbr:translationOf / oa:hasBody ?quot.
                      ?quot rdfs:label ?quotLabel ; frbr:partOf+ / frbr:realizationOf ?originalWork .
                      FILTER NOT EXISTS { ?originalWork frbr:partOf ?otherbroaderWork }
					  ?originalWork dcterms:creator ?author . ?author rdfs:label ?authorLabel .}
			FILTER(LANG(?authorLabel) = "it")
	}
	ORDER BY ?person
"""

quotationQuery = """
	PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
	PREFIX oa: <http://www.w3.org/ns/oa#>
	PREFIX owl: <http://www.w3.org/2002/07/owl#>
	PREFIX dcterms: <http://purl.org/dc/terms/>
	PREFIX foaf: <http://xmlns.com/foaf/0.1/>
	PREFIX frbr: <http://purl.org/vocab/frbr/core#>
	SELECT DISTINCT *
	FROM <https://w3id.org/bufalinis-notebook/edition/>
	WHERE {
			?s a foaf:Person ; rdfs:label ?person .
			FILTER(LANG(?person) = "it")
			?work dcterms:creator ?s ; rdfs:label ?workLabel .
			FILTER NOT EXISTS { ?work frbr:partOf ?broaderWork }
			?excerpt frbr:partOf+ / frbr:realizationOf ?work .
			?source oa:hasBody ?excerpt .
	}
	ORDER BY ?person

"""

translatedbyQuery = """

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
			OPTIONAL {?intAct cito:citesAsAuthority ?author . }

			?active rdfs:label ?activeLabel .
			?passive rdfs:label ?passiveLabel .
	}
"""
# add author of translated text; add entities cited in translations ;


def query_excerpts():
	dictExcerpts = {}
	metadata = {}
	results = {}
	try:
		sparql = SPARQLWrapper(endpoint)
		sparql.setTimeout(55)
		sparql.setQuery(allExcerptsQuery)
		sparql.setReturnFormat(JSON)
		results = sparql.query().convert()
		# preparing JSONs to serve it client-side (viewer) including texts and metadata

		for result in results["results"]["bindings"]:
			dictExcerpts[result["source"]["value"].rsplit('/', 1)[-1]] = result["text"]["value"]
			# variable outputs
			motivation = "<p>"+result["motivation"]["value"]+"</p>" if "motivation" in result.keys() else '<p>not defined</p>'
			originalCreator = "<p>"+result["originalCreator"]["value"]+"</p>" if "originalCreator" in result.keys() else '<p>unknown</p>'
			# quotations
			if "biblRef" in result.keys() and "creator" in result.keys():
				entities = "<p>"+result["entityLabel"]["value"]+"</p>" if "entityLabel" in result.keys() else '<p>-</p>'
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
				originalText = result['originalLabel']['value'] if "originalLabel" in result.keys() else result['originalWorkLabel']['value'] if "originalWorkLabel" in result.keys() else "-"
				metadata[result["source"]["value"].rsplit('/', 1)[-1]] = motivation+"<h4>Traduzione dall'originale</h4><p>"+result["translatedText"]["value"]+"</p><i>"+originalText+"</i><p>"+originalCreator+"</p><h4>Traduttore</h4><p>"+result["translator"]["value"]+"</p>"
	except Exception as ex:
		print('oooops, something went wrong with allExcerptsQuery',ex)
	return results, dictExcerpts , metadata

def query_quotes():
	quotsResults = None
	try:
		sparql = SPARQLWrapper(endpoint)
		sparql.setTimeout(55)
		sparql.setQuery(allWorksQueryQuotation)
		sparql.setReturnFormat(JSON)
		quotsResults = sparql.query().convert()
	except:
		print('oooops something went wrong with allWorksQueryQuotation')
	return quotsResults

def query_sameas():
	sameAsResults = None
	try:
		sparql = SPARQLWrapper(endpoint)
		sparql.setTimeout(55)
		sparql.setQuery(allSameAsQuery)
		sparql.setReturnFormat(JSON)
		sameAsResults = sparql.query().convert()
	except:
		print('oooops something went wrong with allSameAsQuery')
	return sameAsResults

def query_cited_people():
	citedPeopleResults = None
	try:
		sparql = SPARQLWrapper(endpoint)
		sparql.setTimeout(55)
		sparql.setQuery(citedPeopleQuery)
		sparql.setReturnFormat(JSON)
		citedPeopleResults = sparql.query().convert()
	except:
		print('oooops something went wrong with citedPeopleQuery')
	return citedPeopleResults

def query_mentioned_people():
	mentions = None
	try:
		sparql = SPARQLWrapper(endpoint)
		sparql.setTimeout(55)
		sparql.setQuery(mentionedQuery)
		sparql.setReturnFormat(JSON)
		mentions = sparql.query().convert()
	except:
		print('oooops something went wrong with mentionedQuery')
	return mentions

def query_translated_people():
	translations = None
	try:
		sparql = SPARQLWrapper(endpoint)
		sparql.setTimeout(55)
		sparql.setQuery(translationQuery)
		sparql.setReturnFormat(JSON)
		translations = sparql.query().convert()
	except:
		print('oooops something went wrong with translationQuery')
	return translations

def query_quotations_people():
	quotations = None
	try:
		sparql = SPARQLWrapper(endpoint)
		sparql.setTimeout(55)
		sparql.setQuery(quotationQuery)
		sparql.setReturnFormat(JSON)
		quotations = sparql.query().convert()
	except:
		print('oooops something went wrong with quotationQuery')
	return quotations

def query_translatedby():
	translations = None
	try:
		sparql = SPARQLWrapper(endpoint)
		sparql.setTimeout(55)
		sparql.setQuery(translatedbyQuery)
		sparql.setReturnFormat(JSON)
		translations = sparql.query().convert()
	except:
		print('oooops something went wrong with translatedbyQuery')
	return translations

def query_relations():
	relationsResults = None
	try:
		sparql = SPARQLWrapper(endpoint)
		sparql.setTimeout(55)
		sparql.setQuery(allPeopleRelationsQuery)
		sparql.setReturnFormat(JSON)
		relationsResults = sparql.query().convert()
	except:
		print('oooops something went wrong with allPeopleRelationsQuery')
	return relationsResults


def query_resource(entityTBD):
	describeEntityQuery = """DESCRIBE <"""+entityTBD+""">"""
	describeResults = None
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
	return describeResults

def temp_remove_text(y):
	noPage = y.split(', page')[0]
	noEx = noPage.split(', excerpt')[0].split('Excerpt')[0]
	noSonn = re.sub(' act| canto| chapter| fragment| madrigale| sample,| scene| verse| volume', '', noEx, flags=re.IGNORECASE)
	bibRef = re.sub('sonnet', '', noSonn)
	return bibRef
