<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:tei="http://www.tei-c.org/ns/1.0" exclude-result-prefixes="tei">
    <xsl:output method="html" indent="yes" omit-xml-declaration="yes" encoding="UTF-8"/>
    <xsl:template match="/">
        <xsl:result-document href="xml/quaderno.html">
            <section class="tei_transcription">
                <xsl:copy>
                    <xsl:apply-templates select="//tei:text"/>
                </xsl:copy>
            </section>
        </xsl:result-document>
    </xsl:template>
    <xsl:template match="tei:teiHeader"/>
    <xsl:template match="tei:quote">
        <blockquote>
            <xsl:apply-templates select="@* | node()"/>
        </blockquote>
    </xsl:template>
    <xsl:template match="tei:p">
        <p>
            <xsl:apply-templates select="@* | node()"/>
        </p>
    </xsl:template>
    <xsl:template match="tei:cit | tei:lg | tei:text//tei:bibl | tei:note[not(@n)] | tei:dateline | tei:listBibl | tei:teiHeader//tei:bibl | tei:person | tei:listPerson | tei:listRelation | tei:relation | tei:linkGrp | tei:link">
        <section>
            <xsl:attribute name="class">
                <xsl:value-of select="name()"/>
            </xsl:attribute>
            <xsl:apply-templates select="@* | node()"/>
        </section>
    </xsl:template>
    <xsl:template match="tei:note[@n]">
        <section class="footnotes">
            <span class="fn-n">
                <xsl:value-of select="@n"/>
                <xsl:text> </xsl:text>
            </span>
            <p class="fn">
                <xsl:apply-templates select="@*[not(name()='n')] | node()"/>
            </p>
        </section>
    </xsl:template>
    <xsl:template match="tei:ref">
        <xsl:variable name="target">
            <xsl:value-of select="substring-after(@target, '#')"/>
        </xsl:variable>
        <xsl:choose>
            <xsl:when test="@target and @xml:id">
                <a href="{@target}" name="{@xml:id}" class="tooltip-ref">
                    <xsl:apply-templates select="@* | node()"/>
                    <span class="tooltiptext-ref">
                        <xsl:choose>
                            <xsl:when test="matches($target, '\d-\d')">
                                <xsl:value-of select="//tei:*[@xml:id = $target]/(ancestor-or-self::tei:quote | ancestor-or-self::tei:note | parent::tei:cit)"/>
                            </xsl:when>
                            <xsl:otherwise>
                                <xsl:value-of select="//tei:*[@xml:id = $target]"/>
                            </xsl:otherwise>
                        </xsl:choose>
                    </span>
                </a>
            </xsl:when>
            <xsl:when test="@target and not(@xml:id)">
                <a href="{@target}" class="tooltip-ref">
                    <xsl:apply-templates select="@* | node()"/>
                    <span class="tooltiptext-ref">
                        <xsl:choose>
                            <xsl:when test="matches($target, '\d-\d')">
                                <xsl:value-of select="//tei:*[@xml:id = $target]/(ancestor-or-self::tei:quote | ancestor-or-self::tei:note)"/>
                            </xsl:when>
                            <xsl:otherwise>
                                <xsl:value-of select="//tei:*[@xml:id = $target]"/>
                            </xsl:otherwise>
                        </xsl:choose>
                    </span>
                </a>
            </xsl:when>
            <xsl:otherwise>
                <p class="ref">
                    <xsl:attribute name="class">
                        <xsl:value-of select="name()"/>
                    </xsl:attribute>
                    <xsl:apply-templates select="@* | node()"/>
                </p>
            </xsl:otherwise>
        </xsl:choose>
    </xsl:template>
    <xsl:template match="tei:del">
        <del>
            <xsl:apply-templates select="@* | node()"/>
        </del>
    </xsl:template>
    <xsl:template match="tei:add">
        <ins>
            <xsl:apply-templates select="@* | node()"/>
        </ins>
    </xsl:template>
    <xsl:template match="tei:list">
        <ul>
            <xsl:apply-templates select="@* | node()"/>
        </ul>
    </xsl:template>
    <xsl:template match="tei:item">
        <li>
            <xsl:apply-templates select="@* | node()"/>
        </li>
    </xsl:template>
    <xsl:template match="tei:docAuthor | tei:titlePart | tei:docDate/tei:date | tei:addrLine | tei:l | tei:ab">
        <p>
            <xsl:attribute name="class">
                <xsl:value-of select="name()"/>
            </xsl:attribute>
            <xsl:apply-templates select="@* | node()"/>
        </p>
    </xsl:template>
    <xsl:template match="tei:body//tei:date | tei:cit//tei:biblScope | tei:placeName | tei:hi | tei:gap | tei:seg">
        <span>
            <xsl:attribute name="class">
                <xsl:value-of select="name()"/>
            </xsl:attribute>
            <xsl:apply-templates select="@* | node()"/>
        </span>
    </xsl:template>
    <xsl:template match="tei:persName">
        <xsl:variable name="pers-id">
            <xsl:value-of select="substring-after(@ref, '#')"/>
        </xsl:variable>
        <span class="tooltip persName">
            <xsl:apply-templates select="@*"/>
            <span class="tooltiptext">
                <xsl:value-of select="//tei:person[@xml:id = $pers-id]/tei:persName"/>
            </span>
            <xsl:value-of select="node()"/>
        </span>
    </xsl:template>
    <xsl:template match="tei:cit//tei:author">
        <xsl:variable name="pers-id">
            <xsl:value-of select="substring-after(@ref, '#')"/>
        </xsl:variable>
        <span class="author persName tooltip">
            <xsl:apply-templates select="@*"/>
            <span class="tooltiptext">
                <xsl:value-of select="//tei:person[@xml:id = $pers-id]/tei:persName"/>
            </span>
            <xsl:value-of select="node()"/>
        </span>
    </xsl:template>
    <xsl:template match="tei:quote/tei:title">
        <h2>
            <xsl:apply-templates select="@* | node()"/>
        </h2>
    </xsl:template>
    <xsl:template match="tei:lb[not(parent::tei:bibl)]">
        <br/>
    </xsl:template>
    <xsl:template match="tei:pb">
        <span>
            <xsl:attribute name="class">
                <xsl:value-of select="name()"/>
            </xsl:attribute>
            <xsl:apply-templates select="@* | node()"/>
        </span>
        <xsl:if test="@n mod 2 = 0">
            <xsl:choose>
                <xsl:when test="contains(@facs, 'v')">
                    <img class="thumbnail" src="{concat('/static/img/thumbnail/', substring-before(@facs, 'v'), '.jpg')}"/>
                </xsl:when>
                <xsl:otherwise>
                    <img class="thumbnail" src="{concat('/static/img/thumbnail/', @facs, '.jpg')}"/>
                </xsl:otherwise>
            </xsl:choose>
        </xsl:if>
    </xsl:template>
    <xsl:template match="tei:choice">
        <span class="tooltip">
            <xsl:value-of select="*[1]"/>
            <span class="tooltiptext">
                <xsl:value-of select="*[2]"/>
            </span>
        </span>
    </xsl:template>
    <xsl:template match="tei:graphic">
        <xsl:element name="img">
            <xsl:attribute name="id">
                <xsl:text>porto</xsl:text>
            </xsl:attribute>
            <xsl:attribute name="src">
                <xsl:value-of select="@url"/>
            </xsl:attribute>
            <xsl:attribute name="alt">
                <xsl:value-of select="following-sibling::tei:head/text()"/>
            </xsl:attribute>
        </xsl:element>
    </xsl:template>
    <xsl:template match="tei:figure/tei:head">
        <figcaption>
            <xsl:apply-templates select="@* | node()"/>
        </figcaption>
    </xsl:template>
    <xsl:template match="@*">
        <xsl:choose>
            <xsl:when test="name() = 'xml:id'">
                <xsl:attribute name="id">
                    <xsl:value-of select="."/>
                </xsl:attribute>
            </xsl:when>
            <xsl:when test="name() = 'xml:lang'">
                <xsl:attribute name="lang">
                    <xsl:value-of select="."/>
                </xsl:attribute>
            </xsl:when>
            <xsl:otherwise>
                <xsl:attribute name="{concat('data-', name())}">
                    <xsl:value-of select="."/>
                </xsl:attribute>
            </xsl:otherwise>
        </xsl:choose>
    </xsl:template>
    <xsl:template match="tei:div | tei:docTitle | tei:address">
        <xsl:apply-templates/>
    </xsl:template>
    <xsl:template match="tei:milestone"/>
</xsl:stylesheet>
