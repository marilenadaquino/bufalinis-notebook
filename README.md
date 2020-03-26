# Paolo Bufalini's notebook
Web application of the digital edition of Paolo Bufalini's notebook.
It requires:

 * [web.py](http://webpy.org/)
 * [blazegraph](https://www.blazegraph.com/)

To reproduce the corpus:

 * edit data/xml/bufalini_quaderno.xml
 * transform it to html with tei2html.xsl > move xml/quaderno.html to web_app/static
 * transform it to RDF with tei2rdf.xsl > output rdf_dump/quaderno_rdf.rdf on blazegraph in a graph called 'https://w3id.org/bufalinis-notebook/edition/' to avoid UTF8 problems in nquads (CLEAR GRAPHS first)
 * run nquads.py > manually load rdf_dump/all.nq on blazegraph
