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
              $("#metadata_title").html($.i18n.prop('metadata_title'));
              $("#facets_title").html($.i18n.prop('facets_title'));
              $("#filters_people").html($.i18n.prop('filters_people'));
              $("#filters_people_role").html($.i18n.prop('filters_people_role'));
              $("#author_role").html($.i18n.prop('author_role'));
              $("#cited_role").html($.i18n.prop('cited_role'));
              $("#filters_excerpts").html($.i18n.prop('filters_excerpts'));
              $("#filters_works").html($.i18n.prop('filters_works'));
              $("#filters_people_role_caption_name").html($.i18n.prop('filters_people_role_caption_name'));
              $("#apply_facets_button").html($.i18n.prop('apply_facets_button'));
              $("#comment_val").html($.i18n.prop('comment_val'));
              $("#quotation_val").html($.i18n.prop('quotation_val'));
              $("#translation_val").html($.i18n.prop('translation_val'));
              $("#comment_checkbox").html($.i18n.prop('comment_checkbox'));
              $("#quotation_checkbox").html($.i18n.prop('quotation_checkbox'));
              $("#translation_checkbox").html($.i18n.prop('translation_checkbox'));
              $("#results_title_list").html($.i18n.prop('results_title_list'));
              $("#clear_res").html($.i18n.prop('clear_res'));
              $("#apply_facets_edition").html($.i18n.prop('apply_facets_edition'));
              $("#openSans").html($.i18n.prop('openSans'));
              $("#size_20").html($.i18n.prop('size_20'));
              $("#dark_page").html($.i18n.prop('dark_page'));
              $("#sepia_page").html($.i18n.prop('sepia_page'));
              $("#white_page").html($.i18n.prop('white_page'));
              $("#reset_button").html($.i18n.prop('reset_button'));
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
              // introduction
              $("#page_title").html($.i18n.prop('page_title'));
              $("#transcription_title").html($.i18n.prop('transcription_title'));
              $("#search_string").html($.i18n.prop('search_string'));
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
              $(".trans_comment").html($.i18n.prop('trans_comment'));
              $(".trans_mentioning").html($.i18n.prop('trans_mentioning'));
              $(".n_quot").html($.i18n.prop('n_quot'));
              $(".trans_cit").html($.i18n.prop('trans_cit'));
              $(".trans_tra").html($.i18n.prop('trans_tra'));
              $(".comm_on").html($.i18n.prop('comm_on'));
              $(".quot_of").html($.i18n.prop('quot_of'));
              $(".tra_of").html($.i18n.prop('tra_of'));
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
              // other tools
              $(".other_tools_1").html($.i18n.prop('other_tools_1'));
              $("#other_tools_2").html($.i18n.prop('other_tools_2'));
              $("#other_tools_3").html($.i18n.prop('other_tools_3'));
              // specifications semantic indexes
              $(".semantic_ind_1").html($.i18n.prop('semantic_ind_1'));
              $("#semantic_ind_2").html($.i18n.prop('semantic_ind_2'));
              $("#semantic_ind_3").html($.i18n.prop('semantic_ind_3'));
              $("#semantic_ind_4").html($.i18n.prop('semantic_ind_4'));
              // list mode
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
              // people role box
              $(".change_role_cap").html($.i18n.prop('change_role_cap'));
              if (gotohash && location.hash) {
                        var l=location.hash; location.hash=''; location.hash=l;};
            }
        });
};

jQuery(document).ready(function($) {
  // get the current year footer
  //currentYear();
  // window height
  windowHeight();
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
  getDocActive()
  // loader
  $(".se-pre-con").fadeOut("slow");

  // i18n
  $('#lang').find('a').click(function(e){
        var lang = this.href.slice(-2);
        e.preventDefault();
        $.cookie( 'language', lang, { expires: 7, path: '/' } );
        loadBundles(lang,false);
    });
    loadBundles($.cookie( 'language'),true);

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
      $('#pages > option:selected').removeAttr('selected').next('option').attr('selected', 'selected');
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
  peopleIndexFacets();
  // search bar in works semantic index
  searchWorksBar();
  // works semantic index
  worksIndexFacets();
  // transcription-facsimile linking scroll
  tieScroll();
  // expand the facsimile in the specific excerpt page
  openFacEx();
});

// get the current year in footer
/*function currentYear() {
  var d = new Date();
  var n = d.getFullYear();
  document.getElementById("current-year").innerHTML = n;
}*/

// window height for setting the panels height
function windowHeight() {
  var facetsHeight = $(".container_fluid_facets_page_panel").height() - 5;
  $("#facets_panel_box").css("height", facetsHeight);
  $(window).resize(function(){
    $("#facets_panel_box").css("height", facetsHeight);
  })
  $("#page_panel_tool").css("height", facetsHeight);
  $(window).resize(function(){
    $("#page_panel_tool").css("height", facetsHeight);
  })
}

// active item in navbar
function navItemActive() {
  if ($("#intro_header_title").text() == "Introduction") {
    $("#nav_2").addClass("text_red");
  } else if ($("#digital_edition_header_title").text() == "Digital Edition") {
    $("#nav_3").addClass("text_red");
  } else if ($("#semantic_indexes_header_title").text() == "Semantic Indexes") {
    $("#nav_4").addClass("text_red");
  } else if ($("#works_indexes_header_title").text() == "Works Semantic Indexes") {
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

// change placeholders in search bars
function specificEng() {
  // digital edition search bar
  $(".change-placeholder-edition").attr("placeholder", "Insert text...");
  // digital edition search bar
  $(".change-placeholder-indexes").attr("placeholder", "Search for a person, a work...");
}

function specificIt() {
  // digital edition search bar
  $(".change-placeholder-edition").attr("placeholder", "Inserisci testo...");
  // digital edition search bar
  $(".change-placeholder-indexes").attr("placeholder", "Cerca una persona, un'opera...");
}

////////////////////////
// EDIZIONE DIGITALE //
//////////////////////

// transcription + facsimile page panel - digital edition
function openPage() {
    if ($("#page_panel_tool").hasClass("col-md-10")) {
      $("#facets_panel_box").css("display", "none");
      $("#page_panel_tool").removeClass("col-md-10").addClass("col-md-12");
      $(".nested_panel_tool").removeClass("nested_panel_tool_plus"); // add
    } else if ($("#page_panel_tool").hasClass("col-md-11")) {
      $("#facets_panel_box").css("display", "none");
      $("#page_panel_tool").removeClass("col-md-11").addClass("col-md-12");
      $(".nested_panel_tool").removeClass("nested_panel_tool_plus"); // add
    } else {
      $("#facets_panel_box").css("display", "block");
      $("#page_panel_tool").removeClass("col-md-12").addClass("col-md-10");
      $(".nested_panel_tool").removeClass("nested_panel_tool_plus"); // add
    }
}

// transcription + facsimile page panel - semantic indexes
function openPagePeople() {
  if ($(".page_panel_tool_people").hasClass("col-md-10")) {
    $(".facets_panel_box_people").css("display", "none");
    $(".page_panel_tool_people").removeClass("col-md-10").addClass("col-md-12");
  } else if ($(".page_panel_tool_people").hasClass("col-md-11")) {
    $(".facets_panel_box_people").css("display", "none");
    $(".page_panel_tool_people").removeClass("col-md-11").addClass("col-md-12");
  } else {
    $(".facets_panel_box_people").css("display", "block");
    $(".page_panel_tool_people").removeClass("col-md-12").addClass("col-md-10");
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
    } else {
      $("#facets_panel_box").removeClass("col-md-1");
      $("#facets_panel_box").addClass("col-md-2");
      $("#page_panel_tool").removeClass("col-md-11");
      $("#page_panel_tool").addClass("col-md-10");
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
    } else {
      $("#facets_panel_box_people").removeClass("col-md-1");
      $("#facets_panel_box_people").addClass("col-md-2");
      $("#facets_panel_box_people").removeClass("specific-height-sx");
      $("#facets_panel_box_people").addClass("specific-height");
      $("#page_panel_tool_people").removeClass("col-md-11");
      $("#page_panel_tool_people").addClass("col-md-10");
    }
  })
}

// results panel - digital edition
function closeResults() {
  $(".move-facets").toggleClass("move-facets-reduced");
  $("#print-results").toggleClass("no-display");
  $("#edition-search-tool").toggleClass("no-display");
}

// clear results
function clearRes() {
  $("#clear_res").click(function() {
    location.reload();
  })
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
    } else if ($("#close_transcription_div").hasClass("col-md-1") && $("close_facsimile_div").hasClass("col-md-11")) {
      $("#close_transcription_div").removeClass("col-md-1");
      $("#close_transcription_div").addClass("col-md-4");
      $("#close_facsimile_div").removeClass("col-md-11");
      $("#close_facsimile_div").addClass("col-md-8");
      $(".nested_panel_tool").removeClass("nested_panel_tool_plus");
    } else {
      $("#close_transcription_div").removeClass("col-md-1");
      $("#close_transcription_div").addClass("col-md-4");
      $("#close_facsimile_div").removeClass("col-md-1");
      $("#close_facsimile_div").addClass("col-md-8");
      $("#text-transcription").css("display", "block");
      $("#viewerContainer").css("display", "block");
      $(".nested_panel_tool").removeClass("nested_panel_tool_plus");
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
    } else if ($("#close_facsimile_div").hasClass("col-md-1") && $("close_transcription_div").hasClass("col-md-11")) {
      $("#close_facsimile_div").removeClass("col-md-1");
      $("#close_facsimile_div").addClass("col-md-8");
      $("#close_transcription_div").removeClass("col-md-11");
      $("#close_transcription_div").addClass("col-md-4");
    } else {
      $("#close_transcription_div").removeClass("col-md-1");
      $("#close_transcription_div").addClass("col-md-4");
      $("#close_facsimile_div").removeClass("col-md-1");
      $("#close_facsimile_div").addClass("col-md-8");
      $("#text-transcription").css("display", "block");
      $("#viewerContainer").css("display", "block");
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
  jQuery("#change_style_button").click(function(){
    jQuery(".toggle_tooltip_style").slideToggle("slow");
  });
}

// modify font style
function changeFontStyle() {
  $(".font").change(function () {
    $(".font option:selected").each(function() {
      if ($(".font option:selected").text() === "Arial") {
        $("#transcriptionViewer").addClass("arial-font");
        $("#transcriptionViewer").removeClass("times-font");
        $("#transcriptionViewer").removeClass("verdana-font");
      } else if ($(".font option:selected").text() === "Times New Roman") {
        $("#transcriptionViewer").removeClass("arial-font");
        $("#transcriptionViewer").addClass("times-font");
        $("#transcriptionViewer").removeClass("verdana-font");
      } else if (jQuery(".font option:selected").text() === "Verdana") {
        $("#transcriptionViewer").removeClass("arial-font");
        $("#transcriptionViewer").removeClass("times-font");
        $("#transcriptionViewer").addClass("verdana-font");
      } else {
        $("#transcriptionViewer").removeClass("arial-font");
        $("#transcriptionViewer").removeClass("times-font");
        $("#transcriptionViewer").removeClass("verdana-font");
      }
    })
  })
}

// modify font dimensions
function changeFontSize() {
  $(".font_size").change(function () {
    $(".font_size option:selected").each(function() {
      if ($(".font_size option:selected").text() === "18") {
        $("#transcriptionViewer").css("font-size", "18");
        $("blockquote").css("font-size", "18");
      } else if ($(".font_size option:selected").text() === "22") {
        $("#transcriptionViewer").css("font-size", "22");
        $("blockquote").css("font-size", "22");
      } else if ($(".font_size option:selected").text() === "24") {
        $("#transcriptionViewer").css("font-size", "24");
        $("blockquote").css("font-size", "24");
      } else if ($(".font_size option:selected").text() === "26") {
        $("#transcriptionViewer").css("font-size", "26");
        $("blockquote").css("font-size", "26");
      } else if ($(".font_size option:selected").text() === "28") {
        $("#transcriptionViewer").css("font-size", "28");
        $("blockquote").css("font-size", "28");
      } else if ($(".font_size option:selected").text() === "30") {
        $("#transcriptionViewer").css("font-size", "30");
        $("blockquote").css("font-size", "30");
      } else {
        $("#transcriptionViewer").css("font-size", "20");
        $("blockquote").css("font-size", "20");
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
    }, 2000);
    // /
  })
  $("#prev-string").click(function() {
    if (indexOccurrences >= 1){
      indexOccurrences--;
      var temp = $(".p_"+indexOccurrences);
      $("#transcriptionViewer").animate({
        scrollTop: $(temp).position().top
      }, 2000);
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

// DIGITAL EDITION FACETS
function editionFacets() {
  $("input[type=checkbox]").change(function(e) {
    var inputTxt = $(e.target).attr("id");
    var idQuotStart = "quot-";
    var quots = $("*[id*=" + idQuotStart + "]:visible");
    var idName;
    var persLab;
    var idPers;
    var nameWork;
    var captWork;
    var n = 0;
    // specific id to each person to be used to scroll the text
    $(".peopleCheck").each(function() {
      idName = $(this).attr("id");
      persLab = $("label[for='" + idName + "']").text();
      $("#transcriptionViewer span:contains('" + persLab + "')").each(function() {
        $(this).attr("id", idName + "-" + n);
        n++;
      })
    })
    if ($("#" + inputTxt).prop("checked") == true) {
      // people
      if ($(this).hasClass("peopleCheck")) {
        idName = $(this).attr("id");
        persLab = $("label[for='" + idName + "']").text();
        idPers = idName + "_" + n;
        $("#transcriptionViewer span:contains('" + persLab + "')").addClass("background_blue").addClass("highRes");
        $(".tooltiptext").removeClass("highRes");
        // people role - show the box for each person
        $(".people-role-box").clone().removeClass("people-role-box").prependTo("#add-pers-role").attr("id", "" + idPers + "").addClass("len-pers-role");
        $("#add-pers-role").addClass("scroll-height").addClass("scroll");
        // solve the bug by which personal names are translated in "Search for a person"
        $("#role_caption_name_index").removeClass("change_role_cap");
        var persCapt = "#" + idPers + " .filters_people_role_caption";
        var persBack = "#" + idPers + " .filters_people_role_button";
        var persCheck = "#" + idPers + " .role-check";
        $(persCapt).text(persLab);
        $(persBack).css("background-color", "#CCEEF5");
        $(persCheck).show();
        // assign an id to a person with author role in the text
        var persInp = "#" + idPers + " .role-check .input-auth-check";
        $(persInp).attr("id", idName + "-auth");
        $("#" + idName + "-auth").click(function() {
          $(".author:contains('" + idName + "')").toggleClass("background_orchid");
        })
        // assign an id to a person with mentioned person role in the text
        var persCited = "#" + idPers + " .role-check .input-cited-check";
        $(persCited).attr("id", idName + "-cited");
        $("#" + idName + "-cited").click(function() {
          $(".highRes:not('.author'):contains('" + idName + "')").toggleClass("background_yellowgreen");
        })
      }
      // comments
      if ($("#comment").prop("checked") == true) {
        $("[data-type='comment']").css("background-color", "#C4D4CA").addClass("highRes");
      }
      // translations
      if ($("#translation").prop("checked") == true) {
        $("[data-type='translation']").css("background-color", "#F0E29C").addClass("highRes");
      }
      // quots
      if ($("#quotation").prop("checked") == true) {
        quots.css("background-color", "#F4B49C").addClass("highRes");
      }
      // works
      if ($(this).hasClass("workCheck")) {
        var excerpts = $(this).attr("data-excerpts").split(" ");
        nameWork = $(this).next().text();
        titlCaptWork = $("#filters_works").text();
        if (titlCaptWork == "Opere") {
          titlCaptWork = "Opera";
        } else {
          titlCaptWork = "Work";
        }
        for (var i = 0; i < excerpts.length; i++) {
          captWork = "<div class='provWork'><button class='filters_icon filter_background_pink button-check'><i class='glyphicon glyphicon-book icon-check'> </i></button><span class='labelInline'> " + titlCaptWork + ":</span> <span class='filters_category_title'>" + nameWork + "</br></span></div>";
          $("*[data-source='#" + excerpts[i] + "']").prepend(captWork).addClass("highRes");
          var exVal = $("*[data-source='#" + excerpts[i] + "']").attr("id"); // associate a color to each type of excerpt
          if (exVal.indexOf("comm-") != -1) {
            $("*[data-source='#" + excerpts[i] + "']").css("background-color", "rgb(196, 212, 202)");
          } else if (exVal.indexOf("quot-") != -1) {
            $("*[data-source='#" + excerpts[i] + "']").css("background-color", "rgb(244, 180, 156)");
          } else {
            $("*[data-source='#" + excerpts[i] + "']").css("background-color", "rgb(240, 226, 156)");
          }
        }
      }
      var idRes;
      var res = $("#transcriptionViewer .highRes");
      if ($("input").hasClass("highRes")) {
        $(this).removeClass("highRes");
      }
      // list of results
      for (var i = 0; i < res.length; i++) {
        idRes = $(res[i]).prop("id");
        // print person name in results list
        var idPers = idRes.split("-")[0]; // id of each person
        if ($("#" + idPers).hasClass("peopleCheck") == true) {
          $("#list-results").append("<li value='" + idRes + "'>&rarr; " + idRes.split("-")[0] + "</li>");
          // exceptions - id that does not correspont to person name
          $("li[value='" + idRes + "']:contains('De')").text("De Sarlo");
          $("li[value='" + idRes + "']:contains('Förster')").text("Elisabeth Förster Nietzsche");
          // /
        } else if ($("#" + idRes).attr("data-source")) {
          // excerpt code
          var codeEx = idRes.split("quot-")[1]
          // print citations and works
          // works
          if ($("#" + idRes + " .provWork .filters_category_title").length > 0) {
            // quots
            if (idRes.indexOf("quot-") != -1) {
              if ($("#filters_people").text() == "Persone") {
                $("#list-results").append("<li value='" + idRes + "' class='quot link pointer underline'><span class='n_quot' value='" + idRes + "'>cit-</span>" + codeEx + " - " + $("#" + idRes + " .provWork .filters_category_title").text() + "</span></li>");
              }
              if ($("#filters_people").text() == "People") {
                $("#list-results").append("<li value='" + idRes + "' class='quot link pointer underline'><span class='n_quot' value='" + idRes + "'>quot-</span>" + codeEx + " - " + $("#" + idRes + " .provWork .filters_category_title").text() + "</span></li>");
              }
            } else {
              // other types of excerpts
              $("#list-results").append("<li value='" + idRes + "' class='quot link pointer underline'>" + idRes + " - " + $("#" + idRes + " .provWork .filters_category_title").text() + "</span></li>");
            }

          } else {
            // quots
            // quot- > cit- excerpt code translation
            if (idRes.indexOf("quot-") != -1) {
              if ($("#filters_people").text() == "Persone") {
                $("#list-results").append("<li value='" + idRes + "' class='quot link pointer'><span class='n_quot' value='" + idRes + "'>cit-</span>" + codeEx + "</li>"); // ADD CIT
              }
              if ($("#filters_people").text() == "People") {
                $("#list-results").append("<li value='" + idRes + "' class='quot link pointer'><span class='n_quot' value='" + idRes + "'>quot-</span>" + codeEx + "</li>"); // ADD CIT
              }
            }
            if (idRes.indexOf("tra-") != -1) {
              // other types of excerpts
              $("#list-results").append("<li value='" + idRes + "' class='quot link pointer'>" + idRes +"</li>");
            }
            if (idRes.indexOf("comm-") != -1) {
              // other types of excerpts
              $("#list-results").append("<li value='" + idRes + "' class='quot link pointer'>" + idRes +"</li>");
            }
          }
        } else {
          // print any other result
          $("#list-results").append("<li value='" + idRes + "'>" + idRes + "</li>");
        }
        //
        // solve a bug by which if Nietzsche is checked some Wagner results appear
        if (idName === "Nietzsche") {
          if ($("#Wagner").prop("checked") == false) {
            $("#list-results li:contains('Wagner')").remove();
          }
        }
        // /
        // remove duplicates in the list of results
        if ($("#list-results li[value='" + idRes + "']").length > 1) {
          $("#list-results li[value='" + idRes + "']").first().remove();
        }
        //
        // add link to each li in list
        $("#list-results li[value='" + idRes + "']").addClass(idRes.split("-")[0]).addClass("link").addClass("pointer");
        //
      }
      // n of results
      $("#n-results").text($(".highRes").length);
      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////ELSE///////////////////////////////////////////////////////////////
      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    } else {
      // people
      if ($(this).hasClass("peopleCheck")) {
        idName = $(this).attr("id");
        // solve a bug by which if Nietzsche is checked some Wagner results appear
        if (idName === "Nietzsche") {
          if ($("#Wagner").prop("checked") == false) {
            $("#list-results li:contains('Wagner')").remove();
          }
        }
        // / people role box
        $("p:contains('" + idName + "')").removeClass("background_blue").removeClass("highRes");
        $("span:contains('" + idName + "')").removeClass("background_blue").removeClass("highRes");
        // remove author role
        $("p:contains('" + idName + "')").removeClass("background_orchid");
        $("span:contains('" + idName + "')").removeClass("background_orchid");
        // /
        // remove mentioned person role
        $("p:contains('" + idName + "')").removeClass("background_yellowgreen");
        $("span:contains('" + idName + "')").removeClass("background_yellowgreen");
        // /
        // remove people role box
        idPers = idName + "_" + n;
        $("#" + idPers).remove();
        if ($(".len-pers-role").length == 0) {
          $("#add-pers-role").removeClass("scroll-height").removeClass("scroll");
        }
        if ($("#filters_people_role").text() == "People role") {
          $(persCapt).text("Searched person");
        } else {
          $(persCapt).text("Persona cercata");
        }
        // remove background from people cited in text
        $(persBack).css("background-color", "#E6E6E6");
        // remove code title regarding people
        $("#title-id").text("");
        // remove a single person result from list of results
        $("#list-results li:contains('" + idName + "')").remove();
      }
      // /
      // comments
      if ($("#comment").prop("checked") == false) {
        $("[data-type='comment']").css("background-color", "rgba(244, 180, 156, 0)").removeClass("highRes");
        $("#title-id").text("");
        $(".comm").remove();
      }
      // translations
      if ($("#translation").prop("checked") == false) {
        $("[data-type='translation']").css("background-color", "rgba(244, 180, 156, 0)").removeClass("highRes");
        $("#title-id").text("");
        $(".tra").remove();
        // + works
        if ($(":checkbox[class=workCheck]:checked").length > 0) {
          $(":checkbox[class=workCheck]:checked").each(function() {
            var excerpts = $(this).attr("data-excerpts").split(" ");
            for (var i = 0; i < excerpts.length; i++) {
              // id of each highlight excerpt
              var idEx = $("*[data-source='#" + excerpts[i] + "']").attr("id");
              // give color to translation excerpts
              if (idEx.indexOf("tra-") != -1) {
                $("#" + idEx).css("background-color", "rgb(240, 226, 156)");
              }
              if (idEx.indexOf("quot-") != -1) {
                $("#" + idEx).css("background-color", "rgb(244, 180, 156)");
              }
              if (idEx.indexOf("comm-") != -1) {
                $("#" + idEx).css("background-color", "rgb(196, 212, 202)");
              }
              // /
              $("*[data-source='#" + excerpts[i] + "']").prepend(captWork).addClass("highRes");
            }
          })
          // list results
          getRes();
          // /
        }
        // /
      }
      // quots
      if ($("#quotation").prop("checked") == false) {
        quots.css("background-color", "rgba(244, 180, 156, 0)").removeClass("highRes");
        $("#title-id").text("");
        $(".quot").remove();
        if ($(":checkbox[class=workCheck]:checked").length > 0) {
          $(":checkbox[class=workCheck]:checked").each(function() {
            var excerpts = $(this).attr("data-excerpts").split(" ");
            for (var i = 0; i < excerpts.length; i++) {
              // id of each highlight excerpts
              var idEx = $("*[data-source='#" + excerpts[i] + "']").attr("id");
              // give color to translation excerpts
              if (idEx.indexOf("tra-") != -1) {
                $("#" + idEx).css("background-color", "rgb(240, 226, 156)");
              }
              if (idEx.indexOf("quot-") != -1) {
                $("#" + idEx).css("background-color", "rgb(244, 180, 156)");
              }
              if (idEx.indexOf("comm-") != -1) {
                $("#" + idEx).css("background-color", "rgb(196, 212, 202)");
              }
              // /
              $("*[data-source='#" + excerpts[i] + "']").prepend(captWork).addClass("highRes");
            }
          })
          // list results
          getRes();
          // /
        }
        // 0 works
        if ($(":checkbox[class=workCheck]:checked").length == 0) {
          getRes();
        }
        // /
      }
      // works
      if ($(this).hasClass("workCheck")) {
        nameWork = $(this).next().text();
        var excerpts = $(this).attr("data-excerpts").split(" ");
        for (var i = 0; i < excerpts.length; i++) {
          $(".provWork:contains('" + nameWork + "')").parent().removeAttr("background_red").removeClass("highRes");
          $(".provWork:contains('" + nameWork + "')").remove();
          $(".provWork:not(:contains('" + nameWork + "'))").parent().css("background-color", "#F4B49C").addClass("highRes");
          var idRes;
          var res = $("#transcriptionViewer .highRes");
          if ($("input").hasClass("highRes")) {
            $(this).removeClass("highRes");
          }
          //
        }
        // 0 works, 0 check
        if ($(".workCheck:checked").length == 0) {
          if ($(".peopleCheck:checked").length == 0) {
            if ($("#comment:checked").length == 0) {
              if ($("#quotation:checked").length == 0) {
                if ($("#translation:checked").length == 0) {
                  countChecked();
                }
              }
            }
          }
          // /
          // 0 works, + check
          if ($(":checked").length > 0) {
            getRes();
          }
          // /
        }
        // + works, + check
        if ($(".workCheck:checked").length > 0) {
          getRes();
        }
        // /
      }
      // /
      $("." + inputTxt).remove();
      $("#n-results").text($(".highRes").length);
    }
  })
  clearRes();
}

// create list of results
function getRes() {
  // list of results
  var highRes = $(".highRes");
  var idRes;
  for (var i = 0; i < highRes.length; i++) {
    idRes = $(highRes[i]).prop("id");
    // modify li depending on the id input
    if (idRes.indexOf("comm-") != -1) {
      if ($("#" + idRes + " .provWork .filters_category_title").text() == "") {
        $("#list-results").append("<li value='" + idRes + "' class='quot link pointer'>" + idRes + "</li>");
      } else {
        $("#list-results").append("<li value='" + idRes + "' class='quot link pointer underline'>" + idRes + " - " + $("#" + idRes + " .provWork .filters_category_title").text() + "</li>");
      }
    } else if (idRes.indexOf("quot-") != -1) {
      // excerpt code
      var codeEx = idRes.split("quot-")[1]
      if ($("#" + idRes + " .provWork .filters_category_title").text() == "") {
        // quot- > cit- excerpt code translation
        // quots
        if ($("#filters_people").text() == "Persone") {
          $("#list-results").append("<li value='" + idRes + "' class='quot link pointer'><span class='n_quot' value='" + idRes + "'>cit-</span>" + codeEx + "</li>"); // ADD CIT
        }
        if ($("#filters_people").text() == "People") {
          $("#list-results").append("<li value='" + idRes + "' class='quot link pointer'><span class='n_quot' value='" + idRes + "'>quot-</span>" + codeEx + "</li>"); // ADD CIT
        }
      } else {
        // quot- > cit- excerpt code translation
        // works
        if ($("#filters_people").text() == "Persone") {
          $("#list-results").append("<li value='" + idRes + "' class='quot link pointer underline'><span class='n_quot' value='" + idRes + "'>cit-</span>" + codeEx + " - " + $("#" + idRes + " .provWork .filters_category_title").text() + "</span></li>");
        }
        if ($("#filters_people").text() == "People") {
          $("#list-results").append("<li value='" + idRes + "' class='quot link pointer underline'><span class='n_quot' value='" + idRes + "'>quot-</span>" + codeEx + " - " + $("#" + idRes + " .provWork .filters_category_title").text() + "</span></li>");
        }
      }
    } else if (idRes.indexOf("tra-") != -1) {
      if ($("#" + idRes + " .provWork .filters_category_title").text() == "") {
        $("#list-results").append("<li value='" + idRes + "' class='quot link pointer'>" + idRes + "</li>");
      } else {
        $("#list-results").append("<li value='" + idRes + "' class='quot link pointer underline'>" + idRes + " - " + $("#" + idRes + " .provWork .filters_category_title").text() + "</li>");
      }
    }
    // remove duplicates
    if ($("#list-results li[value='" + idRes + "']").length > 1) {
      $("#list-results li[value='" + idRes + "']").first().remove();
    }
  }
  // /
}

// excerpt codes print and scroll to corresponding id
function printCode() {
  $("#list-results").click(function(e) {
    var valEx = $(e.target).attr("value");
    var title = $("#list-results li[value='" + valEx + "']").text();
    var titleN = $("#list-results li[value='" + valEx + "']").index() + 1;
    $("#title-id").text(titleN + ". " + title);
    $("#transcriptionViewer").animate({
      scrollTop: $("#" + valEx).position().top
    }, 2000);
  });
}

// results hide and show
function countChecked() {
  var n = $("input:checked").length;
  if (n > 0) {
    //$("#moreResultsButton").show();
    $("#results-container").show();
    $("#print-results").removeClass("no-display");
    $(".move-facets").addClass("move-facets-reduced");
  } else {
    $("#results-container").hide();
    $(".move-facets").removeClass("move-facets-reduced");
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
  editionFacets();
  countChecked();
  $("input[type=checkbox]").on("change", countChecked);
  printCode();
  searchRes();
}

// trascription-facsimile linking from selector
function tieTrasFac() {
  var pageN = $("#pages option:selected").text().split("-")[0];
  var pageToShow = $("[data-n=" + pageN + "]")
  $(".scroll_transcription").animate({
    scrollTop: $(pageToShow).position().top
  }, 2000);
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


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PEOPLE INDEX FACETS ///////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function peopleIndexFacets() {
  // add
  $("input").change(function(e) {
    if ($(":checkbox:checked").length > 0) {
      showEx();
    }
  })
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // PERSONE /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  $("input[class=peopleCheckIndex]").change(function(e) {
    var checkVal = $(e.target).val();
    if ($(e.target).prop("checked") == true) {
      $(".index-div[value!='" + checkVal + "']").hide().removeClass("filter");
      $(".index-div[value='" + checkVal + "']").addClass("contain");
      $(".index-div[value!='" + checkVal + "']:contains('" + checkVal + "')").addClass("contain");
      $(".person-who-cites").show();
      // people role
      $("#add-pers-role-index").addClass("scroll-height").addClass("scroll");
      $(".people-role-box").clone().removeClass("people-role-box").prependTo("#add-pers-role-index").attr("value", checkVal).addClass("specific-role-box").addClass("contain");
      // solve a bug for which a personal name is translated in search for a person
      $("#role_caption_name_index").removeClass("change_role_cap");
      // /
      $(".specific-role-box[value='" + checkVal + "'] .filters_people_role_button").css("background-color", "#CCEEF5");
      $(".specific-role-box[value='" + checkVal + "'] .filters_people_role_caption").text(checkVal);
      $(".specific-role-box[value='" + checkVal + "'] .role-check").show();
      $(".specific-role-box[value='" + checkVal + "'] .role-check .input-auth-check").attr("value", checkVal);
      $(".filters-resize-plus").removeClass("filters-resize-plus").addClass("filters-resize-minus"); // resize dell'altezza delle faccette delle persone
      // /
      // author role
      $("input[role=auth-role]").change(function(e) {
        if ($(e.target).prop("checked") == true) {
          var authRoleVal = $(this).val();
          if ($(".input-auth-check[value='" + authRoleVal + "']").attr("role") === "auth-role") {
            var contAuth = $(".author-name:contains('" + authRoleVal + "')");
            for (var i = 0; i < contAuth.length; i++) {
              $(".author-name:contains('" + authRoleVal + "')").addClass("background_orchid_padd");
            }
            if ($(".author-name:contains('" + authRoleVal + "')").length == 0) {
              if ($("#en-butt").hasClass("active")) {
                alert("There is no " + authRoleVal + " with author role.")
              } else {
                alert(authRoleVal + " non riveste mai il ruolo di autore.")
              }
            }
          }
        } else {
          var authRoleVal = $(this).val();
          var contAuth = $(".author-name:contains('" + authRoleVal + "')");
          for (var i = 0; i < contAuth.length; i++) {
            $(".author-name:contains('" + authRoleVal + "')").removeClass("background_orchid_padd");
          }
        }
      })
      // /
      // mentioned person
      $("input[role=cited-role]").change(function(e) {
        if ($(e.target).prop("checked") == true) {
          var citedRoleVal = $(this).val();
          var contCited = $(".cited-pers:contains('" + citedRoleVal + "')");
          for (var i = 0; i < contCited.length; i++) {
            $(".cited-pers:contains('" + citedRoleVal + "')").addClass("background_yellowgreen");
          }
          if ($(".cited-pers:contains('" + citedRoleVal + "')").length == 0) {
            if ($("#en-butt").hasClass("active")) {
              alert("There is no " + citedRoleVal + " with cited person role.")
            } else {
              alert(citedRoleVal + " non riveste mai il ruolo di persona citata.")
            }
          }
        } else {
          var citedRoleVal = $(this).val();
          var contAuth = $(".cited-pers:contains('" + citedRoleVal + "')");
          for (var i = 0; i < contAuth.length; i++) {
            $(".cited-pers:contains('" + citedRoleVal + "')").removeClass("background_yellowgreen");
          }
        }
      })
      // /
      $(".contain").show().addClass("filter");
      $(".specific-role-box").removeClass("filter"); // people role boxes never have to have filter class
    } else {
      $(".specific-role-box").removeClass("filter"); // people role boxes never have to have filter class
      $(".contain[value='" + checkVal + "']").removeClass("contain").hide().removeClass("filter");
      $(".contain[value!='" + checkVal + "']:contains('" + checkVal + "')").removeClass("contain").hide().removeClass("filter");
      // + works
      $(".slideWork:contains('" + checkVal + "')").removeClass("slideWork");
      // /
      // people role box
      $(".specific-role-box[value='" + checkVal + "']").removeClass("contain").hide();
      if ($(":checkbox[class=peopleCheckIndex]:checked").length == 0) {
        $("#add-pers-role-index").removeClass("scroll-height").removeClass("scroll");
        $(".filters-resize-minus").removeClass("filters-resize-minus").addClass("filters-resize-plus"); // facets resize
      }
      // /
      // remove people role
      if ($(":checkbox[class=input-auth-check]:checked").length > 0) {
        // remove author role
        var orchtoHide = $(".background_orchid_padd:contains('" + checkVal + "')");
        for (var i = 0; i < orchtoHide.length; i++) {
          var orchToFind = $(orchtoHide[i]).attr("value");
          $(".index-div[value='" + orchToFind + "']").hide().removeClass("filter");
          $(".background_orchid_padd:contains('" + checkVal + "')").removeClass("background_orchid_padd");
        }
        // remove mentioned person role
        var bluetoHide = $(".background_blue_padd:contains('" + checkVal + "')");
        for (var i = 0; i < bluetoHide.length; i++) {
          var blueToFind = $(bluetoHide[i]).attr("value");
          $(".index-div[value='" + blueToFind + "']").hide().removeClass("filter");
          $(".background_blue_padd:contains('" + checkVal + "')").removeClass("background_blue_padd");
        }
        // + people role, 0 people
        if ($(":checkbox[class=peopleCheckIndex]:checked").length == 0) {
          $(".index-div").show().addClass("filter");
        }
      }
      // /
      // 0 pers, + check
      if ($(":checkbox[class=peopleCheckIndex]:checked").length == 0) {
        var yetCheck = $(":checkbox:checked");
        $(".index-div").show();
        $("hr").show();
      }
      // /
    }
    // 0 check
    if ($(":checkbox:checked").length == 0) {
      // hide button to remove check
      hideEx();
      // /
      $(".index-div").show().addClass("filter");
      $("#add-pers-role-index").removeClass("scroll-height").removeClass("scroll");
      $(".checkButt").show();
    }
    // /
  })
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // EXCERPTS ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  $("input[class=exCheckIndex]").change(function(e) {
     // works from people
     $(".slideWork").removeClass("slideWork");
     // /
    if ($(e.target).prop("checked") == true) {
      var valExInd = $(e.target).val();
      $(".index-div .checkButt[value!='" + valExInd + "']").addClass("exHidden").hide();
      // + types of excerpts, 0 works
      var checkedPersVal = $(":checkbox:checked");
      if ($(":checkbox[class=worksPersIndex]:checked").length == 0) {
        for (var i = 0; i < checkedPersVal.length; i++) {
          var checkedPersValFind = $(checkedPersVal[i]).attr("value");
          $(".exHidden[value='" + checkedPersValFind + "']").show();
        }
      }
      // /
      // + works
      if ($(":checkbox[class=worksPersIndex]:checked").length > 0) {
        var checkedEx = $(":checkbox[class=exCheckIndex]:checked");
        for (var i = 0; i < checkedEx.length; i++) {
          var singleEx = $(checkedEx[i]).attr("value");
          $(".forEx:contains('" + singleEx + "')").addClass("show");
          $(".show:contains('" + singleEx + "')").show();
          $(".forEx:not(:contains('" + singleEx + "'))").hide();
        }
      }
      // /
    } else {
      var targetEx = $(e.target).attr("value");
      $(".index-div .checkButt[value='" + targetEx + "']").hide();
      // + works
      $(".forEx:contains('" + targetEx + "')").removeClass("show").hide();
      //
      // 0 ex, + check
      if ($(":checkbox[class=exCheckIndex]:checked").length == 0) {
        $(".workInfo").show();
        var checkedYet = $(":checkbox:checked");
        for (var i = 0; i < checkedYet.length; i++) {
          var toCheck = $(checkedYet[i]).attr("value");
          $(".index-div[value='" + toCheck + "']").show().addClass("filter");
          $(".checkButt[value='" + toCheck + "']").show();
          $(".workInfo[value='" + toCheck + "']").parent().show();
        }
        // /
        // 0 check
        if ($(":checkbox:checked").length == 0) {
          // hide button to remove check
          hideEx();
          // /
          $(".index-div").show().addClass("filter");
          $(".checkButt").show();
          $("#add-pers-role-index").removeClass("scroll-height").removeClass("scroll");
        }
        // /
      }
      // + works
      if ($(":checkbox[class=worksPersIndex]:checked").length > 0) {
        var checkedEx = $(":checkbox[class=worksCheckIndex]:checked");
        for (var i = 0; i < checkedEx.length; i++) {
          var singleEx = $(checkedEx[i]).attr("value");
          $(".forEx:contains('" + singleEx + "')").addClass("show");
          $(".show:contains('" + singleEx + "')").show();
          $(".forEx:not(:contains('" + singleEx + "'))").hide();
        }
      }
      // /
    }
  })
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // WORKS ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  $("input[class=worksPersIndex]").change(function(e) {
    // works from people
    $(".slideWork").removeClass("slideWork");
    // /
    var workPersInd = $(e.target).attr("value");
    if ($(e.target).prop("checked") == true) {
      // there are some results - + works
      $(".workInfo[value!=" + workPersInd + "]").parent().hide().removeClass("filter");
      $(".workInfo[value='" + workPersInd + "']").parent().show().addClass("forEx");
      $(".forEx[value='" + workPersInd + "']").show();
      // /
      // if there are other results
      var checkedWorkVal = $(":checkbox:checked");
      for (var i = 0; i < checkedWorkVal.length; i++) {
        var checkedWork = $(checkedWorkVal[i]).attr("value");
        $(".workInfo[value='" + checkedWork + "']").parent().show();
      }
      // /
      // + type of excerpts
      if ($(":checkbox[class=exCheckIndex]:checked").length > 0) {
        var ex = $(":checkbox[class=exCheckIndex]:checked");
        for (var i = 0; i < ex.length; i++) {
          var singleEx = $(ex[i]).attr("value");
          $(".forEx[value='" + singleEx + "']").addClass("showEx");
          $(".showEx[value='" + singleEx + "']").show();
          // if an excerpt is not of the specific type of excerpt
          $(".forEx:not(.showEx)").hide();
          //
        }
      }
      // /
    } else {
      // uncheck work
      $(".forEx:contains('" + workPersInd + "')").hide().removeClass("forEx");
      $(".showEx:contains('" + workPersInd + "')").removeClass("showEx");
      // class from excerpt check
      $(".show:contains('" + workPersInd + "')").removeClass("show").hide();
      // /
      var yetChecked = $(":checkbox:checked");
      for (var i = 0; i < yetChecked.length; i++) {
        var checkedAtt = $(yetChecked[i]).attr("value");
        $(".checkButt[value='" + checkedAtt + "']").show();
        $(".workInfo:contains('" + checkedAtt + "')").parent().show().addClass("filter");
      }
      // + work, + pers
      if ($(":checkbox[class=worksPersIndex]:checked").length > 0) {
        var works =  $(":checkbox[class=worksPersIndex]:checked");
        for (var i = 0; i < works.length; i++) {
          var checkedWork = $(works[i]).attr("value");
          $(".workInfo[value!='" + checkedWork + "']").parent().hide().removeClass("filter").removeClass("forEx").removeClass("showEx").removeClass("show");
          $(".workInfo[value='" + checkedWork + "']").parent().show().addClass("filter");
        }
      }
      // /
      // 0 works
      if ($(":checkbox[class=worksPersIndex]:checked").length == 0) {
        // + ex
        if ($(":checkbox[class=exCheckIndex]:checked").length > 0) {
          var ex = $(":checkbox[class=exCheckIndex]:checked");
          for (var i = 0; i < ex.length; i++) {
            var singleEx = $(ex[i]).attr("value");
            $(".forEx[value='" + singleEx + "']").addClass("showEx");
            $(".showEx[value='" + singleEx + "']").show();
            // if an excerpt is not of the specific type of excerpt
            $(".forEx:not(.showEx)").hide();
            //
          }
          // + pers
          if ($(":checkbox[class=peopleCheckIndex]:checked").length > 0) {
            for (var i = 0; i < ex.length; i++) {
              var singleEx = $(ex[i]).attr("value");
              $(".checkButt[value='" + singleEx + "']").addClass("show");
              $(".show[value='" + singleEx + "']").show();
              // if an excerpt is not of the specific type of excerpt
              $(".checkButt:not([value='" + singleEx + "'])").hide();
              //
            }
          }
          // /
        }
        // /
        else {
          $(".workInfo").show();
        }
      }
      // /
      // 0 check
      if ($(":checkbox:checked").length == 0) {
        // hide button to remove check
        hideEx();
        // /
        $(".index-div").show().addClass("filter");
        $(".checkButt").show();
        $("#add-pers-role-index").removeClass("scroll-height").removeClass("scroll");
        $(".containPlus").removeClass("filter").removeClass("containPlus");
      }
      // /
    }
  })
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// go from an index to the other
function refreshIndex() {
  $(".index-div").show();
  if ($("input[type=checkbox]").is(":checked")) {
    $("input[type=checkbox]").prop("checked", false);
  }
  $(".index-search-input").val("");
}

// show all the excepts
function showEx() {
  $(".seeEx").show();
  $(".seeEx").click(function() {
    $(".slideWork").removeClass("slideWork");
    $(".index-div").show();
    $(".checkButt").show();
    $(".contain").removeClass('contain');
    $("#add-pers-role-index").removeClass("scroll-height").removeClass("scroll");
    $(".filters-resize-minus").removeClass("filters-resize-minus").addClass("filters-resize-plus"); // facets resize
    $(".containPlus").removeClass("containPlus").hide();
    $(".workInfo").show();
    // remove all check
    $("input[type=checkbox]").each(function() {
      this.checked = false;
    })
    // /
    // remove people role boxes
    $(".specific-role-box").removeClass("contain").hide();
    $("#add-pers-role-index").removeClass("scroll-height").removeClass("scroll");
    // /
    // remove author background
    $(".background_orchid_padd").removeClass("background_orchid_padd");
    // remove mentioned person background
    $(".background_blue_padd").removeClass("background_blue_padd");
    // + people role, 0 people
    if ($(":checkbox[class=peopleCheckIndex]:checked").length == 0) {
      $(".index-div").show();
      $(".containPlus").removeClass("containPlus").hide(); //
    }
    // /
    hideEx();
  })
}

// hide all the excerpts
function hideEx() {
  $(".seeEx").hide();
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
function worksIndexFacets() {
  // filter class for search bar - it search only on elements with class filter
  $("input").change(function(e) {
    if ($(":checkbox:checked").length > 0) {
      showDivWorks();
    }
    if ($(":checkbox:checked").length == 0) {
      $(".works-index-div").addClass("filter");
      hideWorksRemove();
    }
  })
  // /
  // people
  $("input[class=worksPersFilters]").change(function(e) {
    var checkVal = $(e.target).attr("workvalue");
    if ($(e.target).prop("checked") == true) {
      $(".shown-work-4").removeClass("shown-work-4").hide().removeClass("filter");
      // 0 works
      if ($(":checkbox[class=workSingleFilters]:checked").length == 0) {
        $(".works-index-div:contains('" + checkVal + "')").show().addClass("shown-div").addClass("filter");
        $(".works-index-div:not(:contains('" + checkVal + "'))").hide().removeClass("filter");
        $(".shown-div").show().addClass("filter");
      }
      // /
      // + works
      if ($(":checkbox[class=workSingleFilters]:checked").length > 0) {
        $(".shown-work:contains('" + checkVal + "')").show().addClass("plus-work").addClass("filter");
        $(".shown-div-work:contains('" + checkVal + "')").show().addClass("plus-work").addClass("filter");
        $(".shown-work:not(:contains('" + checkVal + "'))").hide().removeClass("filter");
        $(".shown-div-work:not(:contains('" + checkVal + "'))").hide().removeClass("filter");
        $(".plus-work").show().addClass("filter");
      }
      // /
      // other results from previous searches
      var checkedWorkVal = $(":checkbox[class=workSingleFilters]:checked");
      for (var i = 0; i < checkedWorkVal.length; i++) {
        var checkedWork = $(checkedWorkVal[i]).attr("workvalue");
        $(".shown-work:contains('" + checkedWork + "')").show().addClass("plus-work").addClass("filter");
        $(".shown-div-work:contains('" + checkedWork + "')").show().addClass("plus-work").addClass("filter");
        $(".shown-work:not(:contains('" + checkedWork + "'))").hide().removeClass("filter");
        $(".shown-div-work:not(:contains('" + checkedWork + "'))").hide().removeClass("filter");
        $(".plus-work").show().addClass("filter");
        $(".works-index-div:contains('" + checkedWork + "')").show().addClass("tempWork");
        $(".tempWork").show();
      }
      /////////////////////////////////////////////////////////////////////////////////////
    } else {
      $(".tempWork:contains('" + checkVal + "')").hide().removeClass("tempWork").removeClass("filter");
      $(".shown-pers:contains('" + checkVal + "')").hide().removeClass("shown-pers").removeClass("filter");
      $(".shown-div:contains('" + checkVal + "')").hide().removeClass("shown-div").removeClass("filter");
      $(".shown-div-work:contains('" + checkVal + "')").hide().removeClass("shown-div-work").removeClass("filter");
      $(".works-index-div:hidden").removeClass("filter"); // tutti gli el che sono in hide non devono mai comparire se si fa una ricerca
      // 0 works
      if ($(":checkbox[class=workSingleFilters]:checked").length == 0) {
        $(".shown-div:contains('" + checkVal + "')").hide().removeClass("filter");
      }
      // /
      // + works
      if ($(":checkbox[class=workSingleFilters]:checked").length > 0) {
        $(".plus-work:contains('" + checkVal + "')").removeClass("plus-work");
        $(".works-index-div:contains('" + checkVal + "')").hide().removeClass("filter");
        if ($(":checkbox[class=worksPersFilters]:checked").length == 0) {
          var pers = $(":checkbox[class=workSingleFilters]:checked");
          for (var i = 0; i < pers.length; i++) {
            var checkedPers = $(pers[i]).attr("workvalue");
            $(".works-index-div:contains('" + checkedPers + "')").show().addClass("shown-work-4").addClass("filter");
            $(".works-index:not(:contains('" + checkedPers + "'))").hide().removeClass("filter");
            $(".shown-work-4").show().addClass("filter");
          }
        }
      }
      //
      // other results from previous searches
      var checkPers = $(":checkbox[class=worksPersFilters]:checked");
      for (var i = 0; i < checkPers.length; i++) {
        var pers = $(checkPers[i]).attr("workvalue");
        $(".tempWork:not(:contains('" + pers + "'))").hide().removeClass("tempWork").removeClass("filter");
      }
      // 0 works, 0 people, + excerpts
      if ($(":checkbox[class=worksPersFilters]:checked").length == 0) {
        if ($(":checkbox[class=workSingleFilters]:checked").length == 0) {
          if ($(":checkbox[class=worksExFilters]:checked").length > 0) {
            $(".works-index-div").show().addClass("filter");
            $(".shown-div").removeClass("show-div");
            $(".shown-pers").removeClass("show-pers");
          }
        }
      }
      // /
      // 0 check
      if ($(":checkbox:checked").length == 0) {
        $(".works-index-div").show().addClass("filter");
        $(".shown-div").removeClass("show-div");
        $(".shown-pers").removeClass("show-pers");
        $(".tempWork").removeClass("tempWork");
        $(".tempPers").removeClass("tempPers");
        hideWorksRemove(); // hide button to remove all check
      }
      // /
    }
  })
  // type of excerpts
  $("input[class=worksExFilters]").change(function(e) {
    var checkVal = $(e.target).attr("workvalue");
    if ($(e.target).prop("checked") == true) {
      // 0 people
      if ($(":checkbox[class=worksPersFilters]:checked").length == 0) {
        $(".ex-butt:contains('" + checkVal + "')").show().addClass("shown-ex").addClass("filter");
        $(".ex-butt:not(:contains('" + checkVal + "'))").hide().addClass("no-ex-butt");
        $(".shown-ex").show().addClass("filter");
      }
      // + people
      if ($(":checkbox[class=worksPersFilters]:checked").length > 0) {
        $(".ex-butt:contains('" + checkVal + "')").show().addClass("shown-ex").addClass("filter");
        $(".ex-butt:not(:contains('" + checkVal + "'))").hide().addClass("no-ex-butt");
        $(".shown-ex").show();
        $(".works-index-div:hidden").removeClass("filter"); // hidden elements do not have to appear when performing a search
      }
    } else {
      $(".ex-butt:contains('" + checkVal + "')").removeClass("shown-ex").hide();
      $(".works-index-div:hidden").removeClass("filter"); // hidden elements do not have to appear when performing a search
      if ($(":checkbox[class=worksExFilters]:checked").length == 0) {
        $(".ex-butt").show();
        $(".works-index-div:hidden").removeClass("filter"); // hidden elements do not have to appear when performing a search
      }
    }
  })
  // works
  $("input[class=workSingleFilters]").change(function(e) {
    var checkVal = $(e.target).attr("workvalue");
    if ($(e.target).prop("checked") == true) {
      $(".shown-pers").removeClass("shown-pers").hide().removeClass("filter");
      if ($(":checkbox[class=worksPersFilters]:checked").length == 0) {
        $(".works-index-div:contains('" + checkVal + "')").show().addClass("shown-work").addClass("filter");
        $(".works-index-div:not(:contains('" + checkVal + "'))").hide().removeClass("filter");
        $(".shown-work").show().addClass("filter");
      }
      if ($(":checkbox[class=worksPersFilters]:checked").length > 0) {
        var pers = $(":checkbox[class=worksPersFilters]:checked");
        for (var i = 0; i < pers.length; i++) {
          var checkedPers = $(pers[i]).attr("workvalue");
          $(".works-index-div:contains('" + checkedPers + "'):contains('" + checkVal + "')").show().addClass("tempPers").addClass("filter");
          $(".works-index-div:not(:contains('" + checkedPers + "'))").hide().removeClass("filter");
          $(".tempPers").show().addClass("filter");
        }
        $(".shown-div:contains('" + checkVal + "')").show().addClass("shown-div-work").addClass("filter");
        $(".shown-div:not(:contains('" + checkVal + "'))").hide().removeClass("filter");
        $(".shown-div-work").show().addClass("filter");
      }
      /////////////////////////////////////////////////////////////////////////////////
    } else {
      $(".shown-div-work:contains('" + checkVal + "')").hide().removeClass("shown-div-work").removeClass("filter");
      $(".tempWork:contains('" + checkVal + "')").hide().removeClass("tempWork").removeClass("filter");
      $(".tempPers:contains('" + checkVal + "')").hide().removeClass("tempPers").removeClass("filter");
      $(".works-index-div:hidden").removeClass("filter"); // hidden elements do not have to appear when performing a search
      if ($(":checkbox[class=worksPersFilters]:checked").length == 0) {
        $(".works-index-div:contains('" + checkVal + "')").removeClass("shown-work").hide().removeClass("filter");
      }
      if ($(":checkbox[class=worksPersFilters]:checked").length > 0) {
        if ($(":checkbox[class=workSingleFilters]:checked").length > 0) {
          $(".works-index-div:contains('" + checkVal + "')").removeClass("shown-work").removeClass("shown-div-work").hide().removeClass("filter");
        }
      }
      if ($(":checkbox[class=worksPersFilters]:checked").length > 0) {
        if ($(":checkbox[class=workSingleFilters]:checked").length == 0) {
          var pers = $(":checkbox[class=worksPersFilters]:checked");
          for (var i = 0; i < pers.length; i++) {
            var checkedPers = $(pers[i]).attr("workvalue");
            $(".works-index-div:contains('" + checkedPers + "')").show().addClass("shown-pers").addClass("filter");
            $(".works-index:not(:contains('" + checkedPers + "'))").hide().removeClass("filter");
            $(".shown-pers").show().addClass("filter");
          }
        }
      }
      // 0 works, 0 people, + excerpts
      if ($(":checkbox[class=worksPersFilters]:checked").length == 0) {
        if ($(":checkbox[class=workSingleFilters]:checked").length == 0) {
          if ($(":checkbox[class=worksExFilters]:checked").length > 0) {
            $(".works-index-div").show().addClass("filter");
            $(".shown-div").removeClass("show-div");
            $(".shown-pers").removeClass("show-pers");
          }
        }
      }
      // 0 check
      if ($(":checkbox:checked").length == 0) {
        $(".works-index-div").show().addClass("filter");
        $(".shown-div").removeClass("show-div");
        $(".shown-pers").removeClass("show-pers");
        $(".tempWork").removeClass("tempWork");
        $(".tempPers").removeClass("tempPers");
      }
      // /
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
  var pages = $("#pages option:selected").text();
  var page = pages.split("-")[0];
  $("#transcriptionViewer").animate({
    scrollTop: $("span[data-n='" + page + "']").position().top
  }, 2000);
  $(".hide-butt").hide();
}

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

// temp
function temp() {
  var list = [
    'Antonio, Marco (82 a.C.–30 a.C.)',
    'Arzeni, Bruno (1905–1954)',
    'Augusto, Gaio Giulio Cesare Ottaviano, imperatore romano (63 a.C.–14)',
    'Belli, Giuseppe Gioachino (1791–1863)',
    'Berlinguer, Enrico (1922–1985)',
    'Briganti, Giuliano (1918–1992)',
    'Bruto, Marco Iunio (85 a.C.–42 a.C.)',
    'Bufalini, Paolo (1915–2001)',
    'Campanella, Tommaso (1568–1639)',
    'Carducci, Giosuè (1835–1907)',
    'Carmide, zio di Platone (ca. V sec. a.C.–403 a.C.)',
    'Cesare, Gaio Giulio (100 a.C.–44 a.C.)',
    'Cicerone, Marco Tullio (106 a.C.–43 a.C.)',
    'De Sarlo, Francesco (1864–1937)',
    'Dioniso, divinità greca Domiziano, Tito Flavio, imperatore romano (51–96)',
    'Döblin, Alfred (1878–1957)',
    'Fertonani, Roberto (1925–2000)',
    'Fidia (ca. 500–430)',
    'Flaubert, Gustave (1821–1880)',
    'Freud, Sigmund (1856–1939)',
    'Galba, Servio Sulpicio, imperatore romano (3 a.C.–69)',
    'Garin, Eugenio (1909–2004)',
    'Gesù, di Nazaret (4 a.C.–29)',
    'Giustiniano I (482–565)',
    'Giustino I (ca. 450–527)',
    'Goethe, Johann Wolfgang von (1749–1832)',
    'Gorbačev, Michail Sergeevič (1931–)',
    'Guttuso, Renato (1911–1987)',
    'Gèllio, Aulo (125–180)',
    'Hegel, Georg Wilhelm Friedrich (1770–1831)',
    'Hesse, Herman (1877–1962)',
    'Iseo, retore (ca. 420 a.C.–350 a.C.)',
    'Labriola, Antonio (1843–1904)',
    'Leopardi, Giacomo (1798–1837)',
    'Lucrezio Caro, Tito (97–55 a.C)',
    'Machiavelli, Niccolò (1469–1527)',
    'Malagrida, Gabriele (1689–1761)',
    'Mann, Thomas (1875–1955)',
    'Manzoni, Alessandro (1785–1873)',
    'Marco Aurelio, imperatore romano (121–180)',
    'Mario, Gaio (ca. 157 a.C.–86 a.C.)',
    'Marri, Germano (1932–)',
    'Marx, Karl (1818–1883)',
    'Memmio, Gaio (ca. 99 a.C.–46 a.C.)',
    'Nerone, Claudio Cesare, imperatore romano (37–68)',
    'Nerva, Marco Cocceio, imperatore romano (26/30–98)',
    'Nevio, Gneo (ca. 264 a.C.–201 a.C.)',
    'Nietzsche, Elisabeth Förster (1846–1935)',
    'Nietzsche, Friedrich Wilhelm (1844–1900)',
    'Orazio Flacco, Quinto (65 a.C.–8 a.C.)',
    'Otone, Marco Salvio, imperatore romano (32–69)',
    'Pananti, Filippo (1766–1837)',
    'Petroselli, Luigi (1932–1981)',
    'Pilato, Ponzio (I sec.)',
    'Pontano, Giovanni (1426–1503)',
    'Rilke, Rainer Maria (1875–1926)',
    'Schoenberg, Arnold (1874–1951)',
    'Schopenhauer, Arthur (1788–1860)',
    'Scipione, Publio Cornelio (235 a.C.–183 a.C.)',
    'Silla, Lucio Cornelio (138 a.C.–78 a.C.)',
    'Socrate (ca. 469 a.C.–399 a.C.)',
    'Sorel, Julien, personaggio  Stendhal, pseud. (1783–1842)',
    'Tacito, Publio Cornelio (ca. 55–120)',
    'Tiberio, Giulio Cesare Augusto, imperatore romano (43 a.C.–37)',
    'Tito, Flavio Vespasiano, imperatore romano (39–81)',
    'Tocqueville, Alexis de (1805–1859)',
    'Tommaseo, Niccolò (1802–1874)',
    'Traiano, Marco Ulpio Nerva, imperatore romano (53–117)',
    'Vespasiano, Tito Flavio, imperatore romano (9–79)',
    'Vico, Giambattista (1668–1744)',
    'Vigolo, Giorgio (1894–1983)',
    'Vipsania Giulia Agrippina, detta Giulia minore, nipote di Augusto (ca. 19 a.C.–29)',
    'Vitellio, Aulo, imperatore romano (15–69)',
    'Wagner, Richard (1813–1883)',
    'Zaratustra (IX–XVIII sec. a.C.?)',
  ]

  $.each(list, function(index, value){
    $("#result").append('{<br>"name": "' + value + '",<br>"n-people": "",<br>"n-ex": "",<br>"linkWith":[<br>""<br>],<br>},<br>');
  });
}


///////////////
// side bar //
//////////////

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
