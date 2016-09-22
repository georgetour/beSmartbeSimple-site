$(document).ready(function () {

    //Dynamic inserting data for our HTML though we can use a template system like handlebars
    // or fetch data with AJAX
    var homePage =
        '<div class="dynamic-data">'+
            '<div class="top-bar"> <div> <a id="logo" href="atypon-project.html"><img class="img-logo" src="images/logo.jpg" alt="The company logo"></a> </div> </div>'+
            '<div class="main-container arial-font">'+
            '<div class="article-column ">'+
            '<article class="article-scroll arial-font">'+
            '<div class="header-div">'+
            '<h1>Dignissim dictum libero at facilisi ac eleifend nisi vestibulum leo lorem.</h1>'+
            '<ul class="author-links">'+
            '<li><a href="#author1">Author 1</a><span> ,</span></li>'+
            '<li><a href="#author2">Author 2</a><span> ,</span></li>'+
            '<li><a href="#author3">Author 3 </a></li></ul> </div>'+
            '<section class="article-font">'+
        '<h2>Abstract</h2>'+
        '<p>Lorem ipsum dolor sit amet, no eum sensibus sadipscing.'+
        'Sanctus repudiandae conclusionemque eos no. Commodo fuisset nec ex.'+
        'Nec cu constituto persequeris, in sit quaeque civibus accusamus.'+
        'Reque illum vitae his eu, te nam <a href="#">graece</a> diceret.'+
        '</p> </section>'+
        '<section class="article-font">'+
        '<h2>Introduction</h2>'+
        '<p>Lorem ipsum dolor sit amet,'+
        'ne aliquam dolores mnesarchum sit, errem accusamus vel cu,'+
        'per ad nibh tota nulla. Nisl facer instructior ut eum,'+
        'his ad errem epicuri complectitur. Id vide duis patrioque vel.'+
        'Pri ne feugiat dissentias, mea ut fastidii copiosae prodesset.'+
        'Ea aeterno aliquam perfecto eam, eum malis rationibus ea. Dicit consectetuer at mea, odio philosophia signiferumque'+
        'cu his, ne idque <a href="#">mentitum</a> signiferumque eum.'+
        'Docendi recusabo cotidieque et mea, id vel salutandi facilisis,'+
        'ea mei animal invenire. Usu ut illum tibique corrumpit. Cu justo meliore minimum vis.'+
        'Ea fugit doctus sit, sed an ubique inermis. Commodo percipit pertinacia est te,'+
        'vis causae vituperatoribus et. Quo mutat imperdiet ex.'+
        'Ex vel copiosae menandri lobortis, novum omnium gloriatur ex eam.'+
        'Ex hinc option hendrerit vix. Ut atqui ullum veniam per. Usu ad altera reprimique,'+
        'no pro cibo verterem evertitur. Summo facete eruditi sea ea, bonorum detraxit vix id.'+
        'Mei ea tollit habemus, nemore reformidans pro et, utinam ocurreret pri id.'+
        'Pri et rebum saepe facilisi, et magna corpora vix, eum ei mazim dolorem.'+
        'Malis integre verterem quo ut, et eum tota regione vulputate, integre adipisci ne usu.'+
        'Ne sit meis option epicuri, in consulatu vituperatoribus pro.'+
        'Cum sanctus admodum albucius et, causae tamquam luptatum et est. Eos iudico dignissim gloriatur at.'+
        'Eos ut ullum appellantur contentiones, purto salutandi te eum, no has dicit lobortis reprimique.'+
        'Qui vero neglegentur ne, no noster eirmod alienum vel. Voluptua volutpat et mei, ut tale feugiat volutpat pro.'+
        'Mel ut veritus pertinacia. Et his civibus detraxit. Labore corpora eu nec.'+
        'An mel eruditi pericula, nec ad justo nominati, mei quando ubique habemus at.'+
        'Ne vocent audire perfecto eos, choro libris ne his, vidit vocibus per id.'+
        'Malorum salutandi an mei, no eum eirmod voluptaria. Id cum eirmod periculis dignissim.'+
        'Ad velit docendi euripidis duo. Qui mollis quaeque oporteat ex.'+
        'Vix an dolor molestie eleifend, ne mollis nostrum sadipscing cum.'+
        'Aliquip invidunt rationibus est eu. Per laudem disputando complectitur et.'+
        'Movet tincidunt efficiendi quo cu, cu usu quando mandamus.'+
        'An vix inani dicit, nisl case an his, sit ei liber oratio theophrastus.'+
        'Ex duo graece ullamcorper, eum nihil sensibus sapientem cu. Ea ceteros instructior vis, nec ne autem viderer aperiri.'+
        'Nec ad possim philosophia, quem option ius eu, usu ex graeci perpetua petentium.'+
        'Delectus facilisi deterruisset id nec, an vis malis tollit hendrerit, sed intellegat pertinacia inciderint no.'+
        'Possit euismod tractatos mei ei. Ei eam modus aliquam sapientem, ne idque docendi luptatum est, sonet quaestio mel et.'+
        'Vim et malis summo. Duis omnium te pro, in mollis argumentum eos, sit quodsi aliquando vituperata eu.'+
        'Eam in noster reprehendunt, movet efficiantur signiferumque eum ei, vim eu laboramus evertitur incorrupte.'+
        'Partem sanctus sea ne. Omnium theophrastus vix et, latine impetus invidunt duo ne, pri at quas dicam.'+
        'Nisl interpretaris id eam, in est labores albucius tractatos, laudem accusata delicata ad eam.'+
        'Nostrud lobortis qualisque vix in, illum delicata mei te, libris honestatis liberavisse cu vis.'+
        '</p>'+
        '<div class="right-column ">'+
        '<!--Top right bar with figures, references, related, details icons-->'+
        '<nav class="right-navbar ">'+
        '<ul class="ul-right-column ">'+
        '<li id="show-figures"  class="boxes active ">'+
        '<a href="#figures"><img  class="right-images" src="assets/figures.svg" alt="Figures Icon with Link"></a>'+
        '<div>Figures</div>'+
        '</li>'+
        '<li id="show-references" class="boxes">'+
        '<a href="#references"><img  class="right-images" src="assets/references.svg" alt="References Icon with Link"></a>'+
        '<div>References</div>'+
        '</li>'+
        '<li id="show-related" class="boxes">'+
        '<a href="#related"><img class="right-images"  src="assets/related.svg" alt="Related Icon with Link"></a>'+
        '<div>Related</div>'+
        '</li>'+
        '<li id="show-details" class="boxes">'+
        '<a href="#details"><img class="right-images" src="assets/info.svg" alt="Details Icon with Link"></a>'+
        '<div>Details</div>'+
        '</li>'+
        '</ul>'+
        '</nav><!--End top right bar with figures, references, related, details icons-->'+
        '</div>';

    var detailsPage =
        '<div  class="dynamic-data">' +
            '<div class="destroy">'+
        '<div class="header"><a style="color: black" href="#" class="btn"><h1 style="margin:0; padding: 5px;">< Back</h1></a></div>' +
        '<p>{{description}}</p>' +
        '</div>'
        '</div>';



    var slider = new pageAnimation($("#container"));
    $(window).on('hashchange', route);

    // Basic page routing for smaller devices only
    function route(event) {

            var page,
                hash = window.location.hash;

            //Figures template
            if (hash === "#figures") {
                page = merge(detailsPage, {
                    description:
                    '<div class="references">'+
                    '<section class="right-scroll">'+
                    '<figure> <img  src="assets/seattle-map.jpg" alt="Seattle Map" >'+
                    '<figcaption>Fig1. - Seattle map.</figcaption>'+
                    '</figure>'+
                    '<figure>'+
                    '<img  src="assets/age-diagram.png" alt="Age Diagram" >'+
                    '<figcaption>Fig2. - Age Diagram.</figcaption></figure>'+
                    '<figure> <img  src="assets/graph-steelhead.png" alt="The Pulpit Rock">'+
                    '<figcaption>Fig3. - Graph Steelhead</figcaption>'+
                    '</figure>'+
                    '</section>'+
                    '</div>'
                });

            }
            //References template
            else if (hash === "#references") {
                page = merge(detailsPage, {
                    description:
                    '<section>'+
                    '<div class="right-box-container">'+
                    '<h3>Lorem</h3>'+
                    '<ul> <li><a href="#">Lorem ipsum dolor sit amet.</a></li>'+
                    '<li><a href="#">Lorem ipsum dolor sit amet.</a></li>'+
                    '<li><a href="#">Lorem ipsum dolor sit amet.</a></li>'+
                    '</ul> </div>'+
                    '<div class="right-box-container">'+
                    ' <h3>Lorem</h3> <ul>'+
                    '<li><a href="#">Lorem ipsum dolor sit amet.</a></li>'+
                    '<li><a href="#">Lorem ipsum dolor sit amet.</a></li>'+
                    '<li><a href="#">Lorem ipsum dolor sit amet.</a></li>'+
                '</ul> </div> </section>'
                });

            }
            //Related template
            else if (hash === "#related") {
                page = merge(detailsPage, {
                    description:
                    '<section>'+
                    '<div class="right-box-container">'+
                    '<h3>Related</h3>'+
                    '<ul> <li><a href="#">Lorem ipsum dolor sit amet.</a></li>'+
                    '<li><a href="#">Lorem ipsum dolor sit amet.</a></li>'+
                    '<li><a href="#">Lorem ipsum dolor sit amet.</a></li>'+
                    '</ul> </div>'+
                     '<div class="right-box-container">'+
                    '<h3>Title</h3>'+
                    '<ul> <li><a href="#">Lorem ipsum dolor sit amet.</a></li>'+
                    '<li><a href="#">Lorem ipsum dolor sit amet.</a></li>'+
                    '<li><a href="#">Lorem ipsum dolor sit amet.</a></li>'+
                    '</ul> </div>'+
                    '<div class="right-box-container">'+
                    '<h3>Competing interests</h3>'+
                    '<ul> <li><a href="#">Lorem ipsum dolor sit amet.</a></li>'+
                    '<li><a href="#">Lorem ipsum dolor sit amet.</a></li>'+
                    '<li><a href="#">Lorem ipsum dolor sit amet.</a></li>'+
                    '</ul> </div> </section>'
                });

            }
            //Details template
            else if (hash === "#details") {
                page = merge(detailsPage, {
                    description: '<section >' +
                    '<div class="right-box-container">' +
                    '<h3>Details</h3>' +
                    '<ul> <li><a href="#">Lorem ipsum dolor sit amet.</a></li>' +
                    '<li><a href="#">Lorem ipsum dolor sit amet.</a></li>' +
                    '<li><a href="#">Lorem ipsum dolor sit amet.</a></li>' +
                    '</ul> </div>' +
                    '<div class="right-box-container">' +
                    '<h3>Details</h3>' +
                    '<ul> <li><a href="#">Lorem ipsum dolor sit amet.</a></li>' +
                    '<li><a href="#">Lorem ipsum dolor sit amet.</a></li>' +
                    '<li><a href="#">Lorem ipsum dolor sit amet.</a></li>' +
                    '</ul> </div> </section>'
                });
            }
            else {
                page = homePage;

            }

            slider.slidePage($(page));

        //Destroy the shown right page when click back since it behave strangely in moz and explorer
        $('.btn').on('click',function () {
            $('.destroy').hide();

        });
    }

    //Template processing
    function merge(tpl, data) {
        return tpl.replace("{{description}}", data.description);
    }
    route();



    //Hide Starting data for large screens
    $('#references,#related,#details').hide();


    //A function that will show one element and hide the others
    //for the right navbar for large screens
    function showHide(whatToShow,whatTohide){
        $(whatToShow).show();
        $(whatTohide).hide();
    }

    //Larger screens only
    /*<--------We are clicking the icon at right nav--->*/
    //And showing and hide content with the above function and also we add active class
    $('#show-figures').on('click',function () {
        if($(window).width()>1024){
            showHide('#figures',('#references,#related,#details'));
            $('#show-figures').addClass('active');
            $('#show-references,#show-related,#show-details').removeClass('active');
        }
    });

    $('#show-references').on('click',function () {
        if($(window).width()>1024){
            showHide('#references',('#figures,#related,#details'));
            $('#show-references').addClass('active');
            $('#show-figures,#show-related,#show-details').removeClass('active');
        }
    });

    $('#show-related').on('click',function () {
        if($(window).width()>1024){
            showHide('#related',('#figures,#references,#details'));
            $('#show-related').addClass('active');
            $('#show-figures,#show-references,#show-details').removeClass('active');
        }
    });

    $('#show-details').on('click',function () {
        if($(window).width()>1024){
            showHide('#details',('#figures,#related,#references'));
            $('#show-details').addClass('active');
            $('#show-figures,#show-related,#show-references').removeClass('active');
        }
    });/*<--------End large screens clicking the icons at right nav--->*/


});




