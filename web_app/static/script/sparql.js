var yasqe = YASQE(document.getElementById("yasqe"), {
	sparql: {
		showQueryButton: true,
		endpoint: "http://51.15.52.21:3030/sparql",
		requestMethod: "GET"
	}
});
var yasr = YASR(document.getElementById("yasr"), {
	//this way, the URLs in the results are prettified using the defined prefixes in the query
	getUsedPrefixes: yasqe.getPrefixesFromQuery
});

//link both together
yasqe.setValue("PREFIX cito: <http://purl.org/spar/cito/>\n
				PREFIX dcterms: <http://purl.org/dc/terms/>\n
				PREFIX fabio: <http://purl.org/spar/fabio/>\n
				PREFIX foaf: <http://xmlns.com/foaf/0.1/>\n
				PREFIX frbr: <http://purl.org/vocab/frbr/core#>\n
				PREFIX hico: <http://purl.org/emmedi/hico/>\n
				PREFIX np: <http://www.nanopub.org/nschema#>\n
				PREFIX oa: <http://www.w3.org/ns/oa#>\n
				PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n
				PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n
				PREFIX prism: <http://prismstandard.org/namespaces/1.2/basic/>\n
				PREFIX prov: <http://www.w3.org/ns/prov#>\n
				PREFIX owl: <http://www.w3.org/2002/07/owl#>\n
				PREFIX seq: <http://www.ontologydesignpatterns.org/cp/owl/sequence.owl#>\n")
yasqe.options.sparql.callbacks.complete = yasr.setResponse;