function loadBundles(lang,gotohash) {  
        jQuery.i18n.properties({
            name: 'Messages',
            path: '/static/script/bundle/',
            mode: 'both',
            cache: 'true',
            language: lang,
            checkAvailableLanguages: true,
            async: true,
            callback: function() {
              $("#i_title").html($.i18n.prop('i_title'));
              $("#main_title").html($.i18n.prop('main_title'));
              $("#main_subtitle").html($.i18n.prop('main_subtitle'));
              $("#nav_intro").html($.i18n.prop('nav_intro'));
              $("#nav_viewer").html($.i18n.prop('nav_viewer'));
              $("#nav_library").html($.i18n.prop('nav_library'));
              $("#nav_indexes").html($.i18n.prop('nav_indexes'));
              $("#nav_biblio").html($.i18n.prop('nav_biblio'));
              $("#pages_select").html($.i18n.prop('pages_select'));
              $("#transcription_tab").html($.i18n.prop('transcription_tab'));
              $("#authors_tab").html($.i18n.prop('authors_tab'));
              $("#quotations_tab").html($.i18n.prop('quotations_tab'));
              $("#quotations_tab2").html($.i18n.prop('quotations_tab2'));
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
              $("#p_16").html($.i18n.prop('p_16'));
              $("#p_17").html($.i18n.prop('p_17'));
              $("#p_18").html($.i18n.prop('p_18'));
              $("#p_19").html($.i18n.prop('p_19'));
              $("#p_20").html($.i18n.prop('p_20'));
              $("#p_21").html($.i18n.prop('p_21'));
              $("#li_1").html($.i18n.prop('li_1'));
              $("#li_2").html($.i18n.prop('li_2'));
              $("#li_3").html($.i18n.prop('li_3'));
              $("#li_4").html($.i18n.prop('li_4'));
              $("#li_5").html($.i18n.prop('li_5'));
              if (gotohash && location.hash) { 
                        var l=location.hash; location.hash=''; location.hash=l;};
            }
        });
};

jQuery(document).ready(function($) {  
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
  
  // change page by changing option in select
  $("#pages").change(function() {
    var num = $('option:selected').attr('value');
    // var index = $('#pages').prop('selectedIndex')-1;
    // load the div containing the selected facsimile
    $( "#viewer" ).load('./static/images_coords.html div:has(img[src="'+num+'"])', mapifyAndRdf );
  });

  // prev and next buttons
  $("#next").click(function() {
    var nextElement = $('#pages > option:selected').next('option');
    var num = nextElement.attr('value');
    if (nextElement.length > 0) {
      $('#pages > option:selected').removeAttr('selected').next('option').attr('selected', 'selected');
      $( "#viewer" ).load('./static/images_coords.html div:has(img[src="'+num+'"])', mapifyAndRdf );
    }
  });

  $("#prev").click(function() {
    var nextElement = $('#pages > option:selected').prev('option');
    var num = nextElement.attr('value');
    if (nextElement.length > 0) {
      $('#pages > option:selected').removeAttr('selected').prev('option').attr('selected', 'selected');
      $( "#viewer" ).load('./static/images_coords.html div:has(img[src="'+num+'"])', mapifyAndRdf );
    }
  });

  // redirect to viewer/openings
  // get the last part of current URL (pages) to load an image into the viewer according to the pages
  var path = window.location.pathname;
  var page = path.substring(path.lastIndexOf('_')+1);
  if (page.match(/\d+/g) != null ) {
      //var opt = $$('#pages').find('option:contains('+page+')').text();
      var opt = pbindex[page];
      $( "#viewer" ).load('../static/images_coords.html div:has(img[src="'+opt+'"])', mapifyAndRdf );
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




  ////////////////
  // Biblioteca //
  ////////////////

  // library boxes
  $('p:contains(indicator)').remove();
  // $(".ellipsis").each(function () {
  //   $(this).text().replace(/<indicator name="unicode">.*<indicator>/, '');
  //   var text = jQuery(this).text();
  //   if (text.length > 130) {
  //     jQuery(this).text(text.substr(0, text.lastIndexOf(' ', 127)) + '...');
  //   }
  // });

});      



