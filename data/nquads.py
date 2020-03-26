# coding: utf-8
import xml.etree.ElementTree as ET
import rdflib , sys , re , os.path , logging , codecs
from rdflib import URIRef , XSD, Namespace , Literal
from rdflib.namespace import OWL, DC , RDF , RDFS
from lxml import etree

logging.basicConfig(level=logging.INFO)

# namespaces
CITO = Namespace("http://purl.org/spar/cito/")
FABIO = Namespace('http://purl.org/spar/fabio/')
FOAF = Namespace('http://xmlns.com/foaf/0.1/')
FRBR = Namespace('http://purl.org/vocab/frbr/core#')
HICO = Namespace('http://purl.org/emmedi/hico/')
NP = Namespace('http://www.nanopub.org/nschema#')
OA = Namespace('http://www.w3.org/ns/oa#')
PB = Namespace('https://w3id.org/bufalinis-notebook/')
PROV = Namespace("http://www.w3.org/ns/prov#")

# save rdf in filesystem
dir_path = os.path.dirname(os.path.realpath(__file__))


# load triples from quaderno_rdf.xml to a named graph "edition/"
editionGraphName = 'https://w3id.org/bufalinis-notebook/edition/'
editionProvGraphName = 'https://w3id.org/bufalinis-notebook/edition-provenance/'
editionPubinfoGraphName = 'https://w3id.org/bufalinis-notebook/edition-pubinfo/'
editionNanoGraphName = 'https://w3id.org/bufalinis-notebook/edition-head/'
nanopublicationName = 'https://w3id.org/bufalinis-notebook/edition-np'


editionGraph = rdflib.ConjunctiveGraph(identifier=URIRef(editionGraphName))
#editionGraph.load('rdf_dump/quaderno_rdf.rdf', format='application/rdf+xml', publicID=editionGraphName)
#editionGraph.remove_context('file:///Users/marilena/Desktop/w/bufalini/quaderno_rdf.rdf') # don't know why it duplicates triples for both the current context and the file path

editionProvenanceGraph = rdflib.ConjunctiveGraph(identifier=URIRef(editionProvGraphName))
editionProvenanceGraph.add(( URIRef(editionGraphName), PROV.generatedAtTime, Literal('1991-03-01T00:00:01Z',datatype=XSD.dateTime) ))
editionProvenanceGraph.add(( URIRef(editionGraphName), PROV.wasAttributedTo, URIRef(PB+'person/pb') ))

editionPubinfoGraph = rdflib.ConjunctiveGraph(identifier=URIRef(editionPubinfoGraphName))
editionPubinfoGraph.add(( URIRef(nanopublicationName), PROV.wasAttributedTo, URIRef(PB+'organization/cspc') ))
editionPubinfoGraph.add(( URIRef(nanopublicationName), PROV.generatedAtTime, Literal('2018-01-01T00:00:01Z',datatype=XSD.dateTime) ))
editionPubinfoGraph.add(( URIRef(PB+'organization/cspc'), RDF.type, URIRef(FOAF.Organization) ))
editionPubinfoGraph.add(( URIRef(PB+'organization/cspc'), RDFS.label, Literal('Centro Studi Permanenza del Classico, Università di Bologna') ))

editionNanoGraph = rdflib.ConjunctiveGraph(identifier=URIRef(editionNanoGraphName))
editionNanoGraph.add(( URIRef(nanopublicationName), RDF.type, URIRef(NP.Nanopublication) ))
editionNanoGraph.add(( URIRef(nanopublicationName), NP.hasAssertion, URIRef(editionGraphName) ))
editionNanoGraph.add(( URIRef(nanopublicationName), NP.hasProvenance, URIRef(editionProvGraphName) ))
editionNanoGraph.add(( URIRef(nanopublicationName), NP.hasPublicationInfo, URIRef(editionPubinfoGraphName) ))

if not os.path.exists('edition'):
	os.makedirs('edition')
#editionGraph.serialize(destination='edition/edition.nq', format='nquads', enconding='utf-8')
editionProvenanceGraph.serialize(destination='edition/provenance.nq', format='nquads', explicit_base=True)
editionPubinfoGraph.serialize(destination='edition/pubinfo.nq', format='nquads', explicit_base=True)
editionNanoGraph.serialize(destination='edition/head.nq', format='nquads', explicit_base=True)

# parse XML
tree = ET.parse('xml/bufalini_quaderno.xml')
root = tree.getroot()
ns = {'tei':'http://www.tei-c.org/ns/1.0', 'xml':'http://www.w3.org/XML/1998/namespace'}
for influences in root.findall('.//tei:listRelation', ns):
	listID = influences.get('type')
	# case 1: influence between excerpts
	if listID == 'influence-between-texts':
		n = 0
		for influence in influences.findall('tei:relation', ns):
			n = n+1
			active = influence.get('active').split('#')[1]
			passive = influence.get('passive').split('#')[1]
			graphsPartName = 'https://w3id.org/bufalinis-notebook/infl-'+active+'-to-'+passive # influence
			asserGraphName = graphsPartName+'-assertion/'
			provGraphName = graphsPartName+'-provenance/'
			pubInfoGraphName = graphsPartName+'-pubinfo/'
			nanoGraphName = graphsPartName+'-head/'
			nanopublicationName = graphsPartName+'-np'
			label = influence.find('tei:desc', ns).text
			# assertions
			influenceGraph = rdflib.ConjunctiveGraph(identifier=URIRef(asserGraphName))
			influenceGraph.add(( URIRef(PB+'quote/'+passive), PROV.wasGeneratedBy, URIRef(PB+'generation/quote/'+passive) )) # Generation
			influenceGraph.add(( URIRef(PB+'generation/quote/'+passive), PROV.qualifiedInfluence, URIRef(graphsPartName) )) # Influence on generation
			influenceGraph.add(( URIRef(graphsPartName), PROV.agent, URIRef(PB+'quote/'+active) )) # influencer
			influenceGraph.add(( URIRef(PB+'generation/quote/'+passive), RDF.type, URIRef(PROV.Generation) )) # Generation
			influenceGraph.add(( URIRef(graphsPartName), RDF.type, URIRef(PROV.Influence) )) # Influence
			influenceGraph.add(( URIRef(graphsPartName), RDFS.label, Literal(label) )) # Influence
			influenceGraph.add(( URIRef(PB+'quote/'+passive), RDF.type, URIRef(OA.Annotation) )) # excerpt
			influenceGraph.add(( URIRef(PB+'quote/'+active), RDF.type, URIRef(OA.Annotation) )) # excerpt
			# provenance
			provenanceGraph = rdflib.ConjunctiveGraph(identifier=URIRef(provGraphName))
			provenanceGraph.add(( URIRef(asserGraphName), PROV.wasGeneratedBy, URIRef(graphsPartName+'int-act') )) # InterpretationAct
			provenanceGraph.add(( URIRef(graphsPartName+'int-act'), HICO.isExtractedFrom, URIRef(PB+'quote/'+passive) ))
			provenanceGraph.add(( URIRef(graphsPartName+'int-act'), HICO.isExtractedFrom, URIRef(PB+'quote/'+active) ))
			provenanceGraph.add(( URIRef(graphsPartName+'int-act'), HICO.hasInterpretationType, URIRef(PB+'int-type/similarity-between-texts-recognition') ))
			provenanceGraph.add(( URIRef(graphsPartName+'int-act'), HICO.hasInterpretationCriterion, URIRef(PB+'int-crit/comparison-of-texts') ))
			provenanceGraph.add(( URIRef(graphsPartName+'int-act'), PROV.wasAssociatedWith, URIRef(PB+'person/pb') ))
			provenanceGraph.add(( URIRef(graphsPartName+'int-act'), RDF.type, URIRef(HICO.InterpretationAct) ))
			# pub info
			pubinfoGraph = rdflib.ConjunctiveGraph(identifier=URIRef(pubInfoGraphName))
			pubinfoGraph.add(( URIRef(nanopublicationName), PROV.wasAttributedTo, URIRef(PB+'organization/cspc') ))
			pubinfoGraph.add(( URIRef(nanopublicationName), PROV.generatedAtTime, Literal('2018-01-01T00:00:01Z',datatype=XSD.dateTime) ))
			pubinfoGraph.add(( URIRef(PB+'organization/cspc'), RDF.type, URIRef(FOAF.Organization) ))
			pubinfoGraph.add(( URIRef(PB+'organization/cspc'), RDFS.label, Literal('Centro Studi Permanenza del Classico, Università di Bologna') ))
			# nanopublication header
			nanoGraph = rdflib.ConjunctiveGraph(identifier=URIRef(nanoGraphName))
			nanoGraph.add(( URIRef(nanopublicationName), RDF.type, URIRef(NP.Nanopublication) ))
			nanoGraph.add(( URIRef(nanopublicationName), NP.hasAssertion, URIRef(asserGraphName) ))
			nanoGraph.add(( URIRef(nanopublicationName), NP.hasProvenance, URIRef(provGraphName) ))
			nanoGraph.add(( URIRef(nanopublicationName), NP.hasPublicationInfo, URIRef(pubInfoGraphName) ))

			if not os.path.exists('text-influences'):
				os.makedirs('text-influences')
			influenceGraph.serialize(destination='text-influences/influence-'+str(n)+'.nq', format='nquads', explicit_base=True)
			provenanceGraph.serialize(destination='text-influences/provenance-'+str(n)+'.nq', format='nquads', explicit_base=True)
			pubinfoGraph.serialize(destination='text-influences/pubinfo-'+str(n)+'.nq', format='nquads', explicit_base=True)
			nanoGraph.serialize(destination='text-influences/head-'+str(n)+'.nq', format='nquads', explicit_base=True)
	# case 2: influence between people cited in some excerpts
	if listID == 'infuence-between-cited-people':
		n = 0
		for influence in influences.findall('tei:relation', ns):
			n = n+1
			active = influence.get('active').lower().split('#')[1]
			passive = influence.get('passive').lower().split('#')[1]
			author = influence.get('source').lower().split('#')[1]
			relation = influence.get('name')
			excerpt = influence.get('corresp').split('#')[1]
			graphsPartName = 'https://w3id.org/bufalinis-notebook/infl-'+active+'-'+relation+'-'+passive+'-'+excerpt # influence
			asserGraphName = graphsPartName+'-assertion/'
			provGraphName = graphsPartName+'-provenance/'
			pubInfoGraphName = graphsPartName+'-pubinfo/'
			nanoGraphName = graphsPartName+'-head/'
			nanopublicationName = graphsPartName+'-np'
			label = influence.find('tei:desc', ns).text

			# assertions
			influenceGraph = rdflib.ConjunctiveGraph(identifier=URIRef(asserGraphName))
			influenceGraph.add(( URIRef(PB+'person/'+active), URIRef(CITO+relation), URIRef(PB+'person/'+passive) )) # cito binary relation
			influenceGraph.add(( URIRef(PB+'person/'+passive), PROV.qualifiedInfluence, URIRef(graphsPartName) )) # Influence on person
			influenceGraph.add(( URIRef(graphsPartName), PROV.agent, URIRef(PB+'person/'+active) )) # influencer
			influenceGraph.add(( URIRef(graphsPartName), RDFS.label, Literal(label) ))

			# provenance
			provenanceGraph = rdflib.ConjunctiveGraph(identifier=URIRef(provGraphName))
			provenanceGraph.add(( URIRef(asserGraphName), PROV.wasGeneratedBy, URIRef(graphsPartName+'int-act') )) # PB's InterpretationAct
			provenanceGraph.add(( URIRef(graphsPartName+'int-act'), RDF.type, URIRef(HICO.InterpretationAct) ))
			provenanceGraph.add(( URIRef(graphsPartName+'int-act'), PROV.wasAssociatedWith, URIRef(PB+'person/pb') ))
			provenanceGraph.add(( URIRef(graphsPartName+'int-act'), HICO.hasInterpretationType, URIRef(PB+'int-type/relation-between-people') ))
			if 'comm' in excerpt:
				provenanceGraph.add(( URIRef(graphsPartName+'int-act'), HICO.isExtractedFrom, URIRef(PB+'comment/'+excerpt) ))
				provenanceGraph.add(( URIRef(graphsPartName+'int-act'), HICO.hasInterpretationCriterion, URIRef(PB+'int-crit/personal-analysis') ))
			if 'quot' in excerpt:
				# cited author's interpretation
				provenanceGraph.add(( URIRef(graphsPartName+'int-act-'+author), HICO.isExtractedFrom, URIRef(PB+'quote/'+excerpt) ))
				provenanceGraph.add(( URIRef(graphsPartName+'int-act-'+author), PROV.wasAssociatedWith, URIRef(PB+'person/'+author) ))
				provenanceGraph.add(( URIRef(graphsPartName+'int-act-'+author), HICO.hasInterpretationType, URIRef(PB+'int-type/relation-between-people') ))
				provenanceGraph.add(( URIRef(graphsPartName+'int-act-'+author), RDF.type, URIRef(HICO.InterpretationAct) ))
				# pb's interpretation
				provenanceGraph.add(( URIRef(graphsPartName+'int-act'), HICO.isExtractedFrom, URIRef(PB+'quote/'+excerpt) ))
				provenanceGraph.add(( URIRef(graphsPartName+'int-act'), HICO.hasInterpretationCriterion, URIRef(PB+'int-crit/author-quotation') ))
				provenanceGraph.add(( URIRef(graphsPartName+'int-act'), CITO.citesAsAuthority, URIRef(PB+'person/'+author) ))
				provenanceGraph.add(( URIRef(graphsPartName+'int-act'), CITO.obtainsBackgroundFrom, URIRef(graphsPartName+'int-act-'+author) ))

			# pub info
			pubinfoGraph = rdflib.ConjunctiveGraph(identifier=URIRef(pubInfoGraphName))
			pubinfoGraph.add(( URIRef(nanopublicationName), PROV.wasAttributedTo, URIRef(PB+'organization/cspc') ))
			pubinfoGraph.add(( URIRef(nanopublicationName), PROV.generatedAtTime, Literal('2018-01-01T00:00:01Z',datatype=XSD.dateTime) ))
			pubinfoGraph.add(( URIRef(PB+'organization/cspc'), RDF.type, URIRef(FOAF.Organization) ))
			pubinfoGraph.add(( URIRef(PB+'organization/cspc'), RDFS.label, Literal('Centro Studi Permanenza del Classico, Università di Bologna') ))
			# nanopublication header
			nanoGraph = rdflib.ConjunctiveGraph(identifier=URIRef(nanoGraphName))
			nanoGraph.add(( URIRef(nanopublicationName), RDF.type, URIRef(NP.Nanopublication) ))
			nanoGraph.add(( URIRef(nanopublicationName), NP.hasAssertion, URIRef(asserGraphName) ))
			nanoGraph.add(( URIRef(nanopublicationName), NP.hasProvenance, URIRef(provGraphName) ))
			nanoGraph.add(( URIRef(nanopublicationName), NP.hasPublicationInfo, URIRef(pubInfoGraphName) ))

			if not os.path.exists('people-influences'):
				os.makedirs('people-influences')
			influenceGraph.serialize(destination='people-influences/influence-'+str(n)+'.nq', format='nquads', explicit_base=True)
			provenanceGraph.serialize(destination='people-influences/provenance-'+str(n)+'.nq', format='nquads', explicit_base=True)
			pubinfoGraph.serialize(destination='people-influences/pubinfo-'+str(n)+'.nq', format='nquads', explicit_base=True)
			nanoGraph.serialize(destination='people-influences/head-'+str(n)+'.nq', format='nquads', explicit_base=True)

# rewrite all the nquads in single files all.nq
def merge_files(path):
	all_files = os.listdir(path)
	counter = 1
	files_list = []
	for file in all_files:
		if file.endswith(".nq"):
			with codecs.open(os.path.join(path,file),"rb", 'utf-8') as files:
				files = files.readlines()
				files_list.append(files)
				counter = counter + 1
	new_list = ("\n").join(["".join(x) for x in files_list])
	with codecs.open("rdf_dump/all.nq" ,"a", 'utf8') as final:
		return final.write(new_list)

path1 = dir_path+'/text-influences/'
path2 = dir_path+'/people-influences/'
path3 = dir_path+'/edition/'
merge_files(path1)
merge_files(path2)
merge_files(path3)
