# Paolo Bufalini's notebook
Web application of the digital edition of Paolo Bufalini's notebook.

It requires:

 * [web.py](http://webpy.org/)
 * [blazegraph](https://www.blazegraph.com/)

To reproduce/modify the corpus:

 * get data/xml/bufalini_quaderno.xml
 * transform bufalini_quaderno.xml to html with tei2html.xsl > quaderno.html;
 * move quaderno.html to web_app/static to be visualized
 * transform bufalini_quaderno.xml to RDF with tei2rdf.xsl > rdf_dump/quaderno_rdf.rdf
 * in blazegraph, CLEAR GRAPHS first (if the triplestore is not empty)
 * upload rdf_dump/quaderno_rdf.rdf on blazegraph in a graph called 'https://w3id.org/bufalinis-notebook/edition/' to avoid UTF8 problems (use the command: LOAD SILENT <file:///path/to/rdf_dump/quaderno_rdf.rdf> INTO GRAPH <https://w3id.org/bufalinis-notebook/edition/>)
 * run nquads.py to produce data about influences and questionable statements > rdf_dump/all.nq
 * load rdf_dump/all.nq on blazegraph
