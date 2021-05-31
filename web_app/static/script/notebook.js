function loadBundles(lang,gotohash) {

        jQuery.i18n.properties({
            name: 'Messages',
            path: 'static/script/bundle/',
            mode: 'both',
            cache: 'true',
            language: lang,
            checkAvailableLanguages: true,
            async: true,
            callback: function() {
              $("#i_title").html($.i18n.prop('i_title'));
              $("#main_title").html($.i18n.prop('main_title'));
              $("#main_subtitle").html($.i18n.prop('main_subtitle'));
              // navbar
              $("#nav_1").html($.i18n.prop('nav_1'));
              $("#nav_2").html($.i18n.prop('nav_2'));
              $("#nav_3").html($.i18n.prop('nav_3'));
              $("#nav_4").html($.i18n.prop('nav_4'));
              $("#nav_5").html($.i18n.prop('nav_5'));
              $("#nav_lang").html($.i18n.prop('nav_lang'));
              // home
              $("#button_learn_more").html($.i18n.prop('button_learn_more'));
              $("#author_name").html($.i18n.prop('author_name'));
              $("#author_name_val").html($.i18n.prop('author_name_val'));
              $("#work_name").html($.i18n.prop('work_name'));
              $("#work_name_val").html($.i18n.prop('work_name_val'));
              $("#author_description_snippet").html($.i18n.prop('author_description_snippet'));
              $("#work_description_snippet").html($.i18n.prop('work_description_snippet'));
              $("#edition_description_snippet_title").html($.i18n.prop('edition_description_snippet_title'));
              $("#edition_description_snippet").html($.i18n.prop('edition_description_snippet'));
              $("#go_to_intro_button").html($.i18n.prop('go_to_intro_button'));
              $("#instruction_title").html($.i18n.prop('instruction_title'));
              $("#digital_edition_instruction_title").html($.i18n.prop('digital_edition_instruction_title'));
              $("#semantic_indexes_instruction_title").html($.i18n.prop('semantic_indexes_instruction_title'));
              $("#digital_edition_instruction").html($.i18n.prop('digital_edition_instruction'));
              $("#facets_instruction").html($.i18n.prop('facets_instruction'));
              // instructions modals
              $("#modal_facets").html($.i18n.prop('modal_facets'));
              $("#modal_facets_text").html($.i18n.prop('modal_facets_text'));
              $("#semantic_indexes_instruction").html($.i18n.prop('semantic_indexes_instruction'));
              $("#digital_edition_tools_title").html($.i18n.prop('digital_edition_tools_title'));
              $("#semantic_indexes_tools_title").html($.i18n.prop('semantic_indexes_tools_title'));
              $("#tool_facets").html($.i18n.prop('tool_facets'));
              $("#digital_edition_tools_button").html($.i18n.prop('digital_edition_tools_button'));
              $("#people_tools_button").html($.i18n.prop('people_tools_button'));
              $("#works_tools_button").html($.i18n.prop('works_tools_button'));
              $("#tool_people_index").html($.i18n.prop('tool_people_index'));
              $("#tool_works_index").html($.i18n.prop('tool_works_index'));
              // /DH.arc
              $("#follow_dharc_title").html($.i18n.prop('follow_dharc_title'));
              $("#follow_dharc_description").html($.i18n.prop('follow_dharc_description'));
              $("#follow_dharc_button").html($.i18n.prop('follow_dharc_button'));
              $("#nav_viewer").html($.i18n.prop('nav_viewer'));
              $("#nav_library").html($.i18n.prop('nav_library'));
              $("#nav_indexes").html($.i18n.prop('nav_indexes'));
              $("#nav_biblio").html($.i18n.prop('nav_biblio'));
              $("#intro_header_title").html($.i18n.prop('intro_header_title'));
              // edition
              $("#digital_edition_header_title").html($.i18n.prop('digital_edition_header_title'));
              $(".metadata_title").html($.i18n.prop('metadata_title'));
              $("#facets_title").html($.i18n.prop('facets_title'));
              $("#filters_people").html($.i18n.prop('filters_people'));
              $("#filters_people_role").html($.i18n.prop('filters_people_role'));
              $("#author_role").html($.i18n.prop('author_role'));
              $("#cited_role").html($.i18n.prop('cited_role'));
              // relations filters
              $("#rel_title").html($.i18n.prop('rel_title'));
              //$("#person_rel_caption").html($.i18n.prop('person_rel_caption'));
              $("#agree_rel").html($.i18n.prop('agree_rel'));
              $("#disagree_rel").html($.i18n.prop('disagree_rel'));
              $("#cited_as_rel").html($.i18n.prop('cited_as_rel'));
              $("#filtered_people_title").html($.i18n.prop('filtered_people_title'));
              $("#filters_excerpts").html($.i18n.prop('filters_excerpts'));
              $("#filters_works").html($.i18n.prop('filters_works'));
              $("#ex_caption").html($.i18n.prop('ex_caption'));
              $("#filters_people_role_caption_name").html($.i18n.prop('filters_people_role_caption_name'));
              $("#apply_facets_button").html($.i18n.prop('apply_facets_button'));
              $("#comment_val").html($.i18n.prop('comment_val'));
              $("#quotation_val").html($.i18n.prop('quotation_val'));
              $("#translation_val").html($.i18n.prop('translation_val'));
              $(".comm_label").html($.i18n.prop('comm_label'));
              $(".quot_label").html($.i18n.prop('quot_label'));
              $(".tra_label").html($.i18n.prop('tra_label'));
              $("#results_title_list").html($.i18n.prop('results_title_list'));
              $("#clear_res").html($.i18n.prop('clear_res'));
              $("#apply_facets_edition").html($.i18n.prop('apply_facets_edition'));
              $("#defaultFont").html($.i18n.prop('defaultFont'));
              $("#size_20").html($.i18n.prop('size_20'));
              $("#dark_page").html($.i18n.prop('dark_page'));
              $("#sepia_page").html($.i18n.prop('sepia_page'));
              $("#white_page").html($.i18n.prop('white_page'));
              // panel placeholders
              $(".filters_placeholder").html($.i18n.prop('filters_placeholder'));
              $(".tra_placeholder").html($.i18n.prop('tra_placeholder'));
              $(".fac_placeholder").html($.i18n.prop('fac_placeholder'));
              //$("#reset_button").html($.i18n.prop('reset_button'));
              $(".results_in").html($.i18n.prop('results_in'));
              // go to specific page
              $(".go_to_pages_edition").html($.i18n.prop('go_to_pages_edition'));
              // metadata
              $(".meta_author").html($.i18n.prop('meta_author'));
              $(".meta_title").html($.i18n.prop('meta_title'));
              $(".meta_creation").html($.i18n.prop('meta_creation'));
              $(".meta_tech").html($.i18n.prop('meta_tech'));
              $(".meta_material").html($.i18n.prop('meta_material'));
              $(".meta_dimensions").html($.i18n.prop('meta_dimensions'));
              $(".meta_rights").html($.i18n.prop('meta_rights'));
              $(".meta_bibl").html($.i18n.prop('meta_bibl'));
              $(".meta_manifest").html($.i18n.prop('meta_manifest'));
              $(".meta_permalink").html($.i18n.prop('meta_permalink'));
              // metadata values
              $(".meta_author_val").html($.i18n.prop('meta_author_val'));
              $(".meta_title_val").html($.i18n.prop('meta_title_val'));
              $(".meta_creation_val").html($.i18n.prop('meta_creation_val'));
              $(".meta_tech_val").html($.i18n.prop('meta_tech_val'));
              $(".meta_material_val").html($.i18n.prop('meta_material_val'));
              $(".meta_dimensions_val").html($.i18n.prop('meta_dimensions_val'));
              $(".meta_rights_val").html($.i18n.prop('meta_rights_val'));
              $(".meta_bibl_val").html($.i18n.prop('meta_bibl_val'));
              $(".meta_manifest_val").html($.i18n.prop('meta_manifest_val'));
              $(".meta_permalink_val").html($.i18n.prop('meta_permalink_val'));
              // trad. > trans. translation
              $(".trad").html($.i18n.prop('trad'));
              // person values filters
              $(".appears_as").html($.i18n.prop('appears_as'));
              $(".assign_author").html($.i18n.prop('assign_author'));
              $(".assign_mentioned").html($.i18n.prop('assign_mentioned'));
              $(".cit_in_comm").html($.i18n.prop('cit_in_comm'));
              $(".cit_in_quot").html($.i18n.prop('cit_in_quot'));
              $(".cit_in_tra").html($.i18n.prop('cit_in_tra'));
              $(".cit_quot").html($.i18n.prop('cit_quot'));
              $(".by_author").html($.i18n.prop('by_author'));
              $(".from_work").html($.i18n.prop('from_work'));
              $(".by_bufalini").html($.i18n.prop('by_bufalini'));
              $(".occurs_as_mentioned").html($.i18n.prop('occurs_as_mentioned'));
              $(".appears_mentioned_as").html($.i18n.prop('appears_mentioned_as'));
              // work values filters
              $(".comm_res").html($.i18n.prop('comm_res'));
              $(".quot_res").html($.i18n.prop('quot_res'));
              $(".tra_res").html($.i18n.prop('tra_res'));
              // introduction
              $("#page_title").html($.i18n.prop('page_title'));
              $("#transcription_title").html($.i18n.prop('transcription_title'));
              //$("#search_string").html($.i18n.prop('search_string'));
              $("#pages_select").html($.i18n.prop('pages_select'));
              $("#transcription_tab").html($.i18n.prop('transcription_tab'));
              $("#authors_tab").html($.i18n.prop('authors_tab'));
              $("#quotations_tab").html($.i18n.prop('quotations_tab'));
              $("#works_tab").html($.i18n.prop('works_tab'));
              $("#source").html($.i18n.prop('source'));
              $("#quotations_title").html($.i18n.prop('quotations_title'));
              $("#people_tab").html($.i18n.prop('people_tab'));
              $("#cited_by").html($.i18n.prop('cited_by'));
              $("#extracted_by").html($.i18n.prop('extracted_by'));
              $("#i_author").html($.i18n.prop('i_author'));
              $("#i_translator").html($.i18n.prop('i_translator'));
              $("#related_text").html($.i18n.prop('related_text'));
              $("#intro_title1").html($.i18n.prop('intro_title1'));
              $("#intro_title2").html($.i18n.prop('intro_title2'));
              $("#intro_title21").html($.i18n.prop('intro_title21'));
              $("#intro_title3").html($.i18n.prop('intro_title3'));
              $("#intro_title31").html($.i18n.prop('intro_title31'));
              $("#intro_title32").html($.i18n.prop('intro_title32'));
              $("#intro_title33").html($.i18n.prop('intro_title33'));

              $("#intro_title_note").html($.i18n.prop('intro_title_note'));
              $("#note_1").html($.i18n.prop('note_1'));
              $("#note_2").html($.i18n.prop('note_2'));
              $("#note_3").html($.i18n.prop('note_3'));
              $("#note_4").html($.i18n.prop('note_4'));

              $("#p_1").html($.i18n.prop('p_1'));
              $("#p_2").html($.i18n.prop('p_2'));
              $("#p_3").html($.i18n.prop('p_3'));
              $("#p_4").html($.i18n.prop('p_4'));
              $("#p_5").html($.i18n.prop('p_5'));
              $("#p_6").html($.i18n.prop('p_6'));
              $("#p_7").html($.i18n.prop('p_7'));
              $("#p_8").html($.i18n.prop('p_8'));
              $("#p_9").html($.i18n.prop('p_9'));
              $("#p_10").html($.i18n.prop('p_10'));
              $("#p_11").html($.i18n.prop('p_11'));
              $("#p_12").html($.i18n.prop('p_12'));
              $("#p_13").html($.i18n.prop('p_13'));
              $("#p_14").html($.i18n.prop('p_14'));
              $("#p_15").html($.i18n.prop('p_15'));
              $("#li_1").html($.i18n.prop('li_1'));
              $("#li_2").html($.i18n.prop('li_2'));
              $("#li_3").html($.i18n.prop('li_3'));
              $("#li_4").html($.i18n.prop('li_4'));
              $("#li_5").html($.i18n.prop('li_5'));
              $("#li_6").html($.i18n.prop('li_6'));
              $("#li_7").html($.i18n.prop('li_7'));
              $("#li_8").html($.i18n.prop('li_8'));
              $("#li_9").html($.i18n.prop('li_9'));
              $("#li_10").html($.i18n.prop('li_10'));
              $("#li_11").html($.i18n.prop('li_11'));
              // semantic indexes
              $("#list_title").html($.i18n.prop('list_title'));
              $("#clear_res_ind").html($.i18n.prop('clear_res_ind'));
              // indexes buttons
              $(".n_quot").html($.i18n.prop('n_quot'));
              $(".is_mentioned_by").html($.i18n.prop('is_mentioned_by'));
              $(".is_mentioned").html($.i18n.prop('is_mentioned'));
              // people index
              $("#filters_people_role_index").html($.i18n.prop('filters_people_role_index'));
              $("#author_role_index").html($.i18n.prop('author_role_index'));
              $("#cited_role_index").html($.i18n.prop('cited_role_index'));
              $("#people_list").html($.i18n.prop('people_list'));
              $("#people_sets").html($.i18n.prop('people_sets'));
              $("#people_graph").html($.i18n.prop('people_graph'));
              $("#visualize_span").html($.i18n.prop('visualize_span'));
              $("#visualize_span_to").html($.i18n.prop('visualize_span_to'));
              $("#btnrender").html($.i18n.prop('btnrender'));
              $("#data_play").html($.i18n.prop('data_play'));
              $("#explain_treemap_people_h3").html($.i18n.prop('explain_treemap_people_h3'));
              $("#explain_sets_people_h3").html($.i18n.prop('explain_sets_people_h3'));
              $("#explain_graph_people_h3").html($.i18n.prop('explain_graph_people_h3'));
              $("#explain_play_people_h3").html($.i18n.prop('explain_play_people_h3'));
              $("#explain_treemap_people_p").html($.i18n.prop('explain_treemap_people_p'));
              $("#explain_sets_people_p").html($.i18n.prop('explain_sets_people_p'));
              $("#explain_graph_people_p").html($.i18n.prop('explain_graph_people_p'));
              $("#explain_play_people_p").html($.i18n.prop('explain_play_people_p'));
              $(".author_role_tag").html($.i18n.prop('author_role_tag'));
              $(".cited_role_tag").html($.i18n.prop('cited_role_tag'));
              $(".translator_role_tag").html($.i18n.prop('translator_role_tag'));
              $(".is_translator_of").html($.i18n.prop('is_translator_of'));
              // works index
              $("#apply_facets_works").html($.i18n.prop('apply_facets_works'));
              $("#explain_treemap_works_h3").html($.i18n.prop('explain_treemap_works_h3'));
              $("#explain_sets_works_h3").html($.i18n.prop('explain_sets_works_h3'));
              $("#explain_graph_works_h3").html($.i18n.prop('explain_graph_works_h3'));
              $("#explain_play_works_h3").html($.i18n.prop('explain_play_works_h3'));
              $("#explain_treemap_works_p").html($.i18n.prop('explain_treemap_works_p'));
              $("#explain_sets_works_p").html($.i18n.prop('explain_sets_works_p'));
              $("#explain_graph_works_p").html($.i18n.prop('explain_graph_works_p'));
              $("#explain_play_works_p").html($.i18n.prop('explain_play_works_p'));
              $(".occurrences_ex").html($.i18n.prop('occurrences_ex'));
              $(".comm_on").html($.i18n.prop('comm_on'));
              $(".quot_of").html($.i18n.prop('quot_of'));
              $(".quot_by").html($.i18n.prop('quot_by'));
              $(".tra_of").html($.i18n.prop('tra_of'));
              $(".is_translated_by").html($.i18n.prop('is_translated_by'));

              // footer
              $("#footer_title_1").html($.i18n.prop('footer_title_1'));
              $("#footer_documentation_1").html($.i18n.prop('footer_documentation_1'));
              $("#footer_pub").html($.i18n.prop('footer_pub'));
              $("#footer_web_app").html($.i18n.prop('footer_web_app'));
              $("#footer_download").html($.i18n.prop('footer_download'));
              $("#footer_licences").html($.i18n.prop('footer_licences'));
              $("#dharc_projects_documentation").html($.i18n.prop('dharc_projects_documentation'));
              $("#footer_contacts").html($.i18n.prop('footer_contacts'));
              // technical specifications
              $("#specs_header_title").html($.i18n.prop('specs_header_title'));
              // technical specifications table of contents
              $(".doc_objectives_tra").html($.i18n.prop('doc_objectives_tra'));
              $(".doc_methodology_tra").html($.i18n.prop('doc_methodology_tra'));
              $(".doc_rdf_tra").html($.i18n.prop('doc_rdf_tra'));
              $(".doc_dev_tra").html($.i18n.prop('doc_dev_tra'));
              $(".doc_facets_tra").html($.i18n.prop('doc_facets_tra'));
              $(".doc_datavis_tra").html($.i18n.prop('doc_datavis_tra'));
              $(".go_to_web_app").html($.i18n.prop('go_to_web_app'));
              // technical specifications overview
              $("#overview_1").html($.i18n.prop('overview_1'));
              $("#overview_2").html($.i18n.prop('overview_2'));
              $("#overview_3").html($.i18n.prop('overview_3'));
              $("#overview_4").html($.i18n.prop('overview_4'));
              // technical specifications overview list
              $("#doc_obj").html($.i18n.prop('doc_obj'));
              $("#doc_met").html($.i18n.prop('doc_met'));
              $("#doc_rdf_comp").html($.i18n.prop('doc_rdf_comp'));
              $("#doc_web_dev").html($.i18n.prop('doc_web_dev'));
              $("#doc_facets").html($.i18n.prop('doc_facets'));
              $("#doc_vis").html($.i18n.prop('doc_vis'));
              // technical specifications objectives
              $("#obj_1").html($.i18n.prop('obj_1'));
              $("#obj_2").html($.i18n.prop('obj_2'));
              $("#obj_3").html($.i18n.prop('obj_3'));
              $("#obj_4").html($.i18n.prop('obj_4'));
              // technical specifications methodology
              $("#met_1").html($.i18n.prop('met_1'));
              // technical specifications markup
              $("#mark_up_1").html($.i18n.prop('mark_up_1'));
              $("#mark_up_2").html($.i18n.prop('mark_up_2'));
              // button read more
              $(".read_more").html($.i18n.prop('read_more'));
              // technical specifications markup
              $(".person_entity").html($.i18n.prop('person_entity'));
              $("#mark_up_3").html($.i18n.prop('mark_up_3'));
              $(".comment_entity").html($.i18n.prop('comment_entity'));
              $("#mark_up_5").html($.i18n.prop('mark_up_5'));
              $("#mark_up_6").html($.i18n.prop('mark_up_6'));
              $(".quot_entity").html($.i18n.prop('quot_entity'));
              $("#mark_up_7").html($.i18n.prop('mark_up_7'));
              $(".trans_entity").html($.i18n.prop('trans_entity'));
              $("#mark_up_8").html($.i18n.prop('mark_up_8'));
              $("#mark_up_9").html($.i18n.prop('mark_up_9'));
              $("#mark_up_10").html($.i18n.prop('mark_up_10'));
              $("#mark_up_11").html($.i18n.prop('mark_up_11'));
              $(".works_entity").html($.i18n.prop('works_entity'));
              $("#mark_up_12").html($.i18n.prop('mark_up_12'));
              // technical specifications html conversion
              $("#html_1").html($.i18n.prop('html_1'));
              $("#html_2").html($.i18n.prop('html_2'));
              $("#html_3").html($.i18n.prop('html_3'));
              $("#html_4").html($.i18n.prop('html_4'));
              $("#html_5").html($.i18n.prop('html_5'));
              $("#html_6").html($.i18n.prop('html_6'));
              $("#html_7").html($.i18n.prop('html_7'));
              $("#html_8").html($.i18n.prop('html_8'));
              $("#html_9").html($.i18n.prop('html_9'));
              $("#html_10").html($.i18n.prop('html_10'));
              $("#html_11").html($.i18n.prop('html_11'));
              $("#html_12").html($.i18n.prop('html_12'));
              $("#html_13").html($.i18n.prop('html_13'));
              $("#html_14").html($.i18n.prop('html_14'));
              $("#html_15").html($.i18n.prop('html_15'));
              $("#html_16").html($.i18n.prop('html_16'));
              $("#html_17").html($.i18n.prop('html_17'));
              // technical specifications RDF conversion
              $("#rdf_1").html($.i18n.prop('rdf_1'));
              $("#rdf_2").html($.i18n.prop('rdf_2'));
              $("#rdf_3").html($.i18n.prop('rdf_3'));
              $("#rdf_4").html($.i18n.prop('rdf_4'));
              $("#rdf_5").html($.i18n.prop('rdf_5'));
              $("#rdf_6").html($.i18n.prop('rdf_6'));
              $("#rdf_7").html($.i18n.prop('rdf_7'));
              $("#rdf_8").html($.i18n.prop('rdf_8'));
              $("#rdf_9").html($.i18n.prop('rdf_9'));
              $("#rdf_10").html($.i18n.prop('rdf_10'));
              $("#rdf_11").html($.i18n.prop('rdf_11'));
              $("#rdf_12").html($.i18n.prop('rdf_12'));
              // technical specifications reused models
              $("#reused_models").html($.i18n.prop('reused_models'));
              $("#reused_models_1").html($.i18n.prop('reused_models_1'));
              $("#reused_fabio").html($.i18n.prop('reused_fabio'));
              $("#reused_fabio_1").html($.i18n.prop('reused_fabio_1'));
              $("#reused_fabio_2").html($.i18n.prop('reused_fabio_2'));
              $("#reused_oa").html($.i18n.prop('reused_oa'));
              $("#reused_oa_1").html($.i18n.prop('reused_oa_1'));
              $("#reused_oa_2").html($.i18n.prop('reused_oa_2'));
              $("#reused_cito").html($.i18n.prop('reused_cito'));
              $("#reused_cito_1").html($.i18n.prop('reused_cito_1'));
              $("#reused_cito_2").html($.i18n.prop('reused_cito_2'));
              $("#reused_hico").html($.i18n.prop('reused_hico'));
              $("#reused_hico_1").html($.i18n.prop('reused_hico_1'));
              $("#reused_hico_2").html($.i18n.prop('reused_hico_2'));
              // technical specifications RDF components
              $("#rdf_data").html($.i18n.prop('rdf_data'));
              $("#rdf_data_pers").html($.i18n.prop('rdf_data_pers'));
              $("#rdf_data_comm").html($.i18n.prop('rdf_data_comm'));
              $("#rdf_data_comm_1").html($.i18n.prop('rdf_data_comm_1'));
              $("#rdf_data_comm_2").html($.i18n.prop('rdf_data_comm_2'));
              $("#rdf_data_comm_3").html($.i18n.prop('rdf_data_comm_3'));
              $("#rdf_data_comm_4").html($.i18n.prop('rdf_data_comm_4'));
              $("#rdf_data_comm_5").html($.i18n.prop('rdf_data_comm_5'));
              $("#rdf_data_comm_6").html($.i18n.prop('rdf_data_comm_6'));
              $("#rdf_data_comm_7").html($.i18n.prop('rdf_data_comm_7'));
              $("#rdf_data_comm_8").html($.i18n.prop('rdf_data_comm_8'));
              $("#rdf_data_comm_9").html($.i18n.prop('rdf_data_comm_9'));
              $("#rdf_data_comm_10").html($.i18n.prop('rdf_data_comm_10'));
              $("#rdf_data_comm_11").html($.i18n.prop('rdf_data_comm_11'));
              $("#rdf_data_comm_12").html($.i18n.prop('rdf_data_comm_12'));
              $("#rdf_data_comm_13").html($.i18n.prop('rdf_data_comm_13'));
              $(".example_sent").html($.i18n.prop('example_sent'));
              $("#rdf_data_quot").html($.i18n.prop('rdf_data_quot'));
              $("#rdf_data_quot_1").html($.i18n.prop('rdf_data_quot_1'));
              $("#rdf_data_quot_2").html($.i18n.prop('rdf_data_quot_2'));
              $("#rdf_data_quot_3").html($.i18n.prop('rdf_data_quot_3'));
              $("#rdf_data_quot_4").html($.i18n.prop('rdf_data_quot_4'));
              $("#rdf_data_quot_5").html($.i18n.prop('rdf_data_quot_5'));
              $("#rdf_data_quot_6").html($.i18n.prop('rdf_data_quot_6'));
              $("#rdf_data_quot_7").html($.i18n.prop('rdf_data_quot_7'));
              $("#rdf_data_quot_8").html($.i18n.prop('rdf_data_quot_8'));
              $("#rdf_data_quot_9").html($.i18n.prop('rdf_data_quot_9'));
              $("#rdf_data_quot_10").html($.i18n.prop('rdf_data_quot_10'));
              $("#rdf_trans").html($.i18n.prop('rdf_trans'));
              $("#rdf_trans_1").html($.i18n.prop('rdf_trans_1'));
              $("#rdf_trans_2").html($.i18n.prop('rdf_trans_2'));
              $("#rdf_trans_3").html($.i18n.prop('rdf_trans_3'));
              $("#rdf_trans_4").html($.i18n.prop('rdf_trans_4'));
              $("#rdf_trans_5").html($.i18n.prop('rdf_trans_5'));
              $("#rdf_trans_6").html($.i18n.prop('rdf_trans_6'));
              $("#rdf_trans_7").html($.i18n.prop('rdf_trans_7'));
              $("#rdf_trans_8").html($.i18n.prop('rdf_trans_8'));
              $("#rdf_trans_9").html($.i18n.prop('rdf_trans_9'));
              $("#rdf_trans_10").html($.i18n.prop('rdf_trans_10'));
              // technical specifications works
              $("#rdf_works_1").html($.i18n.prop('rdf_works_1'));
              $("#rdf_works_2").html($.i18n.prop('rdf_works_2'));
              $("#frbr_work").html($.i18n.prop('frbr_work'));
              $("#frbr_work_1").html($.i18n.prop('frbr_work_1'));
              $("#frbr_work_2").html($.i18n.prop('frbr_work_2'));
              $("#frbr_work_3").html($.i18n.prop('frbr_work_3'));
              $("#frbr_work_4").html($.i18n.prop('frbr_work_4'));
              $("#frbr_work_5").html($.i18n.prop('frbr_work_5'));
              $("#frbr_work_6").html($.i18n.prop('frbr_work_6'));
              $("#frbr_ex").html($.i18n.prop('frbr_ex'));
              $("#frbr_ex_1").html($.i18n.prop('frbr_ex_1'));
              $("#frbr_ex_2").html($.i18n.prop('frbr_ex_2'));
              $("#frbr_ex_3").html($.i18n.prop('frbr_ex_3'));
              $("#frbr_vol").html($.i18n.prop('frbr_vol'));
              $("#frbr_vol_1").html($.i18n.prop('frbr_vol_1'));
              $("#frbr_vol_2").html($.i18n.prop('frbr_vol_2'));
              $("#frbr_vol_3").html($.i18n.prop('frbr_vol_3'));
              $("#frbr_info").html($.i18n.prop('frbr_info'));
              $("#frbr_info").html($.i18n.prop('frbr_info'));
              $("#frbr_info_1").html($.i18n.prop('frbr_info_1'));
              $("#frbr_info_2").html($.i18n.prop('frbr_info_2'));
              $("#frbr_info_3").html($.i18n.prop('frbr_info_3'));
              $("#frbr_info_4").html($.i18n.prop('frbr_info_4'));
              $("#frbr_info_5").html($.i18n.prop('frbr_info_5'));
              $("#frbr_info_6").html($.i18n.prop('frbr_info_6'));
              $("#frbr_info_7").html($.i18n.prop('frbr_info_7'));
              $("#frbr_info_8").html($.i18n.prop('frbr_info_8'));
              $("#frbr_info_9").html($.i18n.prop('frbr_info_9'));
              $("#frbr_info_10").html($.i18n.prop('frbr_info_10'));
              // technical specifications web development
              $("#doc_web_app").html($.i18n.prop('doc_web_app'));
              $("#doc_web_app_1").html($.i18n.prop('doc_web_app_1'));
              $("#doc_web_app_2").html($.i18n.prop('doc_web_app_2'));
              $("#doc_web_app_3").html($.i18n.prop('doc_web_app_3'));
              $("#doc_web_app_4").html($.i18n.prop('doc_web_app_4'));
              $("#doc_web_app_5").html($.i18n.prop('doc_web_app_5'));
              $("#doc_web_app_6").html($.i18n.prop('doc_web_app_6'));
              $("#doc_web_app_7").html($.i18n.prop('doc_web_app_7'));
              $("#doc_web_app_8").html($.i18n.prop('doc_web_app_8'));
              $("#doc_web_app_9").html($.i18n.prop('doc_web_app_9'));
              $("#doc_web_app_10").html($.i18n.prop('doc_web_app_10'));
              $("#doc_web_app_11").html($.i18n.prop('doc_web_app_11'));
              $("#doc_web_app_12").html($.i18n.prop('doc_web_app_12'));
              $("#doc_web_app_tra").html($.i18n.prop('doc_web_app_tra'));
              $("#doc_web_app_tra_1").html($.i18n.prop('doc_web_app_tra_1'));
              $("#doc_web_app_tra_2").html($.i18n.prop('doc_web_app_tra_2'));
              $("#doc_web_app_tra_3").html($.i18n.prop('doc_web_app_tra_3'));
              // technical specifications facets
              $("#doc_fac").html($.i18n.prop('doc_fac'));
              $("#doc_fac_1").html($.i18n.prop('doc_fac_1'));
              $("#doc_fac_2").html($.i18n.prop('doc_fac_2'));
              $("#doc_fac_3").html($.i18n.prop('doc_fac_3'));
              $("#doc_fac_4").html($.i18n.prop('doc_fac_4'));
              // input
              $("#fac_input").html($.i18n.prop('fac_input'));
              $("#fac_input_1").html($.i18n.prop('fac_input_1'));
              $("#fac_input_2").html($.i18n.prop('fac_input_2'));
              $("#fac_input_3").html($.i18n.prop('fac_input_3'));
              $("#fac_input_4").html($.i18n.prop('fac_input_4'));
              $("#fac_input_5").html($.i18n.prop('fac_input_5'));
              $("#fac_input_6").html($.i18n.prop('fac_input_6'));
              $("#fac_input_semantics_1").html($.i18n.prop('fac_input_semantics_1'));
              $("#fac_input_semantics_2").html($.i18n.prop('fac_input_semantics_2'));
              $("#fac_input_semantics_3").html($.i18n.prop('fac_input_semantics_3'));
              // processing
              $("#fac_pro").html($.i18n.prop('fac_pro'));
              $("#fac_pro_1").html($.i18n.prop('fac_pro_1'));
              $("#fac_pro_2").html($.i18n.prop('fac_pro_2'));
              $("#fac_pro_3").html($.i18n.prop('fac_pro_3'));
              // names of sections
              $(".sec_de").html($.i18n.prop('sec_de'));
              $(".sec_si").html($.i18n.prop('sec_si'));
              // output
              $("#fac_out").html($.i18n.prop('fac_out'));
              $("#fac_out_1").html($.i18n.prop('fac_out_1'));
              $("#fac_out_2").html($.i18n.prop('fac_out_2'));
              // final explanation facets
              $("#fac_fin_1").html($.i18n.prop('fac_fin_1'));
              $("#fac_fin_2").html($.i18n.prop('fac_fin_2'));
              // technical specifications data visualisation
              $(".sets_name").html($.i18n.prop('sets_name'));
              $(".graph_name").html($.i18n.prop('graph_name'));
              $(".play_name").html($.i18n.prop('play_name'));
              $("#datavis_1").html($.i18n.prop('datavis_1'));
              $("#datavis_2").html($.i18n.prop('datavis_2'));
              $("#datavis_3").html($.i18n.prop('datavis_3'));
              $("#data_ex").html($.i18n.prop('data_ex'));
              $("#data_ex_people").html($.i18n.prop('data_ex_people'));
              $("#data_ex_works").html($.i18n.prop('data_ex_works'));
              $("#data_ex_treemap_people").html($.i18n.prop('data_ex_treemap_people'));
              $("#data_ex_sets_people").html($.i18n.prop('data_ex_sets_people'));
              $("#data_ex_graph_people").html($.i18n.prop('data_ex_graph_people'));
              $("#data_ex_play_people").html($.i18n.prop('data_ex_play_people'));
              $("#data_ex_treemap_works").html($.i18n.prop('data_ex_treemap_works'));
              $("#data_ex_sets_works").html($.i18n.prop('data_ex_sets_works'));
              $("#data_ex_play_works").html($.i18n.prop('data_ex_play_works'));
              // web application specifications
              $("#web_app_title").html($.i18n.prop('web_app_title'));
              $(".title_de").html($.i18n.prop('title_de'));
              $(".title_si").html($.i18n.prop('title_si'));
              $(".title_list").html($.i18n.prop('title_list'));
              $(".title_treemap").html($.i18n.prop('title_treemap'));
              $(".title_sets").html($.i18n.prop('title_sets'));
              $(".title_graph").html($.i18n.prop('title_graph'));
              $(".title_play").html($.i18n.prop('title_play'));
              $(".doc_go_tra").html($.i18n.prop('doc_go_tra'));
              // web application homepage specifications
              $("#web_home_1").html($.i18n.prop('web_home_1'));
              $("#web_home_2").html($.i18n.prop('web_home_2'));
              $("#web_home_3").html($.i18n.prop('web_home_3'));
              $("#web_home_4").html($.i18n.prop('web_home_4'));
              $("#web_home_5").html($.i18n.prop('web_home_5'));
              $("#web_home_6").html($.i18n.prop('web_home_6'));
              // web application digital edition specifications
              $("#web_de_1").html($.i18n.prop('web_de_1'));
              $("#web_de_2").html($.i18n.prop('web_de_2'));
              $("#web_de_3").html($.i18n.prop('web_de_3'));
              $("#web_de_4").html($.i18n.prop('web_de_4'));
              $("#web_de_5").html($.i18n.prop('web_de_5'));
              // metadata
              $("#web_meta_1").html($.i18n.prop('web_meta_1'));
              $("#web_meta_2").html($.i18n.prop('web_meta_2'));
              $("#web_meta_3").html($.i18n.prop('web_meta_3'));
              // page
              $("#web_page_1").html($.i18n.prop('web_page_1'));
              $("#web_page_2").html($.i18n.prop('web_page_2'));
              $("#web_page_3").html($.i18n.prop('web_page_3'));
              $("#web_page_4").html($.i18n.prop('web_page_4'));
              $("#web_page_5").html($.i18n.prop('web_page_5'));
              $("#web_page_6").html($.i18n.prop('web_page_6'));
              $("#web_page_7").html($.i18n.prop('web_page_7'));
              // facets
              $("#web_fac_1").html($.i18n.prop('web_fac_1'));
              $("#web_fac_2").html($.i18n.prop('web_fac_2'));
              $("#web_fac_3").html($.i18n.prop('web_fac_3'));
              $("#web_fac_4").html($.i18n.prop('web_fac_4'));
              $("#web_fac_5").html($.i18n.prop('web_fac_5'));
              $("#web_fac_6").html($.i18n.prop('web_fac_6'));
              $("#web_fac_7").html($.i18n.prop('web_fac_7'));
              $("#web_fac_8").html($.i18n.prop('web_fac_8'));
              $("#web_fac_9").html($.i18n.prop('web_fac_9'));
              $("#web_fac_10").html($.i18n.prop('web_fac_10'));
              $("#web_fac_11").html($.i18n.prop('web_fac_11'));
              $("#web_fac_12").html($.i18n.prop('web_fac_12'));
              $("#web_fac_13").html($.i18n.prop('web_fac_13'));
              $("#web_fac_14").html($.i18n.prop('web_fac_14'));
              $("#web_fac_15").html($.i18n.prop('web_fac_15'));
              $("#web_fac_16").html($.i18n.prop('web_fac_16'));
              $("#web_fac_17").html($.i18n.prop('web_fac_17'));
              $("#web_fac_18").html($.i18n.prop('web_fac_18'));
              $("#web_fac_19").html($.i18n.prop('web_fac_19'));
              $("#web_fac_20").html($.i18n.prop('web_fac_20'));
              $("#web_fac_21").html($.i18n.prop('web_fac_21'));
              // other tools
              $(".other_tools_1").html($.i18n.prop('other_tools_1'));
              $("#other_tools_2").html($.i18n.prop('other_tools_2'));
              $("#other_tools_3").html($.i18n.prop('other_tools_3'));
              $("#other_tools_4").html($.i18n.prop('other_tools_4'));
              $("#other_tools_5").html($.i18n.prop('other_tools_5'));
              // specifications semantic indexes
              $(".semantic_ind_1").html($.i18n.prop('semantic_ind_1'));
              $("#semantic_ind_2").html($.i18n.prop('semantic_ind_2'));
              $("#semantic_ind_3").html($.i18n.prop('semantic_ind_3'));
              $("#semantic_ind_4").html($.i18n.prop('semantic_ind_4'));
              // list mode
              $("#list_mode").html($.i18n.prop('list_mode'));
              $("#list_mode_1").html($.i18n.prop('list_mode_1'));
              $("#list_mode_2").html($.i18n.prop('list_mode_2'));
              $("#list_mode_3").html($.i18n.prop('list_mode_3'));
              $("#list_mode_4").html($.i18n.prop('list_mode_4'));
              $("#list_mode_5").html($.i18n.prop('list_mode_5'));
              $("#list_mode_6").html($.i18n.prop('list_mode_6'));
              $("#list_mode_7").html($.i18n.prop('list_mode_7'));
              $("#list_mode_8").html($.i18n.prop('list_mode_8'));
              $("#list_mode_9").html($.i18n.prop('list_mode_9'));
              $("#list_mode_10").html($.i18n.prop('list_mode_10'));
              $("#list_mode_11").html($.i18n.prop('list_mode_11'));
              $("#list_mode_12").html($.i18n.prop('list_mode_12'));
              $("#list_mode_13").html($.i18n.prop('list_mode_13'));
              $("#list_mode_14").html($.i18n.prop('list_mode_14'));
              $("#list_mode_15").html($.i18n.prop('list_mode_15'));
              $("#list_mode_16").html($.i18n.prop('list_mode_16'));
              // treemap mode
              $("#tree_mode_1").html($.i18n.prop('tree_mode_1'));
              $("#tree_mode_2").html($.i18n.prop('tree_mode_2'));
              $("#tree_mode_3").html($.i18n.prop('tree_mode_3'));
              $("#tree_mode_4").html($.i18n.prop('tree_mode_4'));
              $("#tree_mode_5").html($.i18n.prop('tree_mode_5'));
              $("#tree_mode_6").html($.i18n.prop('tree_mode_6'));
              $("#tree_mode_7").html($.i18n.prop('tree_mode_7'));
              $("#tree_mode_8").html($.i18n.prop('tree_mode_8'));
              $("#tree_mode_9").html($.i18n.prop('tree_mode_9'));
              $("#tree_mode_10").html($.i18n.prop('tree_mode_10'));
              $("#tree_mode_11").html($.i18n.prop('tree_mode_11'));
              $("#tree_mode_12").html($.i18n.prop('tree_mode_12'));
              $("#tree_mode_13").html($.i18n.prop('tree_mode_13'));
              $("#tree_mode_14").html($.i18n.prop('tree_mode_14'));
              $("#tree_mode_15").html($.i18n.prop('tree_mode_15'));
              $("#tree_mode_16").html($.i18n.prop('tree_mode_16'));
              $("#tree_mode_17").html($.i18n.prop('tree_mode_17'));
              // sets mode
              $("#sets_1").html($.i18n.prop('sets_1'));
              $("#sets_2").html($.i18n.prop('sets_2'));
              $("#sets_3").html($.i18n.prop('sets_3'));
              $("#sets_4").html($.i18n.prop('sets_4'));
              $("#sets_5").html($.i18n.prop('sets_5'));
              $("#sets_6").html($.i18n.prop('sets_6'));
              $("#sets_7").html($.i18n.prop('sets_7'));
              $("#sets_8").html($.i18n.prop('sets_8'));
              $("#sets_9").html($.i18n.prop('sets_9'));
              $("#sets_10").html($.i18n.prop('sets_10'));
              $("#sets_11").html($.i18n.prop('sets_11'));
              $("#sets_12").html($.i18n.prop('sets_12'));
              $("#sets_13").html($.i18n.prop('sets_13'));
              $("#sets_14").html($.i18n.prop('sets_14'));
              $("#sets_15").html($.i18n.prop('sets_15'));
              $("#sets_16").html($.i18n.prop('sets_16'));
              // graph mode
              $("#graph_1").html($.i18n.prop('graph_1'));
              $("#graph_2").html($.i18n.prop('graph_2'));
              $("#graph_3").html($.i18n.prop('graph_3'));
              $("#graph_4").html($.i18n.prop('graph_4'));
              $("#graph_5").html($.i18n.prop('graph_5'));
              $("#graph_6").html($.i18n.prop('graph_6'));
              $("#graph_7").html($.i18n.prop('graph_7'));
              // play with data
              $("#play_1").html($.i18n.prop('play_1'));
              $("#play_2").html($.i18n.prop('play_2'));
              $("#play_3").html($.i18n.prop('play_3'));
              $("#play_4").html($.i18n.prop('play_4'));
              $("#play_5").html($.i18n.prop('play_5'));
              $("#play_6").html($.i18n.prop('play_6'));
              $("#play_7").html($.i18n.prop('play_7'));
              $("#play_8").html($.i18n.prop('play_8'));
              $("#play_9").html($.i18n.prop('play_9'));
              $("#play_10").html($.i18n.prop('play_10'));
              $("#play_11").html($.i18n.prop('play_11'));
              // web application shared components
              $("#download_title").html($.i18n.prop('download_title'));
              $("#download_p").html($.i18n.prop('download_p'));
              $("#download_licence").html($.i18n.prop('download_licence'));
              // publications
              $("#biblio_header_title").html($.i18n.prop('biblio_header_title'));
              $("#bibl_1").html($.i18n.prop('bibl_1'));
              $("#bibl_2").html($.i18n.prop('bibl_2'));
              // credits
              $("#credits_header_title").html($.i18n.prop('credits_header_title'));
              $("#credits_supervisors").html($.i18n.prop('credits_supervisors'));
              $("#credits_tei").html($.i18n.prop('credits_tei'));
              $("#credits_rdf").html($.i18n.prop('credits_rdf'));
              $("#credits_web_dev").html($.i18n.prop('credits_web_dev'));
              $("#credits_citation").html($.i18n.prop('credits_citation'));
              $("#credits_citation_string").html($.i18n.prop('credits_citation_string'));
              // licence
              $("#licences_header_title").html($.i18n.prop('licences_header_title'));
              $("#licences_1").html($.i18n.prop('licences_1'));
              $("#licences_2").html($.i18n.prop('licences_2'));
              $("#licences_3").html($.i18n.prop('licences_3'));
              // url
              $("#url_title").html($.i18n.prop('url_title'));
              // other components
              // excerpt title of the notebook
              $(".notebook_title").html($.i18n.prop('notebook_title'));
              // curator
              $(".is_curator").html($.i18n.prop('is_curator'));
              // people role box
              if (gotohash && location.hash) {
                        var l=location.hash; location.hash=''; location.hash=l;};
            }
        });
};

jQuery(document).ready(function($) {
  // active item in navbar
  navItemActive();
  // language button
  changeLang();
  // modals
  modalInstruction();
  // tooltip
  tooltip();
  // side sections effects
  styleSideSec();
  // get a side section active
  activeSideSec();
  // go from side text list to the right document and active side section
  getDocActive();
  // loader
  $(".se-pre-con").fadeOut("slow");

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  };

  // i18n
  $('#lang').find('a').click(function(e){
        var lang = this.href.slice(-2);
        e.preventDefault();
        $.cookie( 'language', lang, { expires: 7, path: '/' } );
        loadBundles(lang,false);
    });

  loadBundles($.cookie( 'language'),true);
  $("#lang_button_"+getCookie('language')+"> button").addClass('active');


  //////////////
  // Edizione //
  //////////////

  // resizer
  $('#viewer').imageMapResize();

  // index of pages
  var pbindex = {
    "0-1" : "static/img/quad003.jpg" ,
    "2-3" : "static/img/quad004.jpg" ,
    "4-5" : "static/img/quad005.jpg" ,
    "6-7" : "static/img/quad006.jpg" ,
    "8-9" : "static/img/quad007.jpg" ,
    "10-11" : "static/img/quad008.jpg" ,
    "12-13" : "static/img/quad009.jpg" ,
    "14-15" : "static/img/quad010.jpg" ,
    "16-17" : "static/img/quad011.jpg" ,
    "18-19" : "static/img/quad012.jpg" ,
    "20-21" : "static/img/quad013.jpg" ,
    "22-23" : "static/img/quad014.jpg" ,
    "24-25" : "static/img/quad015.jpg" ,
    "26-27" : "static/img/quad016.jpg" ,
    "28-29" : "static/img/quad017.jpg" ,
    "30-31" : "static/img/quad018.jpg" ,
    "32-33" : "static/img/quad019.jpg" ,
    "34-35" : "static/img/quad020.jpg" ,
    "36-37" : "static/img/quad021.jpg" ,
    "38-39" : "static/img/quad022.jpg" ,
    "40-41" : "static/img/quad023.jpg" ,
    "42-43" : "static/img/quad024.jpg" ,
    "44-45" : "static/img/quad025.jpg" ,
    "46-47" : "static/img/quad026.jpg" ,
    "48-49" : "static/img/quad027.jpg" ,
    "50-51" : "static/img/quad028.jpg" ,
    "52-53" : "static/img/quad029.jpg" ,
    "54-55" : "static/img/quad030.jpg" ,
    "56-57" : "static/img/quad031.jpg" ,
    "58-59" : "static/img/quad032.jpg" ,
    "60-61" : "static/img/quad033.jpg" ,
    "62-63" : "static/img/quad034.jpg" ,
    "64-65" : "static/img/quad035.jpg" ,
    "66-67" : "static/img/quad036.jpg" ,
    "68-69" : "static/img/quad037.jpg" ,
    "70-71" : "static/img/quad038.jpg" ,
    "72-73" : "static/img/quad039.jpg" ,
    "74-75" : "static/img/quad040.jpg" ,
    "76-77" : "static/img/quad041.jpg" ,
    "78-79" : "static/img/quad042.jpg" ,
    "80-81" : "static/img/quad043.jpg" ,
    "82-83" : "static/img/quad044.jpg" ,
    "84-85" : "static/img/quad045.jpg" ,
    "86-87" : "static/img/quad046.jpg" ,
    "88-89" : "static/img/quad047.jpg" ,
    "90-91" : "static/img/quad048.jpg" ,
    "92-93" : "static/img/quad049.jpg" ,
    "94-95" : "static/img/quad050.jpg" ,
    "96-97" : "static/img/quad051.jpg" ,
    "98-99" : "static/img/quad052.jpg" ,
    "100-101" : "static/img/quad053.jpg" ,
    "102-103" : "static/img/quad054.jpg" ,
    "104-105" : "static/img/quad055.jpg" ,
    "106-107" : "static/img/quad056.jpg" ,
    "108-109" : "static/img/quad057.jpg" ,
    "110-111" : "static/img/quad058.jpg" ,
    "112-113" : "static/img/quad059.jpg" ,
    "114-115" : "static/img/quad060.jpg" ,
    "116-117" : "static/img/quad061.jpg" ,
    "118-119" : "static/img/quad062.jpg" ,
    "120-121" : "static/img/quad063.jpg" ,
    "122-123" : "static/img/quad064.jpg" ,
    "124-125" : "static/img/quad065.jpg" ,
    "126-127" : "static/img/quad066.jpg" ,
    "128-129" : "static/img/quad067.jpg" ,
    "130-131" : "static/img/quad068.jpg" ,
    "132-133" : "static/img/quad069.jpg" ,
    "134-135" : "static/img/quad070.jpg" ,
    "136-137" : "static/img/quad071.jpg" ,
    "138-139" : "static/img/quad072.jpg" ,
    "140-141" : "static/img/quad073.jpg" ,
    "142-143" : "static/img/quad074.jpg" ,
    "144-145" : "static/img/quad078.jpg" ,
    "146-147" : "static/img/quad079.jpg" ,
    "148-card" : "static/img/quad080.jpg"
  };

  // populate select
   $.each(pbindex, function(key, value) {
    $('#pages').append($("<option></option>").attr("value",value).text(key));
  });

  // first img by default
  $('select option[value="static/img/quad003.jpg"]').prop('selected',true);
  $( "#viewer" ).load('static/images_coords.html div:has(img[src="static/img/quad003.jpg"])', mapifyAndRdf );

  // change page by changing option in select
  $("#pages").change(function() {
    var num = $('option:selected').attr('value');
    // var index = $('#pages').prop('selectedIndex')-1;
    // load the div containing the selected facsimile
    $( "#viewer" ).load('static/images_coords.html div:has(img[src="'+num+'"])', mapifyAndRdf );
    // transcription-facsimile linking
    tieTrasFac();
  });

  // previous and next buttons
  $("#next").click(function() {
    var nextElement = $('#pages > option:selected').next('option');
    var num = nextElement.attr('value');
    if (nextElement.length > 0) {
      $('#pages > option:selected').removeAttr('selected').next('option').prop('selected', 'selected');
      $( "#viewer" ).load('static/images_coords.html div:has(img[src="'+num+'"])', mapifyAndRdf );
      tieTrasFac();
    }
  });

  $("#prev").click(function() {
    var nextElement = $('#pages > option:selected').prev('option');
    var num = nextElement.attr('value');
    if (nextElement.length > 0) {
      $('#pages > option:selected').removeAttr('selected').prev('option').attr('selected', 'selected');
      $( "#viewer" ).load('static/images_coords.html div:has(img[src="'+num+'"])', mapifyAndRdf );
      tieTrasFac();
    }
  });

  // redirect to viewer/openings
  // get the last part of current URL (pages) to load an image into the viewer according to the pages
  var path = window.location.pathname;
  var page = path.substring(path.lastIndexOf('_')+1);
  if (page.match(/\d+/g) != null ) {
      //var opt = $$('#pages').find('option:contains('+page+')').text();
      var opt = pbindex[page];
      $( "#viewer" ).load('static/images_coords.html div:has(img[src="'+opt+'"])', mapifyAndRdf );
      $('#pages').val(opt);
    };

  // mapify: popOver + rdf (JSON) content placeholder
  function mapifyAndRdf() {

    $("img[usemap]").mapify({
      popOver: {
        content: function(zone){
          zoneHREF = zone.attr('href');
          zoneID = zoneHREF.substr(1);
          // load JSON content into the tooltip
          var metadata = JSON.parse($('#metadata').html());
          rdfContent = '<section id="'+zoneID+'">'+metadata[zoneID]+'</section>';
          return "<section>"+rdfContent+"</section>";
        },
        delay: 0.4,
        margin: "15px",
        height: "auto",
        width: "auto"
      },
      onAreaHighlight: function(zone){
        $('#output').empty();
        $( "area" ).mousemove(function() {
          idQuote = $(".mapify-popOver-content > section > section").attr('id');
          var excerpts = JSON.parse($('#excerpts').html());
          $('#output').html("<h4>"+idQuote+"</h4><section>"+excerpts[idQuote]+"</section>").focus();
          $( "area" ).click(function() {
            $('#output').html("<h4>"+idQuote+"</h4><section>"+excerpts[idQuote]+"</section>").focus();
          });
        });
      },
      onMapClear: function(){
        $('#output').empty();
      }
    });

  };

  // tip to overcome xml parser mistakes
  $('section > title').text( $('section > title').text().replace('<lb xmlns="http://www.tei-c.org/ns/1.0"></lb>', ' - ') );

  $('.pb').each(function() {
    var numPb = $(this).data('n');
    $(this).append('<span>'+numPb+'</span>');
  });


  // library boxes
  $('p:contains(indicator)').remove();
  // $(".ellipsis").each(function () {
  //   $(this).text().replace(/<indicator name="unicode">.*<indicator>/, '');
  //   var text = jQuery(this).text();
  //   if (text.length > 130) {
  //     jQuery(this).text(text.substr(0, text.lastIndexOf(' ', 127)) + '...');
  //   }
  // });
  // notebook text AJAX mode
  loadNotebook();
  // print page numbers
  setTimeout(printPageNum, 1000)
  printPageNum(pbindex,mapifyAndRdf);
  //PROVA PER CAMBIARE PAGINA
  // modify font dimensions
  changeFontSize();
  // modify font style
  changeFontStyle();
  // modify page colour
  changePageColor();
  // search bar
  searchForString();
  // search bar next button
  nextQueryResult();
  // style button
  changeStyleButton();
  // facets
  useCheckbox();
  // wrap div with the same value
  wrapDiv();
  // people semantic index facets
  peopleIndexFilters();
  // search bar in works semantic index
  searchWorksBar();
  // works semantic index
  worksIndexFilters();
  // expand the facsimile in the specific excerpt page
  openFacEx();
  // from a single excerpt to edition
  goToEx();
  // collapse buttons
  //#removeAfter();
});

// caret
// function removeAfter() {
//
//   // remove caret for editors
//   $(".people-index-div:not(:has('.person-citations')):has('.work-aut-collapse')").find(".work-aut-collapse").each(function() {
//     var exVal = $(this).attr("data-target").split(".")[1];
//     if ($("." + exVal).attr("class") == undefined) {
//       $(".work-aut-collapse[data-target='." + exVal + "']").removeClass("caret-library").removeClass("work-aut-collapse").prepend("<span class='font-size-15 is_curator'></span>");
//     }
//   })
//
//   $(".work-aut-collapse").click(function(e) {
//     var x = e.target;
//     if ($(x).next(".person-citations").attr("aria-expanded") == "false") {
//       $(x).removeClass("caret-library").addClass("collapse-caret-true");
//     } else {
//       $(x).removeClass("collapse-caret-true").addClass("caret-library");
//     }
//   })
//
// }

// change page and transcription
function detectChange(){
 // $(".pageN").appear();
 setTimeout(function(){
  $(document).on("appear",".pageN", function(){
    var temp = $(this)
    temp = 1;
  })
  },3000)

}

// active item in navbar
function navItemActive() {
  if ($("#intro_header_title").text() == "Introduction") {
    $("#nav_2").addClass("text_red");
  } else if ($("#digital_edition_header_title").text() == "Digital Edition") {
    $("#nav_3").addClass("text_red");
  } else if ($("#semantic_indexes_header_title").text() == "Index of Persons") {
    $("#nav_4").addClass("text_red");
  } else if ($("#works_indexes_header_title").text() == "Index of Works") {
    $("#nav_5").addClass("text_red");
  } else {
    $("#nav_1").addClass("text_red");
  }
}

// modals
function modalInstruction() {
  var modal = $("#modal_box");
  var close = $(".close")[0];
  $(".modal_button").click(function() {
    var idVal = $(this).text().trim();
    $("#modal-title").text(idVal);
    var fileName = idVal.split(" ").join("");
    var file;
    if ($("#en-butt").hasClass("active")) {
      $("#modal-img").html("<img src='static/modal/modal-img/modal-img-en/" + fileName + ".png' class='img_center'>");
      file = ("static/modal/en/" + fileName + ".txt");
      $("#modal-p").load(file);
    } else {
      $("#modal-img").html("<img src='static/modal/modal-img/modal-img-it/" + fileName + ".png' class='img_center'>");
      file = ("static/modal/it/" + fileName + ".txt");
      $("#modal-p").load(file);
    }
    modal.show();
  })
  $(close).on("click", function() {
    modal.hide();
  })
}

function tooltip() {
  $('[data-toggle="tooltip"]').tooltip();
}

////////////////////////
// EDIZIONE DIGITALE //
//////////////////////

// transcription + facsimile page panel - digital edition
function openPage() {
    if ($("#page_panel_tool").hasClass("col-md-10")) {
      $("#facets_panel_box").css("display", "none");
      $("#page_panel_tool").removeClass("col-md-10").addClass("col-md-12");
      $(".nested_panel_tool").removeClass("nested_panel_tool_plus");
      // hide the fullscreen icon
      $("#page-fullscreen-icon").css("display", "none");
      // show the close icon
      $("#page-close-icon").css("display", "block");

    } else if ($("#page_panel_tool").hasClass("col-md-11")) {
      $("#facets_panel_box").css("display", "none");
      $("#page_panel_tool").removeClass("col-md-11").addClass("col-md-12");
      $(".nested_panel_tool").removeClass("nested_panel_tool_plus");
      // hide the close icon
      $("#page-close-icon").css("display", "none");
      // show the fullscreen icon
      $("#page-fullscreen-icon").css("display", "block");

    // the page panel is col-md-12 and the filters panel col-md-1
    } else if ($("#facets_panel_box").hasClass("col-md-1") && $("#page_panel_tool").hasClass("col-md-12")) {
      $("#facets_panel_box").css("display", "block");
      $("#page_panel_tool").removeClass("col-md-12").addClass("col-md-11");

    } else {
      $("#facets_panel_box").css("display", "block");
      $("#page_panel_tool").removeClass("col-md-12").addClass("col-md-10");
      $(".nested_panel_tool").removeClass("nested_panel_tool_plus");
      // hide the close icon
      $("#page-close-icon").css("display", "none");
      // show the fullscreen icon
      $("#page-fullscreen-icon").css("display", "block");

    }
}

// transcription + facsimile page panel - semantic indexes
function openPagePeople() {
  if ($("#page_panel_tool_people").hasClass("col-md-10")) {
    $(".facets_panel_box_people").css("display", "none");
    $("#page_panel_tool_people").removeClass("col-md-10").addClass("col-md-12");
    // hide the fullscreen icon
    $("#page-fullscreen-icon").css("display", "none");
    // show the close icon
    $("#page-close-icon").css("display", "block");
  } else if ($("#page_panel_tool_people").hasClass("col-md-11")) {
    $(".facets_panel_box_people").css("display", "none");
    $("#page_panel_tool_people").removeClass("col-md-11").addClass("col-md-12");
    // hide the fullscreen icon
    $("#page-fullscreen-icon").css("display", "none");
    // show the close icon
    $("#page-close-icon").css("display", "block");
    // the page panel is col-md-12 and the filters panel col-md-1
  } else if ($("#facets_panel_box_people").hasClass("col-md-1") && $("#page_panel_tool_people").hasClass("col-md-12")) {
    $(".facets_panel_box_people").css("display", "block");
    $("#page_panel_tool_people").removeClass("col-md-12").addClass("col-md-11");
    // hide the fullscreen icon
    $("#page-fullscreen-icon").css("display", "block");
    // show the close icon
    $("#page-close-icon").css("display", "none");
  } else {
    $(".facets_panel_box_people").css("display", "block");
    $("#page_panel_tool_people").removeClass("col-md-12").addClass("col-md-10");
    // hide the fullscreen icon
    $("#page-fullscreen-icon").css("display", "block");
    // show the close icon
    $("#page-close-icon").css("display", "none");
  }
}

// facets panel - digital edition
function closeFacets() {
  $("#closeFacets_div").toggle(function() {
    if ($("#facets_panel_box").hasClass("col-md-2")) {
      $("#facets_panel_box").removeClass("col-md-2");
      $("#facets_panel_box").addClass("col-md-1");
      $("#page_panel_tool").removeClass("col-md-10");
      $("#page_panel_tool").addClass("col-md-11");
      // hide the filters title
      $("#facets_title").css("visibility", "hidden");
      // show the filters placeholder
      $(".filters_placeholder").show();
      // hide the close icon
      $("#facets-close-icon").hide();
      // show the fullscreen icon
      $("#facets-fullscreen-icon").show();
    } else {
      $("#facets_panel_box").removeClass("col-md-1");
      $("#facets_panel_box").addClass("col-md-2");
      $("#page_panel_tool").removeClass("col-md-11");
      $("#page_panel_tool").addClass("col-md-10");
      // hide the filters title
      $("#facets_title").css("visibility", "visible");
      // hide the filters placeholder
      $(".filters_placeholder").hide();
      // hide the fullscreen icon
      $("#facets-fullscreen-icon").hide();
      // show the close icon
      $("#facets-close-icon").show();

    }
  });
}

// facets panel - semantic indexes
function closeFacetsPeople() {
  $("#closeFacets_div_people").toggle(function() {
    if ($("#facets_panel_box_people").hasClass("col-md-2")) {
      $("#facets_panel_box_people").removeClass("col-md-2");
      $("#facets_panel_box_people").addClass("col-md-1");
      $("#facets_panel_box_people").removeClass("specific-height");
      $("#facets_panel_box_people").addClass("specific-height-sx");
      $("#page_panel_tool_people").removeClass("col-md-10");
      $("#page_panel_tool_people").addClass("col-md-11");
      // change icon x
      $(".index-fullscreen-icon").show();
      $(".index-close-icon").hide();
      // hide the filters title
      $("#facets_title").css("visibility", "hidden");
      // show the filters placeholder
      $(".filters_placeholder").show();
    } else {
      $("#facets_panel_box_people").removeClass("col-md-1");
      $("#facets_panel_box_people").addClass("col-md-2");
      $("#facets_panel_box_people").removeClass("specific-height-sx");
      $("#facets_panel_box_people").addClass("specific-height");
      $("#page_panel_tool_people").removeClass("col-md-11");
      $("#page_panel_tool_people").addClass("col-md-10");
      // change icon x
      $(".index-fullscreen-icon").hide();
      $(".index-close-icon").show();
      // hide the filters placeholder
      $(".filters_placeholder").hide();
      // show the filters title
      $("#facets_title").css("visibility", "visible");
    }
  })
}

// clean results and close the panel
function closeResults() {

  // HIDE THE RESULTS BOX
  $("#res-box").hide();

  // HIDE ROLE CATEGORY
  $("#role-box").hide();

  // EMPTY ROLE CATEGORY
  $(".len-pers-role").remove();

  // HIDE RELATION CATEGORY
  $("#relation-box").hide();

  // HIDE FILTERED CATEGORY
  $("#filtered-people-box").hide();

  // HIDE TYPE OF EXCERPTS
  $("#type-ex-box").hide();

  // SHOW PERSON CATEGORY
  $("#filters_checkbox_people").addClass("in");

  // CHANGE PANEL TOOL HEIGHT
  $(".index-section .panel_tool").css("height", "85vh");
  $("#facets_panel_box").removeClass("vh-70");
  $("#facets_panel_box").addClass("vh-90");

  // REMOVE SCROLL
  $("#facets_panel_box").removeClass("scroll-open-filters");

  // 0 ROLE > SHOW ALL WORKS
  if ($("input.role:checked").length == 0) {
    $(".single-work-filter").removeClass("corresponding-work").removeClass("corresponding-work-in").show();
  }

  // CLOSE WORKS BOX
  $("#filters_checkbox_works").removeClass("in");

  // remove people role box
  if ($(".peopleCheck:checked").length > 0) {
    $(":radio[class=peopleCheck]:checked").each(function() {
      var idPers = ($(this).attr("id"));
      $(".len-pers-role:contains('" + idPers + "')").remove();
    })
    if ($(".len-pers-role").length == 0) {
      $("#add-pers-role").removeClass("scroll-height").removeClass("scroll");
    }
  }
  // /

  // clear the transcription removing colors
  $('input').each(function() {
    // uncheck boxes and display none
    this.checked = false;
    $("#results-container").hide();
    // fix the height of filters
    $("#facets_panel_box").removeClass("vh-70");
    $("#facets_panel_box").addClass("vh-90");
    // remove highRes to reset the counter of results
    $("#list-results li").each(function() {
      var idRes = ($(this).attr("value"));
      $("#transcriptionViewer #"+idRes).removeClass("highRes").removeClass("background_blue").removeClass("background_orchid").removeClass("background_yellowgreen").removeClass("background_green").removeClass("background_pink").removeClass("background_yellow");
      // remove the list item in results
      $(this).remove();
    });
  });

  // remove excerpts results
  $("#ex-to-hide").show();
  $("#ex-to-show").hide();
  // /

  // remove titles of works in the transcription
  $(".provWork").remove();
  // /

  // EMPTY THE LIST OF RESULTS
  $("#list-results li").remove();
  // UNBLOCK PEOPLE when one person is checked
  $("span[data-target='#filters_checkbox_people']").attr("data-toggle", "collapse").attr("aria-expanded", "true").addClass("panel-title");
  // UNBLOCK WORKS when one role is checked
  $("span[data-target='#filters_checkbox_works']").attr("data-toggle", "collapse").attr("aria-expanded", "false").addClass("panel-title");

}

// results panel - indexes
function closeResultsPeople() {
  $(".print-results-people").toggle();
}

// transcription panel
function closeTranscription() {
  $("#text-transcription").toggle(function() {

    if ($("#close_transcription_div").hasClass("col-md-4")) {
      $("#close_transcription_div").removeClass("col-md-4");
      $("#close_transcription_div").addClass("col-md-1");
      $("#close_facsimile_div").removeClass("col-md-8");
      $("#close_facsimile_div").addClass("col-md-11");
      $(".nested_panel_tool").addClass("nested_panel_tool_plus");
      // hide the transcription title
      $("#transcription_title").hide();
      // show the filters placeholder
      $(".placeholder-container").show();
      $(".tra_placeholder").show();
      // hide the close icon
      $("#tra-close-icon").hide();
      // show the fullscreen icon
      $("#tra-fullscreen-icon").show();
      // close the custom tools
      $(".custom-tools").hide();
      // fix transcription position
      $(".tra-placeholder-position").addClass("margin-top-10");

    } else if ($("#close_transcription_div").hasClass("col-md-1") && $("close_facsimile_div").hasClass("col-md-11")) {
      $("#close_transcription_div").removeClass("col-md-1");
      $("#close_transcription_div").addClass("col-md-4");
      $("#close_facsimile_div").removeClass("col-md-11");
      $("#close_facsimile_div").addClass("col-md-8");
      $(".nested_panel_tool").removeClass("nested_panel_tool_plus");
      // show the transcription title
      $("#transcription_title").show();
      // hide the filters placeholder
      $(".placeholder-container").hide();
      $(".tra_placeholder").hide();
      // hide the fullscreen icon
      $("#tra-fullscreen-icon").hide();
      // show the close icon
      $("#tra-close-icon").show();
      // open the custom tools
      $(".custom-tools").show();
      // fix transcription position
      $(".tra-placeholder-position").removeClass("margin-top-10");

    } else {
      // both transcription and facsimile panel are closed = col-md-1 for both
      $("#close_transcription_div").removeClass("col-md-1");
      $("#close_transcription_div").addClass("col-md-4");
      $("#close_facsimile_div").removeClass("col-md-1");
      $("#close_facsimile_div").addClass("col-md-8");
      $("#text-transcription").show();
      $("#viewerContainer").show();
      $(".nested_panel_tool").removeClass("nested_panel_tool_plus");
      // transcription elements
      // show the transcription title
      $("#transcription_title").show();
      // hide the filters placeholder
      $(".placeholder-container").hide();
      $(".tra_placeholder").hide();
      // hide the fullscreen icon
      $("#tra-fullscreen-icon").hide();
      // show the close icon
      $("#tra-close-icon").show();
      // open the custom tools
      $(".custom-tools").show();
      // fix transcription position
      $(".tra-placeholder-position").removeClass("margin-top-10");

      // facsimile elements
      // show the facsimile title
      $("#panel_title").show();
      // show the filters placeholder
      $(".placeholder-fac-container").hide();
      $(".fac_placeholder").hide();
      // show the iiif icon
      $(".iiif").show();
      // hide the fullscreen icon
      $("#fac-fullscreen-icon").hide();
      // show the close icon
      $("#fac-close-icon").show();

    }
  });
}

// facsimile panel
function closeFacsimile() {
  $("#viewerContainer").toggle(function() {
    if ($("#close_facsimile_div").hasClass("col-md-8")) {
      $("#close_facsimile_div").removeClass("col-md-8");
      $("#close_facsimile_div").addClass("col-md-1");
      $("#close_transcription_div").removeClass("col-md-4");
      $("#close_transcription_div").addClass("col-md-11");
      // hide the facsimile title
      $("#panel_title").hide();
      // show the filters placeholder
      $(".placeholder-fac-container").show();
      $(".fac_placeholder").show();
      // fix facsimile position
      $(".fac-placeholder-position").addClass("margin-top-10");

      // hide the iiif icon
      $(".iiif").hide();
      // hide the close icon
      $("#fac-close-icon").hide();
      // show the fullscreen icon
      $("#fac-fullscreen-icon").show();

    } else if ($("#close_facsimile_div").hasClass("col-md-1") && $("close_transcription_div").hasClass("col-md-11")) {
      $("#close_facsimile_div").removeClass("col-md-1");
      $("#close_facsimile_div").addClass("col-md-8");
      $("#close_transcription_div").removeClass("col-md-11");
      $("#close_transcription_div").addClass("col-md-4");
      // show the facsimile title
      $("#panel_title").show();
      // hide the filters placeholder
      $(".placeholder-fac-container").hide();
      $(".fac_placeholder").hide();
      // fix facsimile position
      $(".fac-placeholder-position").removeClass("margin-top-10");

      // show the iiif icon
      $(".iiif").show();
      // hide the fullscreen icon
      $("#fac-fullscreen-icon").hide();
      // show the close icon
      $("#fac-close-icon").show();

    } else {
      // both transcription and facsimile panel are closed = col-md-1 for both
      $("#close_transcription_div").removeClass("col-md-1");
      $("#close_transcription_div").addClass("col-md-4");
      $("#close_facsimile_div").removeClass("col-md-1");
      $("#close_facsimile_div").addClass("col-md-8");
      $("#text-transcription").show();
      $("#viewerContainer").show();
      // facsimile elements
      // show the facsimile title
      $("#panel_title").show();
      // hide the filters placeholder
      $(".placeholder-fac-container").hide();
      $(".fac_placeholder").hide();
      // show the iiif icon
      $(".iiif").show();
      // hide the fullscreen icon
      $("#fac-fullscreen-icon").hide();
      // show the close icon
      $("#fac-close-icon").show();
      // fix facsimile position
      $(".fac-placeholder-position").removeClass("margin-top-10");

      // transcription elements
      // show the transcription title
      $("#transcription_title").show();
      // hide the filters placeholder
      $(".placeholder-container").hide();
      $(".tra_placeholder").hide();
      // hide the fullscreen icon
      $("#tra-fullscreen-icon").hide();
      // show the close icon
      $("#tra-close-icon").show();
      // open the custom tools
      $(".custom-tools").show();
    }
  });
}

// text AJAX load
function loadNotebook() {
  $.ajax ({
    url: "static/quaderno.html",
    success: function(result) {
      $("#transcriptionViewer").html(result);
    }
  });
}

// style button
function changeStyleButton() {
  $("#change_style_button").click(function(){
    $(".tooltip_style").slideToggle(function() {
      $("#transcriptionViewer").toggleClass("scroll_transcription_reduced");
    })
  });
}

// modify font style
function changeFontStyle() {
  $(".font").change(function () {
    $(".font option:selected").each(function() {
      if ($(".font option:selected").text() === "Arial") {
        $("#transcriptionViewer *").addClass("arial-font");
        $("#transcriptionViewer *").removeClass("times-font");
        $("#transcriptionViewer *").removeClass("verdana-font");
      } else if ($(".font option:selected").text() === "Times New Roman") {
        $("#transcriptionViewer *").removeClass("arial-font");
        $("#transcriptionViewer *").addClass("times-font");
        $("#transcriptionViewer *").removeClass("verdana-font");
      } else if (jQuery(".font option:selected").text() === "Verdana") {
        $("#transcriptionViewer *").removeClass("arial-font");
        $("#transcriptionViewer *").removeClass("times-font");
        $("#transcriptionViewer *").addClass("verdana-font");
      } else {
        $("#transcriptionViewer *").removeClass("arial-font");
        $("#transcriptionViewer *").removeClass("times-font");
        $("#transcriptionViewer *").removeClass("verdana-font");
      }
    })
  })
}

// modify font dimensions
function changeFontSize() {
  $(".font_size").change(function () {
    $(".font_size option:selected").each(function() {
      if ($(".font_size option:selected").attr("id") == "size_18") {
        $(".tei_transcription *").removeClass("font-size-20");
        $(".tei_transcription *").removeClass("font-size-22");
        $(".tei_transcription *").removeClass("font-size-24");
        $(".tei_transcription *").removeClass("font-size-26");
        $(".tei_transcription *").addClass("font-size-18");
      }

      else if ($(".font_size option:selected").attr("id") == "size_20") {
        $(".tei_transcription *").removeClass("font-size-18");
        $(".tei_transcription *").removeClass("font-size-22");
        $(".tei_transcription *").removeClass("font-size-24");
        $(".tei_transcription *").removeClass("font-size-26");
        $(".tei_transcription *").addClass("font-size-20");
      }

      else if ($(".font_size option:selected").attr("id") == "size_22") {
        $(".tei_transcription *").removeClass("font-size-18");
        $(".tei_transcription *").removeClass("font-size-20");
        $(".tei_transcription *").removeClass("font-size-24");
        $(".tei_transcription *").removeClass("font-size-26");
        $(".tei_transcription *").addClass("font-size-22");
      }

      else if ($(".font_size option:selected").attr("id") == "size_24") {
        $(".tei_transcription *").removeClass("font-size-18");
        $(".tei_transcription *").removeClass("font-size-20");
        $(".tei_transcription *").removeClass("font-size-22");
        $(".tei_transcription *").removeClass("font-size-26");
        $(".tei_transcription *").addClass("font-size-24");
      }

      else {
        $(".tei_transcription *").removeClass("font-size-18");
        $(".tei_transcription *").removeClass("font-size-20");
        $(".tei_transcription *").removeClass("font-size-22");
        $(".tei_transcription *").removeClass("font-size-24");
        $(".tei_transcription *").addClass("font-size-26");
      }

    });
  })
}

// modify page colour
function changePageColor() {
  $("#dark_page").click(function(){
    $("#close_transcription_div").css("background-color", "#0D0D0D");
    $("#transcription_title").css("color", "#FEFEFE");
    $("#transcriptionViewer").css("color", "#FEFEFE");
    $(".highRes").css("color", "#0D0D0D");
    //$(".pageN").css("color", "#0D0D0D");
  });
  $("#sepia_page").click(function(){
    $("#close_transcription_div").css("background-color", "#ECDED1");
    $("#transcription_title").css("color", "#0D0D0D");
    $("#transcriptionViewer").css("color", "#0D0D0D");
  });
  $("#white_page").click(function(){
    $("#close_transcription_div").css("background-color", "#FEFEFE");
    $("#transcription_title").css("color", "#0D0D0D");
    $("#transcriptionViewer").css("color", "#404040");
  });
}

// search bar - digital edition
function searchForString() {
  $("#search_string").click(function () {
    // input string
    var inputString = $("#gsearch").val();
    // input string regex
    var inputReg = new RegExp(inputString, "ig");
    var text = $("#transcriptionViewer").html();
    var count;
    if (inputString == "") {
      if ($("#en-butt").hasClass("active")) {
        alert("Try to search for any word or sentence inserting it in the search bar");
        return;
      } else {
        alert("Prova a cercare una parola o una frase nel testo inserendola nella barra di ricerca");
        return;
      }
    }
    if (inputString == inputString.toUpperCase()) {
      inputString = inputString.toLowerCase();
    }
    // substitution of the input string in the text
    text = text.replace(inputReg, "<span class='noActiveQuery'>" + '<span class="upper">' + inputString + "</span></span>");
    // set class p_+n for scrolling to next/prev occurrence
    setTimeout(function() {
      i = 1;
      $(".noActiveQuery").each(function() {
        // if the result corresponds to a person
        if ($(".tooltiptext:contains('" + inputString + "')")) {
          var temp = $(this).parent().parent();
          $(temp).addClass("p_" + i);
        } else {
        // if the result does not correspond to a person
          $(this).addClass("p_" + i);
        }
        i++;
        // /
      })
    }, 500)
    // /
    // show number of results
    $("#query-info").show();
    if (text.indexOf(inputString) == -1) {
      if ($("#en-butt").hasClass("active")) {
        $("#query-info").hide();
        alert("There are 0 results, try to search for something else :)");
      } else {
        $("#query-info").hide();
        alert("Ci sono 0 risultati, prova a cercare un'altra parola o frase :)");
      }
      $("#reset_button").click();
    } else {
      $("#prev-string").removeClass("search-prev-next").addClass("search-prev-next-active");
      $("#next-string").removeClass("search-prev-next").addClass("search-prev-next-active");
      $("#query-info").show();
    }
    count = (text.match(new RegExp(inputString, "g")) || []).length;
    $("#query-results-n").text(count);
    $("#query-string").text('"' + inputString + '"');
    $("#transcriptionViewer").html(text);
  })
  // press 13 key
  $("#gsearch").keypress(function(e) {
    var key = e.which;
    if (key === 13) {
      $("#search_string").click();
      e.preventDefault();
    }
  })
}

// prev and next query result button - digital edition
var indexOccurrences = 0;
function nextQueryResult() {
  $("#next-string").click(function() {
    indexOccurrences ++;
    // text scrolling
    var temp = $(".p_" + indexOccurrences);
    $("#transcriptionViewer").animate({
      scrollTop: $(temp).position().top - $("#transcriptionViewer").position().top
    }, 500);
    // /
  })
  $("#prev-string").click(function() {
    if (indexOccurrences >= 1){
      indexOccurrences--;
      var temp = $(".p_"+indexOccurrences);
      $("#transcriptionViewer").animate({
        scrollTop: $(temp).position().top
      }, 500);
    }
  })
}

// reset search bar - digital edition
function resetSearch() {
  $("#reset_button").click(function() {
    $("#gsearch").trigger("reset");
    $("#query-info").hide();
  });
}

// language button
function changeLang() {
  var header = document.getElementById("lang");
  var btns = header.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
  }
}

// DIGITAL EDITION FILTERS
function editionFilters() {



  $("input").change(function(e) {

    // SHOW THE LIST OF RESULTS
    $("#list-results li").empty().show();
    $("#results-container").show();
    // fix the height of filters
    $("#facets_panel_box").removeClass("vh-90");
    $("#facets_panel_box").addClass("vh-70");

    var inputTxt = $(e.target);
    var idName;
    var persLab;
    var n = 0;

    // assign specific id to each person in the transcription
    // to be used to scroll the text when a checkbox in Persons is selected
    $(".peopleCheck").each(function() {
      idName = $(this).attr("id");
      persLab = $("input[id='" + idName + "']").val();
      $("#transcriptionViewer span:contains('" + persLab + "')").each(function() {
        $(this).attr("id", idName + "-" + n);
        n++;
      })
    })

    // I CLICK ON ANY CHECK
    if ($(inputTxt).prop("checked") == true) {

      // I CLICK ON A PERSON
      // PERSON
      // assign a color to the person in the text
      if ($(this).hasClass("peopleCheck")) {

        var persToSearch = $(this).val();

        // person name label in the form surname, name
        var persLabel = $(this).attr("data-label");

        // BLOCK PEOPLE when one person is checked
        $("span[data-target='#filters_checkbox_people']").removeAttr("data-toggle");
        $("#filters_checkbox_people").removeClass("in");
        $(".panel-title[data-target='#filters_checkbox_people']").removeClass("panel-title");
        // BLOCK WORKS when one person is checked
        $("span[data-target='#filters_checkbox_works']").removeAttr("data-toggle");
        $("#filters_checkbox_works").removeClass("in");
        $(".panel-title[data-target='#filters_checkbox_works']").removeClass("panel-title");

        // HIGHLIGHT THE PERSON IN THE TRANSCRIPTION
        $("#transcriptionViewer .tooltiptext:contains('" + persToSearch + "')").parent().addClass("background_blue").addClass("highRes").attr("mentionedperson", persToSearch);

        // PRINT THE EXCERPT CODE THE PERSON APPEARS IN
        var citInRaw = $(this).attr("semantics").split("----"); // divide the different attribute values

        $(citInRaw).each(function() {

          var x = this;
          // excerpt
          var cit = x.split("#")[1];
          // work
          var work = x.split("#")[0]

          if (cit !== undefined) {
            // ex
            $("#" + cit + ":contains('" + persToSearch + "')").find(".highRes").attr("cit", cit);
            // work
            $("#" + cit + ":contains('" + persToSearch + "')").find(".highRes").attr("work", work);
          }

        })

        // SHOW THE RESULTS IN THE LIST
        getRes();

        // CLOSE THE PEOPLE AND WORKS BOX TEMP
        $("#filters_checkbox_people").removeClass("show");
        $("#filters_checkbox_people").removeClass("in");
        $("#filters_checkbox_works").removeClass("in");
        $("#facets_panel_box").addClass("scroll-open-filters");

        // OPEN THE ROLE BOX
        $("#role-box").show();

        // SHOW THE BOX FOR EACH PERSON
        $(".people-role-box").hide();
        var orig = $("#add-pers-role").find(".people-role-box");
        var cloned = $(orig).clone().removeClass("people-role-box").prependTo("#add-pers-role").attr("value", "" + persToSearch + "").addClass("len-pers-role").show();
        //$("#add-pers-role").addClass("scroll-height").addClass("scroll");
        $("#role_caption_name_index").text(persLabel);
        $(".len-pers-role:contains('" + persLabel + "') input").attr("person", persToSearch);

      }

      // IF I CLICK ANOTHER PERSON
      var people = $(".peopleCheck:checked");
      if (people.length > 1) {

        // SHOW THE RESULTS IN THE LIST
        getRes();

      }

      // THEN I CLICK ON A ROLE
      $('.role').change(function(){
        if (this.checked) {

          // UNBLOCK WORKS when one role is checked
          $("#filters_checkbox_works").addClass("in");
          $("span[data-target='#filters_checkbox_works']").attr("data-toggle", "collapse").attr("aria-expanded", "true").addClass("panel-title");


          var pers = $(this).attr("person");

          // SHOW THE RELATION BOX FOR EACH PERSON
          $(".person-relation-box").clone(true, true).removeClass("person-relation-box").prependTo("#add-person-relation-box").attr("value", "" + pers + "").addClass("len-rel-role");
          //$("#add-person-relation-box").addClass("scroll-height").addClass("scroll");
          $("#person-rel-caption").text(pers);
          $(".len-rel-role:contains('" + pers + "') input").attr("person", pers);

          // AUTHOR ROLE
          if ($(this).val() == "author") {
            // assign a color to the person with the author role in the text
            $("#transcriptionViewer .highRes.author:contains('" + pers + "')").not(".data-notebook-author").addClass("background_orchid");
            $("#transcriptionViewer .highRes[data-role='author']:contains('" + pers + "')").not(".data-notebook-author").addClass("background_orchid");
            $("#transcriptionViewer .highRes[data-role='editor']:contains('" + pers + "')").not(".data-notebook-author").addClass("background_orchid");
            $("#transcriptionViewer .highRes[data-role='translator']:contains('" + pers + "')").not(".data-notebook-author").addClass("background_orchid");


            // REMOVE PEOPLE WITHOUT AUTHOR ROLE
            // only if only author checkbox is selected
            if ($("#cited-role").prop("checked") == false) {
              $("#transcriptionViewer .highRes:contains('" + pers + "')").not(".background_orchid").removeClass("background_blue");
            }



            // authors whose name does not occur
            if (pers == "Paolo Bufalini") {
              $("*[data-resp='#PB']").each(function() {
                if ($(this).attr("id") !== undefined) {
                  var idEx = $(this).attr("id");
                  if (idEx.indexOf("comm-") != -1) {
                    $("#" + idEx).addClass("highRes").addClass("background_green").addClass("workEx").addClass("data-notebook-author");
                  }
                  if (idEx.indexOf("quot-") != -1) {
                    $("#" + idEx).addClass("highRes").addClass("background_pink").addClass("workEx").attr("data-notebook-author");
                  }
                  if (idEx.indexOf("tra-") != -1) {
                    $("#" + idEx).addClass("highRes").addClass("background_yellow").addClass("workEx").addClass("data-notebook-author");
                  }
                }
              })
            }



            // SHOW THE WORKS WRITTEN BY THE SELECTED AUTHORS
            $("#filters_checkbox_works").addClass("in");
            $(".single-work-filter:not([data-author='" + pers + "'])").not(".corresponding-work-in").hide();
            $(".single-work-filter[data-author='" + pers + "']").addClass("corresponding-work").show();
            $(".corresponding-work").show();
            $(".corresponding-work-in").show();

            // SHOW THE RESULTS IN THE LIST
            getRes();



          }

          // MENTIONED ROLE
          if ($(this).val() == "mentioned") {


            // assign a color to the person with the author role in the text
            $("#transcriptionViewer .highRes:not('.author')[data-role!='author'][data-role!='translator'][data-role!='editor']:contains('" + pers + "')").not(".data-notebook-author").addClass("background_yellowgreen");

            // REMOVE PEOPLE WITHOUT AUTHOR ROLE
            // only if only author checkbox is selected
            if ($("#author-role").prop("checked") == false) {
              $("#transcriptionViewer .highRes:contains('" + pers + "')").not(".background_yellowgreen").removeClass("background_blue");
            }

            // SHOW THE WORKS THE SELECTED PEOPLE ARE MENTIONED IN
            $("#filters_checkbox_works").addClass("in");
            var work = $("#transcriptionViewer .highRes:not('.author')[data-role!='author'][data-role!='translator'][data-role!='editor']:contains('" + pers + "')");

            if (work.length == 0) {
              $(".single-work-filter").hide();
              $(".corresponding-work-in").show();
              $(".corresponding-work").show();
            } else {
              $(work).each(function() {
                var citWork = $(this).attr("cit");
                $(".single-work-filter > input[semantics*='" + citWork + "']").parent().addClass("corresponding-work-in");
                $(".single-work-filter > input").not("[semantics*='" + citWork + "']").parent().hide();
                $(".corresponding-work-in").show();
                $(".corresponding-work").show();
              })
            }

            // SHOW THE RESULTS IN THE LIST
            getRes();

          }

          // REMOVE RELATION BOX DUPLICATES
          if ($(".len-rel-role[value='" + pers + "']").length > 1) {
            $(".len-rel-role[value='" + pers + "']").first().remove();
          }

          // AS A CONSEQUENCE, OPEN THE FILTERED PERSON BOX
          $("#relation-box").show();

        } else {
          var pers = $(this).attr("person");

          // AUTHOR ROLE
          if ($(this).val() == "author") {

            // remove the color to the person with the author role in the text
            $("#transcriptionViewer .highRes.author:contains('" + pers + "')").removeClass("background_orchid");
            $("#transcriptionViewer .highRes[data-role='author']:contains('" + pers + "')").removeClass("background_orchid");
            $("#transcriptionViewer .highRes[data-role='editor']:contains('" + pers + "')").removeClass("background_orchid");
            $("#transcriptionViewer .highRes[data-role='translator']:contains('" + pers + "')").removeClass("background_orchid");

            // authors whose name does not occur
            if (pers == "Paolo Bufalini") {
              $(".highRes.data-notebook-author").removeClass("highRes").removeClass("background_pink").removeClass("background_green").removeClass("background_yellow").removeClass("data-notebook-author");
            }



            // HIDE THE WORKS WRITTEN BY THE SELECTED AUTHORS
            $(".corresponding-work:not([data-author='" + pers + "'])").show();
            $(".corresponding-work input").prop("checked", false);
            $(".corresponding-work[data-author='" + pers + "']").removeClass("corresponding-work").removeClass("highRes").removeClass("background_green").removeClass("background_pink").removeClass("background_yellow").hide();
            // SHOW WORKS IN WHICH THE PERSON IS MENTIONED
            $(".corresponding-work-in").show();
            // HIDE THE WORKS WRITTEN BY THE SELECTED AUTHOR IN THE TEXT
            $("#transcriptionViewer .highRes[title-author*='" + pers + "']").removeClass("background_green").removeClass("background_pink").removeClass("background_yellow").removeClass("highRes");

            // SHOW THE RELATION BOX FOR EACH PERSON
            if ($("input[person='" + pers + "']:checked").length == 0) {
              // REMOVE EACH PERSON BOX
              $(".len-rel-role:contains('" + pers + "')").remove();
            }

            // SHOW THE RESULTS IN THE LIST
            getRes();

          }

          // MENTIONED ROLE
          if ($(this).val() == "mentioned") {
            // remove a color to the person with the author role in the text
            $("#transcriptionViewer .highRes:not('.author')[data-role!='author'][data-role!='editor'][data-role!='translator']:contains('" + pers + "')").removeClass("background_yellowgreen");
            // REMOVE MENTIONED ROLE
            var work = $("#transcriptionViewer .highRes:not('.author')[data-role!='author'][data-role!='editor'][data-role!='translator']:contains('" + pers + "')");
            $(work).each(function() {
              var citWork = $(this).attr("cit");
              $(".corresponding-work-in input").prop("checked", false);
              $(".single-work-filter > input[semantics*='" + citWork + "']").parent().removeClass("corresponding-work-in").hide();
              //$(".highRes[id='" + citWork + "']").removeClass("background_green").removeClass("background_pink").removeClass("background_yellow").removeClass("highRes");
            })
            // REMOVE WORKS IN WHICH THE PERSON IS MENTIONED
            $("#transcriptionViewer .highRes.workEx:contains('" + pers + "')").removeClass("background_green").removeClass("background_pink").removeClass("background_yellow").removeClass("highRes").removeClass("workEx");
            // SHOW THE WORKS BY THE AUTHOR
            $(".corresponding-work").show();
            // SHOW THE RESULTS IN THE LIST
            getRes();
            // SHOW THE RELATION BOX FOR EACH PERSON
            if ($("input[person='" + pers + "']:checked").length == 0) {
              // REMOVE EACH PERSON BOX
              $(".len-rel-role:contains('" + pers + "')").remove();
            }
          }

          // 0 ROLE > SHOW ALL WORKS AND PEOPLE OCCURRENCES
          if ($("input.role:checked").length == 0) {
            // SHOW PEOPLE OCCURRENCES
            $(".highRes:contains('" + persToSearch + "')").addClass("background_blue");
            // UNCHECK WORKS CHECKBOX
            $(".workCheck").prop('checked', false);
            // REMOVE ALL WORKS
            $(".highRes.workEx").removeClass("highRes").removeClass("workEx").removeClass("background_green").removeClass("background_pink").removeClass("background_yellow");
            // CLOSE WORKS BOX
            $("#filters_checkbox_works").removeClass("in");
            $("span[data-target='#filters_checkbox_works']").removeClass("panel-title");
            // SHOW THE RESULTS IN THE LIST
            getRes();
          }

        }

      })

      // THEN I CLICK ON A RELATION
      $('.relation').change(function(){
        if (this.checked) {

          // OPEN THE BOX OF TYPE OF EXCERPTS
          $("#filtered-people-box").show();

        }
      })

      // THEN I CLICK ON A FILTERED PERSON
      $('.filteredPeople').change(function(){
        if (this.checked) {

          // CLOSE THE BOX OF FILTERED PEOPLE
          $("#filtered-people").removeClass("show");
          $("#filtered-people").removeClass("in");

          // OPEN THE BOX OF TYPE OF EXCERPTS
          $("#type-ex-box").show();

        }
      })

      // I CLICK ON A WORK
      if ($(this).hasClass("workCheck")) {

        // TEMP CLOSE PEOPLE BOX
        // BLOCK PEOPLE when one person is checked
        $("span[data-target='#filters_checkbox_people']").removeAttr("data-toggle");
        $("#filters_checkbox_people").removeClass("in");
        $(".panel-title[data-target='#filters_checkbox_people']").removeClass("panel-title");

        // IDENTIFY THE EXCERPTS FROM THE SELECTED WORK AND THEIR ATTRIBUTES
        var excerpts = $(this).attr("semantics").split("____");
        var titleAuthor = $(this).attr("title-author");


        $(excerpts).each(function() {

          var x = this;
          var exId = x.split("#")[1];
          var exVV = x.split("#")[0];

          // ASSIGN A COLOR FOR EACH EXCERPT DEPENDING ON THE TYPE OF EXCERPT
          // comment
          if (exId.indexOf("comm-") != -1) {
            $("#" + exId).addClass("highRes").addClass("background_green workEx").attr("title-author", titleAuthor).attr("vv", exVV);
          }
          // quotation
          if (exId.indexOf("quot-") != -1) {
            $("#" + exId).addClass("highRes").addClass("background_pink workEx").attr("title-author", titleAuthor).attr("vv", exVV);;
          }
          // translation
          if (exId.indexOf("tra-") != -1) {
            $("#" + exId).addClass("highRes").addClass("background_yellow workEx").attr("title-author", titleAuthor).attr("vv", exVV);;
          }

          // IF MENTIONED PERSON ROLE IS CHECKED
          if ($("input#cited-role").is(":checked")) {

            var citedPers = $("input#cited-role").attr("person");
            // comment
            if (exId.indexOf("comm-") != -1) {
              $("#" + exId + ":not(:contains('" + citedPers + "'))").removeClass("highRes").removeClass("background_green workEx");
              $("#" + exId + ":contains('" + citedPers + "')").addClass("highRes").addClass("background_green workEx").attr("title-author", titleAuthor).attr("vv", exVV);
            }
            // quotation
            if (exId.indexOf("quot-") != -1) {
              $("#" + exId + ":not(:contains('" + citedPers + "'))").removeClass("highRes").removeClass("background_pink workEx");
              $("#" + exId + ":contains('" + citedPers + "')").addClass("highRes").addClass("background_pink workEx").attr("title-author", titleAuthor).attr("vv", exVV);
            }
            // translation
            if (exId.indexOf("tra-") != -1) {
              $("#" + exId + ":not(:contains('" + citedPers + "'))").removeClass("highRes").removeClass("background_yellow workEx");
              $("#" + exId + ":contains('" + citedPers + "')").addClass("highRes").addClass("background_yellow workEx").attr("title-author", titleAuthor).attr("vv", exVV);
            }
            // BUT ALSO AUTHOR ROLE
            if ($("input#author-role").is(":checked")) {
              // ASSIGN A COLOR FOR EACH EXCERPT DEPENDING ON THE TYPE OF EXCERPT
              // comment
              if (exId.indexOf("comm-") != -1) {
                $("#" + exId + "[title-author*='" + citedPers + "']").addClass("highRes").addClass("background_green workEx").attr("title-author", titleAuthor).attr("vv", exVV);
              }
              // quotation
              if (exId.indexOf("quot-") != -1) {
                $("#" + exId + "[title-author*='" + citedPers + "']").addClass("highRes").addClass("background_pink workEx").attr("title-author", titleAuthor).attr("vv", exVV);;
              }
              // translation
              if (exId.indexOf("tra-") != -1) {
                $("#" + exId + "[title-author*='" + citedPers + "']").addClass("highRes").addClass("background_yellow workEx").attr("title-author", titleAuthor).attr("vv", exVV);;
              }
            }
          }


        })

        // SHOW THE RESULTS IN THE LIST
        getRes();

      }


    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////// ELSE //////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    } else {

      // IF I UNCHECK A PERSON
      if ($(this).hasClass("peopleCheck")) {

        // REMOVE HIGHLIGHT FROM TEXT
        var persToSearch = $(this).val();
        $("#transcriptionViewer .tooltiptext:contains('" + persToSearch + "')").parent().removeClass("background_blue").removeClass("highRes").removeClass("background_orchid").removeClass("background_yellowgreen");
        $("#transcriptionViewer .tooltiptext:contains('" + persToSearch + "')").removeClass("highRes");

        // AUTHORS WHOSE NAME IS NOT MENTIONED
        if (persToSearch == "Paolo Bufalini") {
          $(".highRes.data-notebook-author").removeClass("highRes").removeClass("background_green").removeClass("background_pink").removeClass("background_yellow").removeClass("data-notebook-author");
        }

        // SHOW THE RESULTS IN THE LIST
        getRes();

        // HIDE THE WORKS WRITTEN BY THE SELECTED AUTHORS
        $(".corresponding-work:not(:contains('" + persToSearch + "'))").show();
        $(".corresponding-work:contains('" + persToSearch + "')").removeClass("corresponding-work").hide();
        // HIDE THE WORKS IN WHICH THE PERSON APPERS
        var citWork = $(this).attr("semantics").split("----");
        $(citWork).each(function() {
          var ex = this.split("#")[1];
          $(".single-work-filter > input[semantics*='" + ex + "']").parent().removeClass("corresponding-work-in").hide();
        })

        // REMOVE CORRESPONDING ROLE BOX
        $(".len-pers-role[value='" + persToSearch + "']").remove();

        // IF OTHER PEOPLE ARE CHECKED
        if ($(".peopleCheck:checked").length >= 1) {

          // SHOW THE RESULTS IN THE LIST
          getRes();

        }

        // CLOSE IF THE PEOPLE ARE 0
        if ($(".peopleCheck:checked").length == 0) {

          // fix the height of filters
          $("#facets_panel_box").removeClass("vh-70");
          $("#facets_panel_box").addClass("vh-90");

          // CLOSE THE ROLE BOX
          $("#role-box").hide();

          // CLOSE THE FILTERED PERSON BOX
          $("#relation-box").hide();

          // SHOW WORKS
          $(".single-work-filter").removeClass("corresponding-work").removeClass("corresponding-work-in").show();
          // CLOSE WORKS BOX
          $("#filters_checkbox_works").removeClass("in");

        }

      }

      // IF I UNCHECK A WORK
      // I CLICK ON A WORK
      if ($(this).hasClass("workCheck")) {

        // IDENTIFY THE EXCERPTS FROM THE SELECTED WORK
        var excerpts = $(this).attr("semantics").split("____");

        $(excerpts).each(function() {
          var x = this;
          var exId = x.split("#")[1];
          // ASSIGN A COLOR FOR EACH EXCERPT DEPENDING ON THE TYPE OF EXCERPT
          // comment
          if (exId.indexOf("comm-") != -1) {
            $("#" + exId).removeClass("highRes").removeClass("background_green");
          }
          // quotation
          if (exId.indexOf("quot-") != -1) {
            $("#" + exId).removeClass("highRes").removeClass("background_pink");
          }
          // translation
          if (exId.indexOf("tra-") != -1) {
            $("#" + exId).removeClass("highRes").removeClass("background_yellow");
          }

          // IF THERE ARE CHECKED ROLES
          if ($("input#cited-role").is(":checked")) {
            var citedPers = $("input#cited-role").attr("person");
            // comment
            if (exId.indexOf("comm-") != -1) {
              $("#" + exId).removeClass("highRes").removeClass("background_green workEx");
              $("#" + exId + ":contains('" + citedPers + "')").removeClass("highRes").removeClass("background_green workEx");
            }
            // quotation
            if (exId.indexOf("quot-") != -1) {
              $("#" + exId).removeClass("highRes").removeClass("background_pink workEx");
              $("#" + exId + ":contains('" + citedPers + "')").removeClass("highRes").removeClass("background_pink workEx");
            }
            // translation
            if (exId.indexOf("tra-") != -1) {
              $("#" + exId).removeClass("highRes").removeClass("background_yellow workEx");
              $("#" + exId + ":contains('" + citedPers + "')").removeClass("highRes").removeClass("background_yellow workEx");
            }
          }

        })

        // SHOW THE RESULTS IN THE LIST
        getRes();

        // IF 0 CHECKED
        if (($(".workCheck:checked").length == 0) && ($(".peopleCheck:checked").length == 0)) {
          closeResults();
        }

      }

      // IF 0 CHECKED
      if ($(":checked").length == 0) {
        $("#list-results").clear();

        // fix the height of filters
        $("#facets_panel_box").removeClass("vh-70");
        $("#facets_panel_box").addClass("vh-90");

        // REMOVE SCROLL
        $("#facets_panel_box").removeClass("scroll-open-filters");

        // CLOSE WORKS BOX
        $("#filters_checkbox_works").removeClass("in");

      }

    }
  })
}

function activeScroll() {
  $("#facets_panel_box").addClass("scroll-open-filters");
}

// LIST OF RESULTS
function getRes() {
  // EMPTY THE LIST
  $("#list-results").empty()

  // RESULTS
  var highRes = $(".highRes");

  // CREATE THE LIST
  for (var i = 0; i < highRes.length; i++) {

    // VAR FOR EACH TYPE OF LI
    var item = $(highRes[i]).attr("id");

    // VAR FOR PEOPLE
    var mentionedPerson = $(highRes[i]).attr("mentionedperson");
    var cit = $(highRes[i]).attr("cit");
    var author = $(highRes[i]).attr("author");
    var work = $(highRes[i]).attr("work");

    // VAR FOR WORKS
    var vv = $(highRes[i]).attr("vv");

    if ($(highRes[i]).hasClass("persName") == true) {
      if (cit !== undefined) {

        // AUTHOR
        if ($(".highRes[id='" + item + "']").hasClass("background_orchid") == true) {
          // IN A COMMENT
          if (cit.indexOf("comm-") != -1) {
            // if the work exists
            if (work !== "") {
              $("#list-results").append("<li class='bold pointer' value='" + item + "'><span class='list-results-marker'>&#9679;</span> " + mentionedPerson +  " <span class='superslim appears_mentioned_as' value='" + item + "'>è menzionato come</span> <span class='append-role background_orchid superslim assign_author' value='" + item + "'>autore</span>" + " <span class='superslim cit_in_comm' value='" + item + "'>in un commento</span>" + " <span class='superslim' value='" + item + "''>in</span>" + " <span class='superslim' value='" + item + "''>" + work.replace("__", " ") + "</span>" + " <span class='superslim background_green' value='" + item + "'>" + cit + "</span>" + "</li>");
            // if the work does not exist
            } else {
              $("#list-results").append("<li class='bold pointer' value='" + item + "'><span class='list-results-marker'>&#9679;</span> " + mentionedPerson +  " <span class='superslim appears_mentioned_as' value='" + item + "'>è menzionato come</span> <span class='append-role background_orchid superslim assign_author' value='" + item + "'>autore</span>" + " <span class='superslim cit_in_comm' value='" + item + "'>in un commento</span>" + " <span class='superslim background_green' value='" + item + "'>" + cit + "</span>" + "</li>");
            }
            loadBundles($.cookie( 'language'),true);
          }

          // IN A QUOTATION
          if (cit.indexOf("quot-") != -1) {
            // if the work exists
            if (work !== "") {
              $("#list-results").append("<li class='bold pointer' value='" + item + "'><span class='list-results-marker'>&#9679;</span> " + mentionedPerson +  " <span class='superslim appears_mentioned_as' value='" + item + "'>è menzionato come</span> <span class='append-role background_orchid superslim assign_author' value='" + item + "'>autore</span>" +  " <span class='superslim cit_in_quot' value='" + item + "'>in una citazione</span>" + " <span class='superslim from_work' value='" + item + "''>di</span>" + " <span class='superslim' value='" + item + "''>" + work.replace("__", " ") + "</span>" + " <span class='cit_quot superslim background_pink' value='" + item + "'>cit-</span><span class='superslim background_pink' value='" + item + "'>" + cit.split("-")[1] + "</span>" + "</li>");
            // if the work does not exist
            } else {
              $("#list-results").append("<li class='bold pointer' value='" + item + "'><span class='list-results-marker'>&#9679;</span> " + mentionedPerson +  " <span class='superslim appears_mentioned_as' value='" + item + "'>è menzionato come</span> <span class='append-role background_orchid superslim assign_author' value='" + item + "'>autore</span>" +  " <span class='superslim cit_in_quot' value='" + item + "'>in una citazione</span>" + " <span class='cit_quot superslim background_pink' value='" + item + "'>cit-</span><span class='superslim background_pink' value='" + item + "'>" + cit.split("-")[1] + "</span>" + "</li>");
            }
            loadBundles($.cookie( 'language'),true);
          }

          // IN A TRANSLATION
          if (cit.indexOf("tra-") != -1) {
            // if the work exists
            if (work !== "") {
              $("#list-results").append("<li class='bold pointer' value='" + item + "'><span class='list-results-marker'>&#9679;</span> " + mentionedPerson +  " <span class='superslim appears_mentioned_as' value='" + item + "'>è menzionato come</span> <span class='append-role background_orchid superslim assign_author' value='" + item + "'>autore</span>" + " <span class='superslim cit_in_tra' value='" + item + "'>in una traduzione</span>" + " <span class='superslim from_work' value='" + item + "''>di</span>" + " <span class='superslim' value='" + item + "''>" + work.replace("__", " ") + "</span>" + " <span class='superslim background_yellow' value='" + item + "'>" + cit + "</span>" + "</li>");
            // if the work does not
            } else {
              $("#list-results").append("<li class='bold pointer' value='" + item + "'><span class='list-results-marker'>&#9679;</span> " + mentionedPerson +  " <span class='superslim appears_mentioned_as' value='" + item + "'>è menzionato come</span> <span class='append-role background_orchid superslim assign_author' value='" + item + "'>autore</span>" + " <span class='superslim cit_in_tra' value='" + item + "'>in una traduzione</span>" + " <span class='superslim background_yellow' value='" + item + "'>" + cit + "</span>" + "</li>");
            }
            loadBundles($.cookie( 'language'),true);
          }

        }
        // MENTIONED PERSON
        else if ($(".highRes[id='" + item + "']").hasClass("background_yellowgreen") == true) {
          // IN A COMMENT
          if (cit.indexOf("comm-") != -1) {
            // if the work exists
            if (work !== "") {
              $("#list-results").append("<li class='bold pointer' value='" + item + "'><span class='list-results-marker'>&#9679;</span> " + mentionedPerson +  " <span class='superslim appears_as' value='" + item + "'>compare come</span> <span class='append-role background_yellowgreen superslim assign_mentioned' value='" + item + "'>persona menzionata</span>" + " <span class='superslim cit_in_comm' value='" + item + "'>in un commento</span>" + " <span class='superslim' value='" + item + "''>in</span>" + " <span class='superslim' value='" + item + "''>" + work.replace("__", " ") + "</span>" + " <span class='superslim background_green' value='" + item + "'>" + cit + "</span>" + "</li>");
            // if the work does not exist
            } else {
              $("#list-results").append("<li class='bold pointer' value='" + item + "'><span class='list-results-marker'>&#9679;</span> " + mentionedPerson +  " <span class='superslim appears_as' value='" + item + "'>compare come</span> <span class='append-role background_yellowgreen superslim assign_mentioned' value='" + item + "'>persona menzionata</span>" + " <span class='superslim cit_in_comm' value='" + item + "'>in un commento</span>" + " <span class='superslim background_green' value='" + item + "'>" + cit + "</span>" + "</li>");
            }
            loadBundles($.cookie( 'language'),true);
          }

          // IN A QUOTATION
          if (cit.indexOf("quot-") != -1) {
            // if the work exists
            if (work !== "") {
              $("#list-results").append("<li class='bold pointer' value='" + item + "'><span class='list-results-marker'>&#9679;</span> " + mentionedPerson +  " <span class='superslim appears_as' value='" + item + "'>compare come</span> <span class='append-role background_yellowgreen superslim assign_mentioned' value='" + item + "'>persona menzionata</span>" +  " <span class='superslim cit_in_quot' value='" + item + "'>in una citazione</span>" + " <span class='superslim from_work' value='" + item + "''>di</span>" + " <span class='superslim' value='" + item + "''>" + work.replace("__", " ") + "</span>" + " <span class='cit_quot superslim background_pink' value='" + item + "'>cit-</span><span class='superslim background_pink' value='" + item + "'>" + cit.split("-")[1] + "</span>" + "</li>");
            // if the work does not exist
            } else {
              $("#list-results").append("<li class='bold pointer' value='" + item + "'><span class='list-results-marker'>&#9679;</span> " + mentionedPerson +  " <span class='superslim appears_as' value='" + item + "'>compare come</span> <span class='append-role background_yellowgreen superslim assign_mentioned' value='" + item + "'>persona menzionata</span>" +  " <span class='superslim cit_in_quot' value='" + item + "'>in una citazione</span>" + " <span class='cit_quot superslim background_pink' value='" + item + "'>cit-</span><span class='superslim background_pink' value='" + item + "'>" + cit.split("-")[1] + "</span>" + "</li>");
            }
            loadBundles($.cookie( 'language'),true);
          }

          // IN A TRANSLATION
          if (cit.indexOf("tra-") != -1) {
            // if the work exists
            if (work !== "") {
              $("#list-results").append("<li class='bold pointer' value='" + item + "'><span class='list-results-marker'>&#9679;</span> " + mentionedPerson +  " <span class='superslim appears_as' value='" + item + "'>compare come</span> <span class='append-role background_yellowgreen superslim assign_mentioned' value='" + item + "'>persona menzionata</span>" + " <span class='superslim cit_in_tra' value='" + item + "'>in una traduzione</span>" + " <span class='superslim from_work' value='" + item + "''>di</span>" + " <span class='superslim' value='" + item + "''>" + work.replace("__", " ") + "</span>" + " <span class='superslim background_yellow' value='" + item + "'>" + cit + "</span>" + "</li>");
            // if the work does not
            } else {
              $("#list-results").append("<li class='bold pointer' value='" + item + "'><span class='list-results-marker'>&#9679;</span> " + mentionedPerson +  " <span class='superslim appears_as' value='" + item + "'>compare come</span> <span class='append-role background_yellowgreen superslim assign_mentioned' value='" + item + "'>persona menzionata</span>" + " <span class='superslim cit_in_tra' value='" + item + "'>in una traduzione</span>" + " <span class='superslim background_yellow' value='" + item + "'>" + cit + "</span>" + "</li>");
            }
            loadBundles($.cookie( 'language'),true);
          }

        } else {
        // NO ROLE
          // IN A COMMENT
          if (cit.indexOf("comm-") != -1) {
            // if the work exists
            if (work !== "") {
              $("#list-results").append("<li class='bold pointer' value='" + item + "'><span class='list-results-marker'>&#9679;</span> " + mentionedPerson + " <span id='is_mentioned' class='superslim is_mentioned' value='" + item + "'>è menzionato</span> " + " <span class='superslim cit_in_comm' value='" + item + "'>in un commento</span>" + " <span class='superslim' value='" + item + "''>in</span>" + " <span class='superslim' value='" + item + "''>" + work.replace("__", " ") + "</span>" + " <span class='superslim background_green' value='" + item + "'>" + cit + "</span>" + "</li>");
              loadBundles($.cookie( 'language'),true);
            // if the work does not exist
            } else {
              $("#list-results").append("<li class='bold pointer' value='" + item + "'><span class='list-results-marker'>&#9679;</span> " + mentionedPerson + " <span id='is_mentioned' class='superslim is_mentioned' value='" + item + "'>è menzionato</span> " + " <span class='superslim cit_in_comm' value='" + item + "'>in un commento</span>" + " <span class='superslim background_green' value='" + item + "'>" + cit + "</span>" + "</li>");
              loadBundles($.cookie( 'language'),true);
            }
          }

          // IN A QUOTATION
          if (cit.indexOf("quot-") != -1) {
            // if the work exists
            if (work !== "") {
              $("#list-results").append("<li class='bold pointer' value='" + item + "'><span class='list-results-marker'>&#9679;</span> " + mentionedPerson + " <span id='is_mentioned' class='superslim is_mentioned' value='" + item + "'>è menzionato</span> " + " <span class='superslim cit_in_quot' value='" + item + "'>in una citazione</span>" + " <span class='superslim from_work' value='" + item + "''>di</span>" + " <span class='superslim' value='" + item + "''>" + work.replace("__", " ") + "</span>" + " <span class='cit_quot superslim background_pink' value='" + item + "'>cit-</span><span class='superslim background_pink' value='" + item + "'>" + cit.split("-")[1] + "</span>" + "</li>");
            // if the work does not exist
            } else {
              $("#list-results").append("<li class='bold pointer' value='" + item + "'><span class='list-results-marker'>&#9679;</span> " + mentionedPerson + " <span id='is_mentioned' class='superslim is_mentioned' value='" + item + "'>è menzionato</span> " + " <span class='superslim cit_in_quot' value='" + item + "'>in una citazione</span>" + " <span class='cit_quot superslim background_pink' value='" + item + "'>cit-</span><span class='superslim background_pink' value='" + item + "'>" + cit.split("-")[1] + "</span>" + "</li>");
            }
            loadBundles($.cookie( 'language'),true);
          }

          // IN A TRANSLATION
          if (cit.indexOf("tra-") != -1) {
            // if the work exists
            if (work !== "") {
              $("#list-results").append("<li class='bold pointer' value='" + item + "'><span class='list-results-marker'>&#9679;</span> " + mentionedPerson + " <span id='is_mentioned' class='superslim is_mentioned' value='" + item + "'>è menzionato</span> " + " <span class='superslim cit_in_tra' value='" + item + "'>in una traduzione</span>" + " <span class='superslim from_work' value='" + item + "''>di</span>" + " <span class='superslim' value='" + item + "''>" + work.replace("__", " ") + "</span>" + " <span class='superslim background_yellow' value='" + item + "'>" + cit + "</span>" + "</li>");
            // if the work does not
            } else {
              $("#list-results").append("<li class='bold pointer' value='" + item + "'><span class='list-results-marker'>&#9679;</span> " + mentionedPerson + " <span id='is_mentioned' class='superslim is_mentioned' value='" + item + "'>è menzionato</span> " + " <span class='superslim cit_in_tra' value='" + item + "'>in una traduzione</span>" + " <span class='superslim background_yellow' value='" + item + "'>" + cit + "</span>" + "</li>");
            }
            loadBundles($.cookie( 'language'),true);
          }
        }

      } else {

        // AUTHOR
        if ($(".highRes[id='" + item + "']").hasClass("background_orchid") == true) {
          $("#list-results").append("<li class='bold pointer' value='" + item + "'><span class='list-results-marker'>&#9679;</span> " + mentionedPerson + " <span class='superslim appears_mentioned_as' value='" + item + "'>è menzionato come</span> <span class='append-role background_orchid superslim assign_author' value='" + item + "'>autore</span>" + " <span class='superslim by_author' value='" + item + "'>da</span>" + " <span class='superslim' value='" + item + "'>Paolo Bufalini</span>" + "</li>");
          loadBundles($.cookie( 'language'),true);
        }
        // MENTIONED PERSON
        else if ($(".highRes[id='" + item + "']").hasClass("background_yellowgreen") == true) {
          $("#list-results").append("<li class='bold pointer' value='" + item + "'><span class='list-results-marker'>&#9679;</span> " + mentionedPerson + " <span class='superslim appears_as' value='" + item + "'>compare come</span> <span class='append-role background_yellowgreen superslim assign_mentioned' value='" + item + "'>persona menzionata</span>" + " <span class='superslim by_author' value='" + item + "'>da</span>" + " <span class='superslim' value='" + item + "'>Paolo Bufalini</span>" + "</li>");
          loadBundles($.cookie( 'language'),true);
        } else {
        // NO ROLE
          $("#list-results").append("<li class='bold pointer' value='" + item + "'><span class='list-results-marker'>&#9679;</span> " + mentionedPerson + " <span id='is_mentioned' class='superslim is_mentioned' value='" + item + "'>è menzionato</span> " + " <span class='superslim by_author' value='" + item + "'>da</span>" + " <span class='superslim' value='" + item + "'>Paolo Bufalini</span>" + "</li>");
          loadBundles($.cookie( 'language'),true);
        }

      }
    // WORKS
    } else if ($(highRes[i]).hasClass("workEx") == true) {
      if (vv !== undefined) {
        // THE EXCERPT IS A COMMENT
        if (item.indexOf("comm-") != -1) {
          $("#list-results").append("<li class='bold pointer workLi' value='" + item + "'><span class='list-results-marker'>&#9679;</span> " + "<span class='superslim comm_res' value='" + item + "'>Commento</span>" + " <span class='superslim from_work' value='" + item + "'>di</span>" + " <span value='" + item + "'>" + vv + "</span>" + " <span class='superslim background_green' value='" + item + "'>comm-" + item.split("-")[1] + "</span>" + "</li>");
          loadBundles($.cookie( 'language'),true);
        }

        // THE EXCERPT IS A QUOTATION
        if (item.indexOf("quot-") != -1) {
          $("#list-results").append("<li class='bold pointer workLi' value='" + item + "'><span class='list-results-marker'>&#9679;</span> " + "<span class='superslim quot_res' value='" + item + "'>Citazione</span>" + " <span class='superslim from_work' value='" + item + "'>di</span>" + " <span value='" + item + "'>" + vv + "</span>" + " <span class='cit_quot superslim background_pink' value='" + item + "'>cit-</span><span class='superslim background_pink' value='" + item + "'>" + item.split("-")[1] + "</span>" + "</li>");
          loadBundles($.cookie( 'language'),true);
        }

        // THE EXCERPT IS A TRANSLATION
        if (item.indexOf("tra-") != -1) {
          $("#list-results").append("<li class='bold pointer workLi' value='" + item + "'><span class='list-results-marker'>&#9679;</span> " + "<span class='superslim tra_res' value='" + item + "'>Traduzione</span>" + " <span class='superslim from_work' value='" + item + "'>di</span>" + " <span value='" + item + "'>" + vv + "</span>" + " <span class='superslim background_yellow' value='" + item + "'>tra-" + item.split("-")[1] + "</span>" + "</li>");
          loadBundles($.cookie( 'language'),true);
        }
      } else {
        // THE EXCERPT IS A COMMENT
        if (item.indexOf("comm-") != -1) {
          $("#list-results").append("<li class='bold pointer workLi' value='" + item + "'><span class='list-results-marker'>&#9679;</span> " + "<span class='superslim comm_res' value='" + item + "'>Commento</span>" + " <span class='superslim from_work' value='" + item + "'>di</span> Paolo Bufalini" + " <span class='superslim background_green' value='" + item + "'>comm-" + item.split("-")[1] + "</span>" + "</li>");
          loadBundles($.cookie( 'language'),true);
        }

        // THE EXCERPT IS A QUOTATION
        if (item.indexOf("quot-") != -1) {
          $("#list-results").append("<li class='bold pointer workLi' value='" + item + "'><span class='list-results-marker'>&#9679;</span> " + "<span class='superslim quot_res' value='" + item + "'>Citazione</span>" + " <span class='superslim from_work' value='" + item + "'>di</span> Paolo Bufalini" + " <span class='cit_quot superslim background_pink' value='" + item + "'>cit-</span><span class='superslim background_pink' value='" + item + "'>" + item.split("-")[1] + "</span>" + "</li>");
          loadBundles($.cookie( 'language'),true);
        }

        // THE EXCERPT IS A TRANSLATION
        if (item.indexOf("tra-") != -1) {
          $("#list-results").append("<li class='bold pointer workLi' value='" + item + "'><span class='list-results-marker'>&#9679;</span> " + "<span class='superslim tra_res' value='" + item + "'>Traduzione</span>" + " <span class='superslim from_work' value='" + item + "'>di</span> Paolo Bufalini" + " <span class='superslim background_yellow' value='" + item + "'>tra-" + item.split("-")[1] + "</span>" + "</li>");
          loadBundles($.cookie( 'language'),true);
        }
      }

    }

  }


  // REMOVE DUPLICATES
  if ($("#list-results li[value='" + item + "']").length > 1) {
    $("#list-results li[value='" + item + "']").first().remove();
  }

  $("#n-results").text($("#list-results li").length);
  console.log($("#list-results li").length)


  // IF AUTHOR, LEAVE ONLY WORKS BY THAT AUTHOR AND AUTHOR OCCURRENCES
  if (($("#author-role").prop("checked") == true) && ($("#cited-role").prop("checked") == false)) {
    $("#list-results li:not(:has('.background_orchid'))").hide();
    $("#list-results li.workLi").show();
    // COUNT THE NUMBER OF RESULTS
    $("#n-results").text($("#list-results li:visible").length);
  }
  // IF MENTIONED PERSON, LEAVE ONLY WORKS IN WHICH THE MENTIONED PERSON IS IN AND THAT PERSON OCCURRENCES
  else if (($("#author-role").prop("checked") == false) && ($("#cited-role").prop("checked") == true)) {
    $("#list-results li:not(:has('.background_yellowgreen'))").hide();
    $("#list-results li.workLi").show();
    // COUNT THE NUMBER OF RESULTS
    //$("#n-results").text($("#list-results li:visible").length);

    // filter the people in results depending on the selected work
    $("#list-results li.workLi").each(function() {
      var work = ($(this).attr("value"));
      $("#list-results li:not(:contains('" + work.split("-")[1] + "'))").hide();
      $("#list-results li:contains('" + work.split("-")[1] + "')").addClass("contain");
      $(".contain").show();
      $("#n-results").text($("#list-results li:visible").length);
    })

  }

}

// excerpt codes print and scroll to corresponding id
function printCode() {
  $("#list-results").click(function(e) {
    var valEx = $(e.target).attr("value");

    //var title = $("#list-results li[value='" + valEx + "']").text();
    //var titleN = $("#list-results li[value='" + valEx + "']").index() + 1;
    //$("#title-id").text(title); //titleN + ". " +

    $("#transcriptionViewer").animate({
      scrollTop: $("#" + valEx).position().top - 25
    }, 500);

  });
}

// results hide and show
function countChecked() {
  var n = $("input:checked").length;
  if (n > 0) {

    // SHOW THE RESULTS BOX
    $("#res-box").show();
    // SHOW THE BUTTON TO REMOVE RESULTS
    $("#close-results").show();
    // SHOW THE LIST OF RESULTS
    $("#print-results").show();

    // CHANGE PANEL TOOL HEIGHT
    $(".index-section .panel_tool").css("height", "65vh");

    $("#print-results").removeClass("no-display");

  } else {

    // SHOW THE RESULTS BOX
    $("#res-box").hide();
    // HIDE THE BUTTON TO REMOVE RESULTS
    $("#close-results").hide();
    // EMPTY THE LIST OF RESULTS
    $("#list-results").empty();

    // CHANGE PANEL TOOL HEIGHT
    $(".index-section .panel_tool").css("height", "85vh");

  }
}

// search bar - indexes
function searchRes() {
  $("#filter-res").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#list-results li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) != -1);
    })
  })
}

// function containing all the functions regarding facets - digital edition
function useCheckbox() {
  editionFilters();
  countChecked();
  $("input").on("change", countChecked);
  printCode();
  searchRes();
}

// trascription-facsimile linking from selector
function tieTrasFac() {
  var pageN = $("#pages option:selected").text().split("-")[0];
  var pageToShow = $("[data-n=" + pageN + "]")
  $(".scroll_transcription").animate({
    scrollTop: $(pageToShow).position().top
  }, 500);
}


///////////////////////////
// PEOPLE SEMANTIC INDEX //
//////////////////////////

/* wrap div with the same value - 1 div for each person */
function wrapDiv() {
  var allPeople = $(".peopleCheckIndex");
  for (var i = 0; i < allPeople.length; i++) {
    var onePerson = $(allPeople[i]).attr("value");
    // wrap all div of each person under one
    $(".people-index-div[value='" + onePerson + "']").wrapAll("<div class='index-div filter' value='" + onePerson + "'></div>");
    $(".people-index-div[value='" + onePerson + "']").removeAttr("value");
    //
  }
}

// dbpedia / viaf link index
/*function authorityFiles() {
  $(".authority-file").show();
}

function leaveAuthorityFiles() {
  $(".authority-file").hide();
}*/

// search bar - indexes
function searchIndex() {
  $(".index-search-input").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".filter").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) != -1);
    })
  })
}

// REMOVE CHECK PEOPLE
function removeCheck() {

  // PEOPLE INDEX
  $(".index-div").removeClass("contain").addClass("filter").removeClass("dontremove-auth").removeClass("dontremove-cited").show();
  $("input[class=peopleCheckIndex]").prop("checked", false);
  $("#clear_res_ind").hide();

  // author and mentioned person highlight
  $(".author-name").removeClass("background_orchid");
  $(".cited-pers").removeClass("background_yellowgreen");

  // close person citations cards
  $(".person-citations").removeClass("in").attr("aria-expanded", "false");
  $(".work-aut-collapse").attr("aria-expanded", "false");
  $(".work-aut-collapse").removeClass("collapse-caret-true").addClass("collapse-caret");

  // REMOVE SCROLL
  $("#facets_panel_box_people").removeClass("scroll-open-filters");

  // HIDE ROLE BOX
  $("#people-role-container").hide();

  // EMPTY ROLE BOX
  $(".specific-role-box").removeClass("contain").removeClass("filter").remove();

  // SHOW THE PEOPLE RADIO
  $("#index-people").show();
  $("span[data-target='#index-people']").addClass("panel-title");

  // REMOVE ROLES
  $(".author_role_tag").hide();
  $(".cited_role_tag").hide();

}

// REMOVE CHECK WORKS
function removeCheckWorks() {
  $(".works-index-div").removeClass("contain").addClass("filter").show();
  $("input[class=worksCheckIndex]").prop("checked", false);
  $(".seeWorks").hide();
  // close work cards
  $(".work-card-collapse").removeClass("in");
}

// INDEX OF PEOPLE FACETS
function peopleIndexFilters() {

  $("input[class=peopleCheckIndex]").click(function() {

    // IF I CHECK A PERSON
    if (this.checked) {

      // remove check button
      $("#clear_res_ind").show()

      // person
      if ($(this).hasClass("peopleCheckIndex")) {

        // check the checked people
        var value = $(this).attr("value");
        var persToSearch = $(this).attr("persname");

        // name of mentioned person
        var persLabel = $(this).attr("data-label");

        // show the profiles containing at least an occurrence of the checked people
        $(".index-div[value!='" + value + "']").removeClass("filter").hide();
        $(".index-div[value='" + value + "']").addClass("filter").show();

        //$(".index-div.contain").show().addClass("filter");

        // IF AT LEAST 1 PERSON CHECKED
        // ADD ROLE
        // add a role for each person
        if ($(".peopleCheckIndex:checked").length > 0) {

          // HIDE THE PEOPLE RADIO
          $("#index-people").hide();
          $("span[data-target='#index-people']").removeClass("panel-title");

          // apply scroll
          reduceFilters();

          // show the role container
          $("#people-role-container").show();
          // clone the role box for each checked person
          //$("#add-pers-role-index").addClass("scroll-height").addClass("scroll");

          // SHOW THE BOX FOR EACH PERSON
          $(".people-role-box").hide();
          var orig = $("#add-pers-role-index").find(".people-role-box");
          var cloned = $(orig).clone().removeClass("people-role-box").prependTo("#add-pers-role-index").attr("value", "" + persLabel + "").addClass("specific-role-box").show();
          //$("#add-pers-role-index").addClass("scroll-height").addClass("scroll");
          $("#role_caption_name_index").text(persLabel);
          $(".len-pers-role:contains('" + persLabel + "') input").attr("person", persLabel);

          // fill in with specific checked person information
          $(".specific-role-box[value='" + persLabel + "'] #role_caption_name_index").text(persLabel);
          $(".specific-role-box[value='" + persLabel + "'] .role-check > input").attr("person", persToSearch);
          $(".specific-role-box[value='" + persLabel + "'] .role-check > input").attr("value", value);
          // name of mentioned person
          $(".specific-role-box[value='" + persLabel + "'] .role-check > input").attr("data-label", persLabel);

          // ROLES
          // search for the role in the index list
          $(".role-check > input").change(function(e) {
            var role = $(e.target).attr("role");
            // name of mentioned person
            var label = $(e.target).attr("data-label");

            // check
            if (this.checked) {

              // if only 1 person is checked
              if ($(".specific-role-box").length == 1) {

                // check on author
                if (role == "auth-role") {
                  // show the authors tags
                  $(".author_role_tag[data-label='" + label + "']").show();

                  // language setting
                  loadBundles($.cookie( 'language'),true);
                  // /

                  // show the cards containing the author
                  $(".index-div:has(.author-name[data-label='" + label + "'])").addClass("filter").show();

                  // open the citations cards
                  $(".background_orchid[data-label='" + label + "']").closest(".person-citations").addClass("in");

                  // hide mentioned person if unchecked
                  if ($("input[role='cited-role']").prop("checked") == false) {
                    $(".index-div:not(:has(.author_role_tag[data-label='" + label + "']))").removeClass("filter").hide();
                  }

                }

                // check on mentioned person
                if (role == "cited-role") {

                  // show the mentioned people
                  $(".cited_role_tag[data-label='" + label + "']").show();

                  // show the card containing the mentioned person
                  $(".index-div:has(.cited_role_tag[data-label='" + label + "'])").addClass("filter").show();

                  // hide author if unchecked
                  if ($("input[role='auth-role']").prop("checked") == false) {
                    $(".index-div:not(:has(.cited_role_tag[data-label='" + label + "']))").removeClass("filter").hide();
                  }

                }

              }


            } else {


              // uncheck author
              if (role == "auth-role") {

                // hide the authors tags
                $(".author_role_tag[data-label='" + label + "']").hide();

                // show the cards containing the author
                $(".index-div:has(.author-name[data-label='" + label + "'])").removeClass("filter").hide();

                // hide the citations cards
                $(".background_orchid[data-label='" + label + "']").closest(".person-citations").removeClass("in");

                // IF 0 CHECK ON ROLES
                if ($("input[role='cited-role']").prop("checked") == false) {
                  $(".index-div:has(.people-index-div[data-person='" + label + "'])").addClass("filter").show();
                }

              }

              // uncheck mentioned person
              if (role == "cited-role") {

                // hide the mentioned person tag
                $(".cited_role_tag[data-label='" + label + "']").hide();

                // hide the cards containing the mentioned person
                $(".index-div:has(.cited_role_tag[data-label='" + label + "'])").removeClass("filter").hide();

                // IF 0 CHECK ON ROLES
                if ($("input[role='auth-role']").prop("checked") == false) {
                  $(".index-div:has(.people-index-div[data-person='" + label + "'])").addClass("filter").show();
                }

              }


            }
          })

        }

      }
    }

  })

}

/////////////////////////
// INDICE DELLE OPERE //
///////////////////////

// search bar - works semantic index
function searchWorksBar() {
  $(".index-search-input").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".filter").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) != -1);
    })
  })
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// WORKS INDEX FACETS ////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function worksIndexFilters() {
  $("input[class=worksCheckIndex]").click(function() {

    // IF I CHECK A WORK
    if (this.checked) {

      // show the button to remove results
      $(".seeWorks").show();

      var work = $(this).attr("work");

      $(".works-index-div[value!='" + work + "']").removeClass("filter").hide();
      $(".works-index-div[value='" + work + "']").addClass("filter").addClass("contain");
      $(".contain").addClass("filter").show();

    // IF I UNCHECK A WORK
    } else {

      var work = $(this).attr("work");

      $(".works-index-div[value='" + work + "']").removeClass("filter").removeClass("contain").hide();

      // IF 0 PEOPLE CHECKED
      if ($(".worksCheckIndex:checked").length == 0) {
        // show all the profiles
        $(".works-index-div").removeClass("contain").addClass("filter").show();
        // hide the button to remove results
        $(".seeWorks").hide();
        // close work cards
        $(".work-card-collapse").removeClass("in");
      }

    }

  })
}

// hide all excerpts - remove filters
function showDivWorks() {
  $(".seeWorks").show();
  $(".seeWorks").click(function() {
    $(".shown-div").removeClass("shown-div");
    $(".shown-div-work").removeClass("shown-div-work");
    $(".shown-work").removeClass("shown-work"); // remove filtered works
    $(".works-index-div").show();
    $(".ex-butt").show();
    // remove all check
    $("input[type=checkbox]").each(function() {
      this.checked = false;
    })
    hideWorksRemove(); // remove button to remove all check
  })
}

// hide all excerpts
function hideWorksRemove() {
  $(".seeWorks").hide();
}


//////////////////////////
// single excerpt page ///
//////////////////////////

// expand the facsimile in the single excerpt page
function openFacEx() {
  if ($("#open-fac-ex").hasClass("col-md-8")) {
    $("#open-fac-ex").removeClass("col-md-8").addClass("col-md-12");
    $("#close_transcription_div").hide();
  } else {
    $("#open-fac-ex").removeClass("col-md-12").addClass("col-md-8");
    $("#close_transcription_div").show();
  }
}

// go to the specific excerpt in the transcription
function goToEx() {
  var pages = window.location.href.split("#")[1];
  var urlValues = window.location.href.split("/viewer")[1];
  var regEX = /#[0-9]+-[0-9]+/;
  if (regEX.test(urlValues)) {
    $(".hide-butt").html("<span class='superslim'>Vai alle pagine</span> " + pages);
    $(".hide-butt").show();
    $(".hide-butt").click(function() {
      var page = pages.split("-")[0];
      $("#transcriptionViewer").animate({
        scrollTop: $("span[data-n='" + page + "']").position().top
      }, 500);
      $(".hide-butt").hide();
    })
  }
}

// print page numbers
function printPageNum(pbindex,mapifyAndRdf) {
  // set an empty counter
  var count = '0'
  var counter = '<div class = "pageN">p. '+count+'</div>'
  $("#transcriptionViewer").prepend(counter);

  var dataN = $("span.pb[data-n]");
  for (var i = 0; i < dataN.length; i++) {
    var x = $(dataN[i]).attr("data-n");
    $(dataN[i]).html(x);
  };

  var object = pbindex,
    key;

  // change page number on scroll
  $("#transcriptionViewer").scroll(function(){
  	var scrollTop = $(window).scrollTop();
  	var windowHeight = $(window).height();
  	var first = false;
  	$("span.pb[data-n]").each( function() {
  		var offset = $(this).offset();
  		if (scrollTop <= offset.top && ($(this).height() + offset.top) < (scrollTop + windowHeight - 400) && first == false) {
        var num = $(this).data('n');
        $(".pageN").html("p. "+num);
  			first=true;
        // align facsimile
        for (key in object) {
            if (key.startsWith(num+'-') || key.endsWith('-'+num)) {
              var page = object[key];
              $( "#viewer" ).load('static/images_coords.html div:has(img[src="'+page+'"])', mapifyAndRdf );
              $('#pages > option:selected').removeAttr('selected');
              $("#pages option[value='"+page+"']").prop('selected','selected');
            }
        }


  		} else {
  			$(this).removeClass("first");
  			first=false;
  		}
  	});

  });


};


//////////////////////////
// data visualisation ///
/////////////////////////

// expand the treemap
function expandTreemap() {
  window.scrollTo(0, 120);
  $("#expand-treemap").click(function() {
    window.scrollTo(0, 0);
  })
}

////////////////////////
// side bar specifics //
////////////////////////

// hover on each section of the side bar
function styleSideSec() {
  // set the active section
  $(".active-side-section").addClass(($(".active-side-section").attr("color")));
  // hover the section
  $(".side-section").mouseenter(function() {
    var color = $(this).attr("color");
    $(this).addClass(color);
    $(this).find("h4").removeClass("text_grey").addClass("text_light");
  })
  // leave the mouse from sections
  $(".side-section").mouseleave(function() {
    var color = $(this).attr("color");
    $(this).removeClass(color);
    $(this).find("h4").removeClass("text_light").addClass("text_grey");
    // active section leave
    $(".active-side-section").addClass(($(".active-side-section").attr("color")));
    $(".active-side-section").find("h4").removeClass("text_grey").addClass("text_light");
  })
}

// get a side section active
function activeSideSec() {
  // get the clicked section active
  $(".side-section").click(function() {
    // undo over effects
    $(".active-side-section").find("h4").removeClass("text_light").addClass("text_grey");
    $(".active-side-section").removeClass($(".active-side-section").attr("color")).removeClass("active-side-section");
    // active effects
    $(this).addClass("active-side-section");
    // hide text not belonging to the active section
    var attrActive = $(".active-side-section").attr("id");
    $(".side-text-paragraph[id!='" + attrActive + "']").hide();
    // scroll the side text container to the top
    $(".side-text-paragraph[id='" + attrActive + "']").scrollTop(0);
    // /
    // then show it
    $(".side-text-paragraph[id='" + attrActive + "']").show();
    // /
  })
}

// go from side text list to the right document and active side section
function getDocActive() {
  // click on the list item
  $(".doc-li").click(function() {
    var color = $(this).attr("color");
    // undo over effects
    $(".active-side-section").find("h4").removeClass("text_light").addClass("text_grey");
    $(".active-side-section").removeClass($(".active-side-section").attr("color")).removeClass("active-side-section");
    // active effects
    $(".side-section[color='" + color + "']").addClass("active-side-section");
    $(".active-side-section").addClass(color);
    $(".active-side-section").find("h4").addClass("text_light");
    // hide text not belonging to the active section
    var attrActive = $(".active-side-section").attr("id");
    $(".side-text-paragraph[id!='" + attrActive + "']").hide();
    $(".side-text-paragraph[id='" + attrActive + "']").show();
  })
}

// reduce filters
function reduceFilters() {
  var facetsHeight = $(".panel_tool").height();
  $(".filters-scroll-applied").css("height", facetsHeight); // panel height
  $(".filters-scroll-applied").addClass("scroll-open-filters"); // facets scroll
}
