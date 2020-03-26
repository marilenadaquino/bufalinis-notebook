<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:tei="http://www.tei-c.org/ns/1.0" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#" xmlns:owl="http://www.w3.org/2002/07/owl#" xmlns:frbr="http://purl.org/vocab/frbr/core#" xmlns:prov="http://www.w3.org/ns/prov#" xmlns:cito="http://purl.org/spar/cito/" xmlns:dc="http://purl.org/dc/terms/" xmlns:oa="http://www.w3.org/ns/oa#"
    xmlns:dcterms="http://purl.org/dc/terms/" xmlns:foaf="http://xmlns.com/foaf/0.1/" xmlns:seq="http://www.ontologydesignpatterns.org/cp/owl/sequence.owl#" xmlns:prism="http://prismstandard.org/namespaces/1.2/basic/">
    <xsl:output method="xml" indent="yes" encoding="UTF-8"/>
    <xsl:param name="uribase">https://w3id.org/bufalinis-notebook/</xsl:param>
    <xsl:param name="frbr">http://purl.org/vocab/frbr/core#</xsl:param>
    <xsl:param name="fabio">http://purl.org/spar/fabio/</xsl:param>
    <xsl:template match="/">
        <xsl:result-document href="quaderno_rdf.rdf ">
            <rdf:RDF xmlns:tei="http://www.tei-c.org/ns/1.0"
                xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#"
                xmlns:owl="http://www.w3.org/2002/07/owl#"
                xmlns:frbr="http://purl.org/vocab/frbr/core#"
                xmlns:prov="http://www.w3.org/ns/prov#"
                xmlns:cito="http://purl.org/spar/cito/"
                xmlns:dc="http://purl.org/dc/terms/"
                xmlns:oa="http://www.w3.org/ns/oa#"
                xmlns:dcterms="http://purl.org/dc/terms/"
                xmlns:foaf="http://xmlns.com/foaf/0.1/"
                xmlns:seq="http://www.ontologydesignpatterns.org/cp/owl/sequence.owl#"
                xmlns:prism="http://prismstandard.org/namespaces/1.2/basic/">
                <xsl:apply-templates/>
            </rdf:RDF>
        </xsl:result-document>
    </xsl:template>

    <!-- Named templates -->
    <xsl:template name="title_level_m_WORK">
        <!-- title[@level='m'] -->
        <!-- Work -->
        <rdf:Description rdf:about="{lower-case(concat($uribase, 'work/', lower-case(substring-after(tei:author/@ref, '#')), lower-case(substring-after(tei:editor[0]/@ref, '#')), lower-case(substring-after(tei:editor[1]/@ref, '#')), '-', translate(translate(tei:title[@level='m'], ' :.;,&quot;', '-'), 'Ã©','e')))}">
            <rdf:type rdf:resource="{concat($fabio, tei:title[@level='m']/@type)}"/>
            <rdfs:label><xsl:value-of select="tei:title[@level='m']"/> </rdfs:label>
            <xsl:for-each select="tokenize(tei:title[@level='m']/@sameAs, '\s')"><owl:sameAs rdf:resource="{.}"/></xsl:for-each>
            <xsl:for-each select="tei:author|tei:editor"><dcterms:creator rdf:resource="{concat($uribase, 'person/', lower-case(substring-after(@ref,'#')))}"/></xsl:for-each>
        </rdf:Description>
    </xsl:template>
    <xsl:template name="title_level_m_EXPRESSION">
        <!-- title[@level='m'] -->
        <!-- Expression -->
        <rdf:Description rdf:about="{lower-case(concat($uribase, 'text/', lower-case(substring-after(tei:author/@ref, '#')), lower-case(substring-after(tei:editor[0]/@ref, '#')), lower-case(substring-after(tei:editor[1]/@ref, '#')), '-', translate(translate(tei:title[@level='m'], ' :.;,&quot;', '-'), 'Ã©','e')))}">
            <rdf:type rdf:resource="{concat($fabio, tei:title[@level='m']/@subtype)}"/>
            <rdfs:label><xsl:value-of select="tei:title[@level='m']"/></rdfs:label>
            <frbr:realizationOf rdf:resource="{lower-case(concat($uribase, 'work/', lower-case(substring-after(tei:author/@ref, '#')), lower-case(substring-after(tei:editor[0]/@ref, '#')), lower-case(substring-after(tei:editor[1]/@ref, '#')), '-', translate(translate(tei:title[@level='m'], ' :.;,&quot;', '-'), 'Ã©','e')))}"/>
        </rdf:Description>
    </xsl:template>

    <xsl:template name="title_level_m_AND_title_level_a_WORK">
        <!-- title[@level='m'] + title[@level='a'] and NO biblscope in the middle -->
        <!-- Work -->
        <rdf:Description rdf:about="{lower-case(concat($uribase, 'work/', lower-case(substring-after(tei:author/@ref, '#')), lower-case(substring-after(tei:editor[0]/@ref, '#')), lower-case(substring-after(tei:editor[1]/@ref, '#')), '-', translate(tei:title[@level='m'], ' :.;,&quot;', '-'), '/', translate(tei:title[@level='a'], ' :.;,&quot;', '-')))}">
            <rdf:type rdf:resource="{concat($fabio, tei:title[@level='a']/@type)}"/>
            <rdfs:label><xsl:value-of select="concat(tei:title[@level='m'], ', ', tei:title[@level='a'])"/></rdfs:label>
            <frbr:partOf rdf:resource="{lower-case(concat($uribase, 'work/', lower-case(substring-after(tei:author/@ref, '#')), lower-case(substring-after(tei:editor[0]/@ref, '#')), lower-case(substring-after(tei:editor[1]/@ref, '#')), '-', translate(tei:title[@level='m'], ' :.;,&quot;', '-')))}"/>
            <xsl:for-each select="tokenize(tei:title[@level='a']/@sameAs, '\s')"><owl:sameAs rdf:resource="{.}"/></xsl:for-each>
            <xsl:for-each select="tei:author|tei:editor"><dcterms:creator rdf:resource="{concat($uribase, 'person/', lower-case(substring-after(@ref,'#')))}"/></xsl:for-each>
        </rdf:Description>
    </xsl:template>
    <xsl:template name="title_level_m_AND_title_level_a_EXPRESSION">
        <!-- title[@level='m'] + title[@level='a'] and NO biblscope in the middle -->
        <!-- Expression -->
        <rdf:Description rdf:about="{lower-case(concat($uribase, 'text/', lower-case(substring-after(tei:author/@ref, '#')), lower-case(substring-after(tei:editor[0]/@ref, '#')), lower-case(substring-after(tei:editor[1]/@ref, '#')), '-', translate(tei:title[@level='m'], ' :.;,&quot;', '-'), '/', translate(tei:title[@level='a'], ' :.;,&quot;', '-')))}">
            <rdf:type rdf:resource="{concat($fabio, tei:title[@level='a']/@subtype)}"/>
            <rdfs:label><xsl:value-of select="concat(tei:title[@level='m'], ', ', tei:title[@level='a'])"/></rdfs:label>
            <frbr:realizationOf rdf:resource="{lower-case(concat($uribase, 'work/', lower-case(substring-after(tei:author/@ref, '#')), lower-case(substring-after(tei:editor[0]/@ref, '#')), lower-case(substring-after(tei:editor[1]/@ref, '#')), '-',  translate(tei:title[@level='m'], ' :.;,&quot;', '-'), '/', translate(tei:title[@level='a'], ' :.;,&quot;', '-')))}"/>
            <frbr:partOf rdf:resource="{lower-case(concat($uribase, 'text/', lower-case(substring-after(tei:author/@ref, '#')), lower-case(substring-after(tei:editor[0]/@ref, '#')), lower-case(substring-after(tei:editor[1]/@ref, '#')), '-', translate(tei:title[@level='m'], ' :.;,&quot;', '-')))}"/>
        </rdf:Description>
    </xsl:template>

    <xsl:template name="if_corresp_prev_next">
        <xsl:if test="@corresp">
            <xsl:choose>
                <xsl:when test="starts-with(substring-after(@corresp, '#') , 'q')">
                    <dcterms:relation rdf:resource="{concat($uribase, 'quote/', substring-after(@corresp, '#'))}"/>
                </xsl:when>
                <xsl:otherwise>
                    <dcterms:relation rdf:resource="{concat($uribase, 'note/', substring-after(@corresp, '#'))}"/>
                </xsl:otherwise>
            </xsl:choose>
        </xsl:if>
        <xsl:if test="@prev">
            <xsl:choose>
                <xsl:when test="starts-with(substring-after(@prev, '#') , 'q')">
                    <dcterms:relation rdf:resource="{concat($uribase, 'quote/', substring-after(@prev, '#'))}"/>
                </xsl:when>
                <xsl:otherwise>
                    <dcterms:relation rdf:resource="{concat($uribase, 'note/', substring-after(@prev, '#'))}"/>
                </xsl:otherwise>
            </xsl:choose>
        </xsl:if>
        <xsl:if test="@next">
            <xsl:choose>
                <xsl:when test="starts-with(substring-after(@next, '#') , 'q')">
                    <dcterms:relation rdf:resource="{concat($uribase, 'quote/', substring-after(@next, '#'))}"/>
                </xsl:when>
                <xsl:otherwise>
                    <dcterms:relation rdf:resource="{concat($uribase, 'note/', substring-after(@next, '#'))}"/>
                </xsl:otherwise>
            </xsl:choose>
        </xsl:if>
    </xsl:template>
    <!-- End of Named Templates -->
    <xsl:template match="text()"/>


    <!-- Riferimenti bibliografici NB risolvere ripetizioni, stesso Work pluri-elencato. Ci sono anche ripetizioni nel codice, abbreviare dove possibile creando templates -->
    <xsl:template match="//tei:listBibl">
        <xsl:for-each select="tei:bibl">
            <xsl:for-each select=".">
                <xsl:choose>
                    <!-- Caso 1 -->
                    <xsl:when test="tei:title[@level='m'] and tei:title[@level='a'] and tei:title[@level='a']/following-sibling::tei:biblScope[@unit] and tei:citedRange">
                        <!-- title[@level='m'] -->
                        <xsl:call-template name="title_level_m_WORK"/>
                        <xsl:call-template name="title_level_m_EXPRESSION"/>
                        <!-- title[@level='m'] + title[@level='a'] -->
                        <xsl:call-template name="title_level_m_AND_title_level_a_WORK"/>
                        <xsl:call-template name="title_level_m_AND_title_level_a_EXPRESSION"/>
                        <!-- title[@level='m'] + title[@level='a'] + title[@level='a']/following-sibling::biblScope[@unit] -->
                        <!-- Expression -->
                        <rdf:Description rdf:about="{lower-case(concat($uribase, 'text/', lower-case(substring-after(tei:author/@ref, '#')), lower-case(substring-after(tei:editor[0]/@ref, '#')), lower-case(substring-after(tei:editor[1]/@ref, '#')), '-', translate(tei:title[@level='m'], ' :.;,&quot;', '-'), '/', translate(tei:title[@level='a'], ' :.;,&quot;', '-'), '/', tei:title[@level='a']/following-sibling::tei:biblScope/@unit, '-', translate(tei:title[@level='a']/following-sibling::tei:biblScope, ' ,','-') ))}">
                            <rdf:type rdf:resource="{concat($fabio, 'Expression')}"/>
                            <rdfs:label>
                                <xsl:value-of select="concat(tei:title[@level='m'], ', ', tei:title[@level='a'], ', ', tei:title[@level='a']/following-sibling::tei:biblScope/@unit, ' ', tei:title[@level='a']/following-sibling::tei:biblScope)"/>
                            </rdfs:label>
                            <frbr:partOf rdf:resource="{lower-case(concat($uribase, 'text/', lower-case(substring-after(tei:author/@ref, '#')), lower-case(substring-after(tei:editor[0]/@ref, '#')), lower-case(substring-after(tei:editor[1]/@ref, '#')), '-', translate(tei:title[@level='m'], ' :.;,&quot;', '-'), '/', translate(tei:title[@level='a'], ' :.;,&quot;', '-')))}"/>
                        </rdf:Description>
                        <!-- (for each cited range) title[@level='m'] + title[@level='a'] + title[@level='a']/following-sibling::biblScope[@unit] -->
                        <!-- Expression -->
                        <xsl:for-each select="tei:citedRange">
                            <rdf:Description rdf:about="{concat($uribase, 'excerpt/', @xml:id)}">
                                <rdf:type rdf:resource="{concat($fabio, 'Excerpt')}"/>
                                <rdfs:label>
                                    <xsl:value-of select="concat(preceding-sibling::tei:title[@level='m'], ', ', preceding-sibling::tei:title[@level='a'], ', ', preceding-sibling::tei:biblScope/@unit, ' ', preceding-sibling::tei:biblScope, ', ', @unit, ' ', .)"/>
                                </rdfs:label>
                                <frbr:partOf rdf:resource="{lower-case(concat($uribase, 'text/', lower-case(substring-after(preceding-sibling::tei:author/@ref, '#')), lower-case(substring-after(preceding-sibling::tei:editor[0]/@ref, '#')), lower-case(substring-after(preceding-sibling::tei:editor[1]/@ref, '#')), '-', translate(preceding-sibling::tei:title[@level='m'], ' :.;,&quot;', '-'), '/', translate(preceding-sibling::tei:title[@level='a'], ' :.;,&quot;', '-'), '/', preceding-sibling::tei:biblScope/@unit, '-', translate(preceding-sibling::tei:biblScope,' ,','-') ))}"/>
                            </rdf:Description>
                        </xsl:for-each>
                    </xsl:when>
                    <!-- Caso 2 (quando biblScope Ã¨ fra title m e title a) -->
                    <xsl:when test="tei:title[@level='m'] and tei:title[@level='a']/preceding-sibling::tei:biblScope[@unit] and tei:title[@level='a'] and tei:citedRange">
                        <!-- title[@level='m'] -->
                        <!-- title[@level='m']: Work -->
                        <xsl:call-template name="title_level_m_WORK"/>
                        <!-- title[@level='m']: Expression -->
                        <xsl:call-template name="title_level_m_EXPRESSION"/>
                        <!-- title[@level='m'] + title[@level='a']/preceding-sibling::biblScope[@unit] -->
                        <!-- title[@level='m'] + title[@level='a']/preceding-sibling::biblScope[@unit]: only Expression -->
                        <rdf:Description rdf:about="{lower-case(concat($uribase, 'text/', lower-case(substring-after(tei:author/@ref, '#')), lower-case(substring-after(tei:editor[0]/@ref, '#')), lower-case(substring-after(tei:editor[1]/@ref, '#')), '-', translate(tei:title[@level='m'], ' :.;,&quot;', '-'), '/', tei:title[@level='a']/preceding-sibling::tei:biblScope/@unit, '-', translate(tei:title[@level='a']/preceding-sibling::tei:biblScope,' ,','-') ))}">
                            <rdf:type rdf:resource="{concat($fabio, 'Expression')}"/>
                            <rdfs:label>
                                <xsl:value-of select="concat(tei:title[@level='m'], ', ', tei:title[@level='a']/preceding-sibling::tei:biblScope/@unit, ' ', tei:title[@level='a']/preceding-sibling::tei:biblScope)"/>
                            </rdfs:label>
                            <frbr:partOf rdf:resource="{lower-case(concat($uribase, 'text/', lower-case(substring-after(tei:author/@ref, '#')), lower-case(substring-after(tei:editor[0]/@ref, '#')), lower-case(substring-after(tei:editor[1]/@ref, '#')), '-', translate(tei:title[@level='m'], ' :.;,&quot;', '-')))}"/>
                        </rdf:Description>

                        <!-- title[@level='m'] + title[@level='a']/preceding-sibling::biblScope[@unit] + title[@level='a'] -->
                        <!-- title[@level='m'] + title[@level='a']/preceding-sibling::biblScope[@unit] + title[@level='a']: Work -->
                        <xsl:call-template name="title_level_m_AND_title_level_a_WORK"/>
                        <!-- Expression -->
                        <rdf:Description rdf:about="{lower-case(concat($uribase, 'text/', lower-case(substring-after(tei:author/@ref, '#')), lower-case(substring-after(tei:editor[0]/@ref, '#')), lower-case(substring-after(tei:editor[1]/@ref, '#')), '-', translate(tei:title[@level='m'], ' :.;,&quot;', '-'), '/', tei:title[@level='a']/preceding-sibling::tei:biblScope/@unit, '-', translate(tei:title[@level='a']/preceding-sibling::tei:biblScope, ' ,','-') , '/', translate(tei:title[@level='a'], ' :.;,&quot;', '-')))}">
                            <rdf:type rdf:resource="{concat($fabio, tei:title[@level='a']/@subtype)}"/>
                            <rdfs:label>
                                <xsl:value-of select="concat(tei:title[@level='m'], ', ', tei:title[@level='a']/preceding-sibling::tei:biblScope/@unit, ' ', tei:title[@level='a']/preceding-sibling::tei:biblScope, ', ', tei:title[@level='a'])"/>
                            </rdfs:label>
                            <frbr:partOf rdf:resource="{lower-case(concat($uribase, 'text/', lower-case(substring-after(tei:author/@ref, '#')), lower-case(substring-after(tei:editor[0]/@ref, '#')), lower-case(substring-after(tei:editor[1]/@ref, '#')), '-', translate(tei:title[@level='m'], ' :.;,&quot;', '-'), '/', tei:title[@level='a']/preceding-sibling::tei:biblScope/@unit, '-', translate(tei:title[@level='a']/preceding-sibling::tei:biblScope, ' ,', '-')))}"/>
                            <frbr:realizationOf rdf:resource="{lower-case(concat($uribase, 'work/', lower-case(substring-after(tei:author/@ref, '#')), lower-case(substring-after(tei:editor[0]/@ref, '#')), lower-case(substring-after(tei:editor[1]/@ref, '#')), '-', translate(tei:title[@level='m'], ' :.;,&quot;', '-'), '/', translate(tei:title[@level='a'], ' :.;,&quot;', '-')))}"/>
                        </rdf:Description>
                        <!-- (for each cited range) title[@level='m'] + title[@level='a']/following-sibling::biblScope[@unit] + title[@level='a'] + citedRange -->
                        <!-- Expression -->
                        <xsl:for-each select="tei:citedRange">
                            <rdf:Description rdf:about="{concat($uribase, 'excerpt/', @xml:id)}">
                                <rdf:type rdf:resource="{concat($fabio, 'Excerpt')}"/>
                                <rdfs:label>
                                    <xsl:value-of select="concat(preceding-sibling::tei:title[@level='m'], ', ', preceding-sibling::tei:biblScope/@unit, ' ', preceding-sibling::tei:biblScope, ', ', preceding-sibling::tei:title[@level='a'], ', ', @unit, ' ', .)"/>
                                </rdfs:label>
                                <frbr:partOf rdf:resource="{lower-case(concat($uribase, 'text/', lower-case(substring-after(preceding-sibling::tei:author/@ref, '#')), lower-case(substring-after(preceding-sibling::tei:editor[0]/@ref, '#')), lower-case(substring-after(preceding-sibling::tei:editor[1]/@ref, '#')), '-', translate(preceding-sibling::tei:title[@level='m'], ' :.;,&quot;', '-'), '/', preceding-sibling::tei:biblScope/@unit, '-', translate(preceding-sibling::tei:biblScope, ' ,','-') , '/', translate(preceding-sibling::tei:title[@level='a'], ' :.;,&quot;', '-')))}"/>
                            </rdf:Description>
                        </xsl:for-each>
                    </xsl:when>
                    <!-- Caso 3 -->
                    <xsl:when test="tei:title[@level='m'] and tei:biblScope[@unit] and not(tei:title[@level='a']) and tei:citedRange">
                        <!-- title[@level='m'] -->
                        <xsl:call-template name="title_level_m_WORK"/>
                        <xsl:call-template name="title_level_m_EXPRESSION"/>
                        <!-- title[@level='m'] + biblScope[@unit] NB 1+ biblScope talvolta presenti, utilizzato il [1] poi il [2] -->
                        <!-- Expression -->
                        <xsl:choose>
                            <xsl:when test="tei:biblScope[2]">
                                <rdf:Description rdf:about="{lower-case(concat($uribase, 'text/', lower-case(substring-after(tei:author/@ref, '#')), lower-case(substring-after(tei:editor[0]/@ref, '#')), lower-case(substring-after(tei:editor[1]/@ref, '#')), '-', translate(tei:title[@level='m'], ' :.;,&quot;', '-'), '/', tei:biblScope[1]/@unit, '-', translate(tei:biblScope[1], ' ,','-'), '/', tei:biblScope[2]/@unit, '-', translate(tei:biblScope[2], ' ,','-')))}">
                                    <rdf:type rdf:resource="{concat($fabio, 'Expression')}"/>
                                    <rdfs:label>
                                        <xsl:value-of select="concat(tei:title[@level='m'], ', ', tei:biblScope[1]/@unit, ' ', tei:biblScope[1], ', ', tei:biblScope[2]/@unit, ' ', tei:biblScope[2])"/>
                                    </rdfs:label>
                                    <frbr:partOf rdf:resource="{lower-case(concat($uribase, 'text/', lower-case(substring-after(tei:author/@ref, '#')), lower-case(substring-after(tei:editor[0]/@ref, '#')), lower-case(substring-after(tei:editor[1]/@ref, '#')), '-', translate(tei:title[@level='m'], ' :.;,&quot;', '-')))}"/>
                                </rdf:Description>
                            </xsl:when>
                            <xsl:otherwise>
                                <rdf:Description rdf:about="{lower-case(concat($uribase, 'text/', lower-case(substring-after(tei:author/@ref, '#')), lower-case(substring-after(tei:editor[0]/@ref, '#')), lower-case(substring-after(tei:editor[1]/@ref, '#')), '-', translate(tei:title[@level='m'], ' :.;,&quot;', '-'), '/', tei:biblScope[1]/@unit, '-', translate(tei:biblScope[1], ' ,', '-')))}">
                                    <rdf:type rdf:resource="{concat($fabio, 'Expression')}"/>
                                    <rdfs:label>
                                        <xsl:value-of select="concat(tei:title[@level='m'], ', ', tei:biblScope[1]/@unit, ' ', tei:biblScope[1] )"/>
                                    </rdfs:label>
                                    <frbr:partOf rdf:resource="{lower-case(concat($uribase, 'text/', lower-case(substring-after(tei:author/@ref, '#')), lower-case(substring-after(tei:editor[0]/@ref, '#')), lower-case(substring-after(tei:editor[1]/@ref, '#')), '-', translate(tei:title[@level='m'], ' :.;,&quot;', '-')))}"/>
                                </rdf:Description>
                            </xsl:otherwise>
                        </xsl:choose>

                        <!-- (for each cited range) title[@level='m'] + biblScope[@unit] + citedRange -->
                        <!-- Expression -->
                        <xsl:choose>
                            <xsl:when test="tei:biblScope[2]">
                                <xsl:for-each select="tei:citedRange">
                                    <rdf:Description rdf:about="{concat($uribase, 'excerpt/', @xml:id)}">
                                        <rdf:type rdf:resource="{concat($fabio, 'Excerpt')}"/>
                                        <rdfs:label>
                                            <xsl:value-of select="concat(preceding-sibling::tei:title[@level='m'], ', ', preceding-sibling::tei:biblScope[2]/@unit, ' ', preceding-sibling::tei:biblScope[2], ', ', preceding-sibling::tei:biblScope[1]/@unit, ' ', preceding-sibling::tei:biblScope[1], ', ', @unit, ' ', .)"/>
                                        </rdfs:label>
                                        <frbr:partOf rdf:resource="{lower-case(concat($uribase, 'text/', lower-case(substring-after(preceding-sibling::tei:author/@ref, '#')), lower-case(substring-after(preceding-sibling::tei:editor[0]/@ref, '#')), lower-case(substring-after(preceding-sibling::tei:editor[1]/@ref, '#')), '-', translate(preceding-sibling::tei:title[@level='m'], ' :.;,&quot;', '-'), '/', preceding-sibling::tei:biblScope[2]/@unit, '-', translate(preceding-sibling::tei:biblScope[2], ' ,','-'), '/', preceding-sibling::tei:biblScope[1]/@unit, '-', translate(preceding-sibling::tei:biblScope[1], ' ,','-')))}"/>
                                    </rdf:Description>
                                </xsl:for-each>
                            </xsl:when>
                            <xsl:otherwise>
                                <xsl:for-each select="tei:citedRange">
                                    <rdf:Description rdf:about="{concat($uribase, 'excerpt/', @xml:id)}">
                                        <rdf:type rdf:resource="{concat($fabio, 'Excerpt')}"/>
                                        <rdfs:label>
                                            <xsl:value-of select="concat(preceding-sibling::tei:title[@level='m'], ', ', preceding-sibling::tei:biblScope[1]/@unit, ' ', preceding-sibling::tei:biblScope[1], ', ', @unit, ' ', .)"/>
                                        </rdfs:label>
                                        <frbr:partOf rdf:resource="{lower-case(concat($uribase, 'text/', lower-case(substring-after(preceding-sibling::tei:author/@ref, '#')), lower-case(substring-after(preceding-sibling::tei:editor[0]/@ref, '#')), lower-case(substring-after(preceding-sibling::tei:editor[1]/@ref, '#')), '-',  translate(preceding-sibling::tei:title[@level='m'], ' :.;,&quot;', '-'), '/', preceding-sibling::tei:biblScope[1]/@unit, '-', translate(preceding-sibling::tei:biblScope[1], ' ,', '-')))}"/>
                                    </rdf:Description>
                                </xsl:for-each>
                            </xsl:otherwise>
                        </xsl:choose>

                    </xsl:when>
                    <!-- Caso 4 -->
                    <xsl:when test="tei:title[@level='m'] and tei:title[@level='a'] and not(tei:biblScope[@unit]) and tei:citedRange">
                        <!-- title[@level='m'] -->
                        <xsl:call-template name="title_level_m_WORK"/>
                        <xsl:call-template name="title_level_m_EXPRESSION"/>
                        <!-- title[@level='m'] + title[@level='a'] -->
                        <xsl:call-template name="title_level_m_AND_title_level_a_WORK"/>
                        <xsl:call-template name="title_level_m_AND_title_level_a_EXPRESSION"/>
                        <!-- (for each cited range) title[@level='m'] + title[@level='a'] + citedRange -->
                        <!-- Expression -->
                        <xsl:for-each select="tei:citedRange">
                            <rdf:Description rdf:about="{concat($uribase, 'excerpt/', @xml:id)}">
                                <rdf:type rdf:resource="{concat($fabio, 'Excerpt')}"/>
                                <rdfs:label>
                                    <xsl:value-of select="concat(preceding-sibling::tei:title[@level='m'], ', ', preceding-sibling::tei:title[@level='a'], ', ', @unit, ' ', .)"/>
                                </rdfs:label>
                                <frbr:partOf rdf:resource="{lower-case(concat($uribase, 'text/', lower-case(substring-after(preceding-sibling::tei:author/@ref, '#')), lower-case(substring-after(preceding-sibling::tei:editor[0]/@ref, '#')), lower-case(substring-after(preceding-sibling::tei:editor[1]/@ref, '#')), '-',translate(preceding-sibling::tei:title[@level='m'], ' :.;,&quot;', '-'), '/', translate(preceding-sibling::tei:title[@level='a'], ' :.;,&quot;', '-')))}"/>
                            </rdf:Description>
                        </xsl:for-each>
                    </xsl:when>
                    <!-- Caso 5 -->
                    <xsl:when test="tei:title[@level='m'] and not(tei:title[@level='a']) and not(tei:biblScope[@unit]) and tei:citedRange">
                        <!-- title[@level='m'] -->
                        <xsl:call-template name="title_level_m_WORK"/>
                        <xsl:call-template name="title_level_m_EXPRESSION"/>
                        <!-- (for each cited range) title[@level='m'] + citedRange -->
                        <!-- Expression -->
                        <xsl:variable name="editor1" select="tei:editor[0]"></xsl:variable>
                        <xsl:variable name="editor2" select="tei:editor[1]"></xsl:variable>
                        <xsl:for-each select="tei:citedRange">
                            <rdf:Description rdf:about="{concat($uribase, 'excerpt/', @xml:id)}">
                                <rdf:type rdf:resource="{concat($fabio, 'Excerpt')}"/>
                                <rdfs:label>
                                    <xsl:value-of select="concat(preceding-sibling::tei:title[@level='m'], ', ', @unit, ' ', .)"/>
                                </rdfs:label>
                                <frbr:partOf rdf:resource="{lower-case(concat($uribase, 'text/', lower-case(substring-after(preceding-sibling::tei:author/@ref, '#')), lower-case(substring-after($editor1/@ref, '#')), lower-case(substring-after($editor2/@ref, '#')), '-', translate(translate(preceding-sibling::tei:title[@level='m'], ' :.;,&quot;', '-'), 'Ã©','e')))}"/>
                            </rdf:Description>
                        </xsl:for-each>
                    </xsl:when>
                </xsl:choose>
            </xsl:for-each>
        </xsl:for-each>
    </xsl:template>
    <!-- Persone -->
    <xsl:template match="//tei:listPerson">
        <xsl:for-each select="tei:person">
            <rdf:Description rdf:about="{concat($uribase, 'person/', lower-case(@xml:id))}">
                <rdf:type rdf:resource="http://xmlns.com/foaf/0.1/Person"/>
                <rdfs:label>
                    <xsl:value-of select="tei:persName"/>
                </rdfs:label>
                <xsl:for-each select="tokenize(tei:persName/@sameAs, '\s')">
                    <owl:sameAs rdf:resource="{.}"/>
                </xsl:for-each>
            </rdf:Description>
        </xsl:for-each>
        <xsl:apply-templates/>
    </xsl:template>

    <!-- Relazioni NB da completare con provenance, values, classi quando estraiamo le quotation dal testo pieno -->
    <!--<xsl:template match="tei:listRelation[@type='influence-between-texts']">
        <xsl:for-each select="tei:relation">
            <!-\- Local URIs -\->
            <xsl:variable name="relation_passive_URI">
                <xsl:value-of select="lower-case(concat($uribase, 'quote/', substring-after(@passive, '#')))"/>
            </xsl:variable>
            <xsl:variable name="relation_active_URI">
                <xsl:value-of select="lower-case(concat($uribase, 'quote/', substring-after(@active, '#')))"/>
            </xsl:variable>
            <xsl:variable name="relation_influence_URI">
                <xsl:value-of select="lower-case(concat($uribase, 'influence/', substring-after(@passive, '#'), '-', substring-after(@active, '#')))"/>
            </xsl:variable>
            <xsl:variable name="relation_influencer_URI">
                <xsl:value-of select="lower-case(concat($uribase, 'role/influencer'))"/>
            </xsl:variable>
            <rdf:Description rdf:about="{$relation_passive_URI}">
                <prov:qualifiedAssociation>
                    <rdf:Description rdf:about="{$relation_influence_URI}">
                        <rdf:type rdf:resource="http://www.w3.org/ns/prov#Influence"/>
                        <prov:agent>
                            <rdf:Description rdf:about="{$relation_active_URI}">
                                <prov:hadRole rdf:resource="{$relation_influencer_URI}"/>
                            </rdf:Description>
                        </prov:agent>
                        <rdfs:label>
                            <xsl:value-of select="tei:desc"/>
                        </rdfs:label>
                    </rdf:Description>
                </prov:qualifiedAssociation>
            </rdf:Description>
        </xsl:for-each>
    </xsl:template>
    <xsl:template match="tei:listRelation[@type='infuence-between-cited-people']">
        <xsl:for-each select="tei:relation">
            <!-\- Local URIs -\->
            <xsl:variable name="relation_passive_URI">
                <xsl:value-of select="lower-case(concat($uribase, 'quote/', substring-after(@passive, '#')))"/>
            </xsl:variable>
            <xsl:variable name="relation_active_URI">
                <xsl:value-of select="lower-case(concat($uribase, 'quote/', substring-after(@active, '#')))"/>
            </xsl:variable>
            <xsl:variable name="relation_influence_URI">
                <xsl:value-of select="lower-case(concat($uribase, 'influence/', substring-after(@passive, '#'), '-', substring-after(@active, '#')))"/>
            </xsl:variable>
            <xsl:variable name="relation_influence-type_URI">
                <xsl:value-of select="concat('http://purl.org/spar/cito/', @name)"/>
            </xsl:variable>
            <rdf:Description rdf:about="{$relation_passive_URI}">
                <prov:qualifiedAssociation>
                    <rdf:Description rdf:about="{$relation_influence_URI}">
                        <rdf:type rdf:resource="http://www.w3.org/ns/prov#Influence"/>
                        <prov:agent>
                            <rdf:Description rdf:about="{$relation_active_URI}">
                                <prov:hadRole rdf:resource="{$relation_influence-type_URI}"/>
                            </rdf:Description>
                        </prov:agent>
                        <rdfs:label>
                            <xsl:value-of select="tei:desc"/>
                        </rdfs:label>
                        <xsl:for-each select="tokenize(@corresp, '\s')">
                            <xsl:element name="prov:hadPrimarySource">
                                <xsl:attribute name="rdf:resource">
                                    <!-\- relation_source_URI -\->
                                    <xsl:choose>
                                        <xsl:when test="contains(substring-after(., '#'), 'comm')">
                                            <xsl:value-of select="concat($uribase, 'note/', substring-after(., '#'))"/>
                                        </xsl:when>
                                        <xsl:when test="contains(substring-after(., '#'), 'quot')">
                                            <xsl:value-of select="concat($uribase, 'quote/', substring-after(., '#'))"/>
                                        </xsl:when>
                                    </xsl:choose>
                                </xsl:attribute>
                            </xsl:element>
                        </xsl:for-each>
                    </rdf:Description>
                </prov:qualifiedAssociation>
            </rdf:Description>
        </xsl:for-each>
    </xsl:template>
    -->

    <xsl:template match="//tei:body">
        <xsl:for-each select="tei:div//tei:cit[@xml:id]">
            <xsl:variable name="page" select="preceding::tei:pb[1]/@n"/>
            <rdf:Description rdf:about="{concat($uribase, 'citation/', @xml:id)}">
                <rdf:type rdf:resource="http://purl.org/spar/cito/Citation"/>
                <cito:hasCitingEntity rdf:resource="{concat($uribase, 'page/', preceding::tei:pb[1]/@n)}"/>
                <!-- modificato path, check con MD -->
                <xsl:for-each select="tei:quote">
                    <cito:hasCitedEntity>
                        <rdf:Description rdf:about="{concat($uribase, 'excerpt/', substring-after(@source, '#'))}">
                            <rdf:value rdf:parseType="XMLLiteral">
                                <section xmlns="http://www.tei-c.org/ns/1.0">
                                    <xsl:copy-of select="*"/>
                                </section>
                            </rdf:value>
                            <!-- TO DO templates conversione html -->
                            <xsl:call-template name="if_corresp_prev_next"/>
                            <!-- aggiunto da FG, ok? -->
                            <xsl:for-each select="descendant::tei:persName">
                                <dcterms:references rdf:resource="{concat($uribase, 'person/', lower-case(substring-after(@ref, '#')))}"/>
                            </xsl:for-each>
                            <prism:startingPage rdf:resource="{concat($uribase, 'page/', $page)}"/>
                        </rdf:Description>
                    </cito:hasCitedEntity>
                </xsl:for-each>
            </rdf:Description>
            <xsl:for-each select="tei:quote">
                <rdf:Description rdf:about="{concat($uribase, 'quote/', @xml:id)}">
                    <rdf:type rdf:resource="http://www.w3.org/ns/oa#Annotation"/>
                    <oa:hasTarget rdf:resource="{concat($uribase, 'citation/', ancestor::tei:cit[1]/@xml:id)}"/>
                    <!-- modificato parent::cit con ancestor::cit per catturare anche @xml:id in ref  -->
                    <oa:hasBody rdf:resource="{concat($uribase, 'excerpt/', substring-after(@source, '#'))}"/>
                    <oa:motivatedBy>
                        <rdf:Description rdf:about="{concat($uribase, 'quotation')}">
                            <rdfs:label>quotation</rdfs:label>
                        </rdf:Description>
                    </oa:motivatedBy>
                    <xsl:if test="@next">
                        <seq:directlyPrecedes rdf:resource="{concat($uribase, 'quote/', substring-after(@next, '#'))}"/>
                    </xsl:if>
                    <xsl:if test="@prev">
                        <seq:directlyFollows rdf:resource="{concat($uribase, 'quote/', substring-after(@prev, '#'))}"/>
                    </xsl:if>
                </rdf:Description>
                <rdf:Description rdf:about="{concat($uribase, 'excerpt/', substring-after(@source, '#'))}">
                    <xsl:if test="@resp">
                        <frbr:realizer rdf:resource="{concat($uribase,'person/', lower-case(substring-after(@resp,'#')))}"/>
                    </xsl:if>
                    <xsl:for-each select="descendant::tei:persName">
                        <dcterms:references rdf:resource="{concat($uribase, 'person/', lower-case(substring-after(@ref, '#')))}"/>
                    </xsl:for-each>
                    <xsl:if test="@type = 'translation' and @corresp">
                        <xsl:choose>
                            <xsl:when test="starts-with(substring-after(@corresp, '#') , 'q')">
                                <frbr:translationOf rdf:resource="{concat($uribase, 'quote/', substring-after(@corresp, '#'))}"/>
                            </xsl:when>
                            <xsl:when test="starts-with(substring-after(@corresp, '#') , 'c')">
                                <frbr:translationOf rdf:resource="{concat($uribase, 'note/', substring-after(@corresp, '#'))}"/>
                            </xsl:when>
                            <xsl:otherwise><xsl:call-template name="if_corresp_prev_next"/></xsl:otherwise>
                        </xsl:choose>
                    </xsl:if>


                </rdf:Description>
            </xsl:for-each>
            <xsl:for-each select="tei:note">
                <rdf:Description rdf:about="{concat($uribase, 'comment/', @xml:id)}">
                    <rdf:type rdf:resource="http://www.w3.org/ns/oa#Annotation"/>
                    <oa:hasTarget rdf:resource="{concat($uribase, 'citation/', ancestor::tei:cit[1]/@xml:id)}"/>
                    <oa:hasBody>
                        <rdf:Description rdf:about="{concat($uribase, 'note/', @xml:id)}">
                            <rdf:value rdf:parseType="XMLLiteral">
                                <section xmlns="http://www.tei-c.org/ns/1.0">
                                    <xsl:copy-of select="node()|@*"/>
                                </section>
                            </rdf:value>
                            <!-- TO DO templates conversione html-->
                            <xsl:for-each select="descendant::tei:persName">
                                <dcterms:references rdf:resource="{concat($uribase, 'person/', lower-case(substring-after(@ref, '#')))}"/>
                            </xsl:for-each>
                            <xsl:if test="@type = 'translation' and @corresp">
                                <xsl:choose>
                                    <xsl:when test="starts-with(substring-after(@corresp, '#') , 'q')">
                                        <frbr:translationOf rdf:resource="{concat($uribase, 'quote/', substring-after(@corresp, '#'))}"/>
                                    </xsl:when>
                                    <xsl:when test="starts-with(substring-after(@corresp, '#') , 'c')">
                                        <frbr:translationOf rdf:resource="{concat($uribase, 'note/', substring-after(@corresp, '#'))}"/>
                                    </xsl:when>
                                    <xsl:otherwise><xsl:call-template name="if_corresp_prev_next"/></xsl:otherwise>
                                </xsl:choose>
                            </xsl:if>
                            <xsl:if test="@resp">
                                <frbr:realizer rdf:resource="{concat($uribase,'person/', lower-case(substring-after(@resp,'#')))}"/>
                            </xsl:if>
                            <prism:startingPage rdf:resource="{concat($uribase, 'page/', $page)}"/>
                        </rdf:Description>
                    </oa:hasBody>
                    <oa:motivatedBy>
                        <rdf:Description rdf:about="{concat($uribase, @type)}">
                            <rdfs:label>
                                <xsl:value-of select="@type"/>
                            </rdfs:label>
                        </rdf:Description>
                    </oa:motivatedBy>
                    <xsl:if test="@next">
                        <seq:directlyPrecedes rdf:resource="{concat($uribase, 'comment/', substring-after(@next, '#'))}"/>
                    </xsl:if>
                    <xsl:if test="@prev">
                        <seq:directlyFollows rdf:resource="{concat($uribase, 'comment/', substring-after(@prev, '#'))}"/>
                    </xsl:if>
                    <xsl:if test="@type = 'translation' and @corresp">
                        <xsl:choose>
                            <xsl:when test="starts-with(substring-after(@corresp, '#') , 'q')">
                                <frbr:translationOf rdf:resource="{concat($uribase, 'quote/', substring-after(@corresp, '#'))}"/>
                            </xsl:when>
                            <xsl:when test="starts-with(substring-after(@corresp, '#') , 'c')">
                                <frbr:translationOf rdf:resource="{concat($uribase, 'note/', substring-after(@corresp, '#'))}"/>
                            </xsl:when>
                            <xsl:otherwise><xsl:call-template name="if_corresp_prev_next"/></xsl:otherwise>
                        </xsl:choose>
                    </xsl:if>
                    <xsl:if test="@type = 'comment' and @corresp">
                        <xsl:choose>
                            <xsl:when test="starts-with(substring-after(@corresp, '#') , 'q')">
                                <frbr:complementOf rdf:resource="{concat($uribase, 'quote/', substring-after(@corresp, '#'))}"/>
                            </xsl:when>
                            <xsl:when test="starts-with(substring-after(@corresp, '#') , 'c')">
                                <frbr:complementOf rdf:resource="{concat($uribase, 'note/', substring-after(@corresp, '#'))}"/>
                            </xsl:when>
                            <xsl:otherwise><xsl:call-template name="if_corresp_prev_next"/></xsl:otherwise>
                        </xsl:choose>
                    </xsl:if>
                </rdf:Description>
            </xsl:for-each>
        </xsl:for-each>
        <xsl:for-each select="tei:div//tei:note[not(ancestor::tei:cit)]">
            <xsl:variable name="page" select="preceding::tei:pb[1]/@n"/>
            <rdf:Description rdf:about="{concat($uribase, 'comment/', @xml:id)}">
                <rdf:type rdf:resource="http://www.w3.org/ns/oa#Annotation"/>
                <oa:hasTarget rdf:resource="{concat($uribase, 'citation/', ancestor::tei:cit[1]/@xml:id)}"/>
                <oa:hasBody>
                    <rdf:Description rdf:about="{concat($uribase, 'note/', @xml:id)}">
                        <rdf:value rdf:parseType="XMLLiteral">
                            <section xmlns="http://www.tei-c.org/ns/1.0">
                                <xsl:copy-of select="node()|@*"/>
                            </section>
                        </rdf:value>
                        <!-- TO DO templates conversione html-->
                        <xsl:for-each select="descendant::tei:persName">
                            <dcterms:references rdf:resource="{concat($uribase, 'person/', lower-case(substring-after(@ref, '#')))}"/>
                        </xsl:for-each>
                        <xsl:if test="@type = 'translation' and @corresp">
                            <xsl:choose>
                                <xsl:when test="starts-with(substring-after(@corresp, '#') , 'q')">
                                    <frbr:translationOf rdf:resource="{concat($uribase, 'quote/', substring-after(@corresp, '#'))}"/>
                                </xsl:when>
                                <xsl:when test="starts-with(substring-after(@corresp, '#') , 'c')">
                                    <frbr:translationOf rdf:resource="{concat($uribase, 'note/', substring-after(@corresp, '#'))}"/>
                                </xsl:when>
                                <xsl:otherwise><xsl:call-template name="if_corresp_prev_next"/></xsl:otherwise>
                            </xsl:choose>
                        </xsl:if>
                        <xsl:if test="@resp">
                            <frbr:realizer rdf:resource="{concat($uribase,'person/', lower-case(substring-after(@resp,'#')))}"/>
                        </xsl:if>
                        <prism:startingPage rdf:resource="{concat($uribase, 'page/', $page)}"/>
                    </rdf:Description>
                </oa:hasBody>
                <oa:motivatedBy>
                    <rdf:Description rdf:about="{concat($uribase, @type)}">
                        <rdfs:label>
                            <xsl:value-of select="@type"/>
                        </rdfs:label>
                    </rdf:Description>
                </oa:motivatedBy>
                <xsl:if test="@next">
                    <seq:directlyPrecedes rdf:resource="{concat($uribase, 'comment/', substring-after(@next, '#'))}"/>
                </xsl:if>
                <xsl:if test="@prev">
                    <seq:directlyFollows rdf:resource="{concat($uribase, 'comment/', substring-after(@prev, '#'))}"/>
                </xsl:if>
                <xsl:if test="@type = 'translation' and @corresp">
                    <xsl:choose>
                        <xsl:when test="starts-with(substring-after(@corresp, '#') , 'q')">
                            <frbr:translationOf rdf:resource="{concat($uribase, 'quote/', substring-after(@corresp, '#'))}"/>
                        </xsl:when>
                        <xsl:when test="starts-with(substring-after(@corresp, '#') , 'c')">
                            <frbr:translationOf rdf:resource="{concat($uribase, 'note/', substring-after(@corresp, '#'))}"/>
                        </xsl:when>
                        <xsl:otherwise><xsl:call-template name="if_corresp_prev_next"/></xsl:otherwise>
                    </xsl:choose>
                </xsl:if>
                <xsl:if test="@type = 'comment' and @corresp">
                    <xsl:choose>
                        <xsl:when test="starts-with(substring-after(@corresp, '#') , 'q')">
                            <frbr:complementOf rdf:resource="{concat($uribase, 'quote/', substring-after(@corresp, '#'))}"/>
                        </xsl:when>
                        <xsl:when test="starts-with(substring-after(@corresp, '#') , 'c')">
                            <frbr:complementOf rdf:resource="{concat($uribase, 'note/', substring-after(@corresp, '#'))}"/>
                        </xsl:when>
                        <xsl:otherwise><xsl:call-template name="if_corresp_prev_next"/></xsl:otherwise>
                    </xsl:choose>
                </xsl:if>
            </rdf:Description>
        </xsl:for-each>

        <!-- pages -->
        <xsl:for-each select="//tei:pb">
            <rdf:Description rdf:about="{concat($uribase, 'page/', @n)}">
                    <xsl:choose>
                        <xsl:when test="contains(@facs,'v')">
                            <rdfs:label><xsl:value-of select="concat('pag. ', @n )"></xsl:value-of></rdfs:label>
                            <foaf:img rdf:resource="{concat($uribase, 'static/img/quad', substring-before(substring-after(@facs,'quad'), 'v'), '.jpg')}"/>
                        </xsl:when>
                        <xsl:when test="contains(@facs,'r')">
                            <rdfs:label><xsl:value-of select="concat('pag. ', @n)"></xsl:value-of></rdfs:label>
                            <foaf:img rdf:resource="{concat($uribase, 'static/img/quad', substring-before(substring-after(@facs,'quad'), 'r'), '.jpg')}"/>
                        </xsl:when>
                        <xsl:otherwise>
                            <rdfs:label><xsl:value-of select="concat('pag. ', @n)"></xsl:value-of></rdfs:label>
                            <foaf:img rdf:resource="{concat($uribase,'static/img/', @facs , '.jpg')}"/>
                        </xsl:otherwise>
                    </xsl:choose>
            </rdf:Description>
        </xsl:for-each>
        <xsl:apply-templates/>
    </xsl:template>
</xsl:stylesheet>
