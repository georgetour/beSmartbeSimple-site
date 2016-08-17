<!-- This is a first example of using a template -->

<head>

<link href="css/bootstrap.css" rel="stylesheet">

<script src="js/jquery-2.1.4.min.js"></script>
<script src="js/handlebars-v3.0.3.js"></script>

<script src="js/bootstrap.min.js"></script>
<script src="assignment.js"></script>
<script src="AnimalsData.js"></script>
    <link href="../css/assignment.css" type="text/css" rel="stylesheet">


<link href="css/bootstrap.css" rel="stylesheet">
<link href="css/assignment.css" type="text/css" rel="stylesheet">

<meta name="viewport" content="width=device-width, initial-scale=1">

<title>Dynamic data with Wikipedia Animals</title>
</head>

<body>

    <!-- put your HTML here -->
    <div class="container">
        <nav class="navbar navbar-default niceText2 ">
            <!-- start collapsed navabar -->
            <div  class="navbar-header niceText2"  >
                <!--With the data-toggle we are refering to javascript to collapse and we target the id mainNavbar-->
                <button type="button" class="navbar-toggle collapsed buttonColor" data-toggle="collapse"  data-target="#mainNavbar" aria-expanded="false" >
                    Menu</button>
            <!--collapsed navbar -->

            <div id="mainNavbar" class=" navbar-collapse collapse">
                <ul class="nav navbar-nav niceText2">
                    <li id="mainPage" class="menu  active "><a href="#">Home</a></li>
                    <li id="reptiles" class="menu"><a href="#">Reptiles</a></li>
                    <li id="mammals" class="menu"><a  href="#">Mammals</a></li>
                    <li id="birds" class="menu"><a href="#">Birds</a></li>
                </ul>
            </div>
            </div>
        </nav>
        <div>
            <h1 class="niceText">Reptiles,mammals and birds.</h1>
        </div>

        <div id="content">
            <!--Empty div that we will place data directly from templates and javascript-->
        </div>
        <footer>
    <div class=" signature">Created by George Tourtsnakis</div>
        </footer>
    </div>



 <script id="category-template" type="text/x-handlebars-template">
    <div class="row col-md-12">
        <p class="niceText ">Click a picture for details:</p>

    </div>

    <div class="row">
     {{#each category}}<!--With this we are saying to have each category we have in out javascript which in current case it contains Reptiles,mammals and birds.-->
        <div class=" col-xs-12 col-md-4">
            <div class="categories-thumbnail hoverClass" data-id="{{@index}}">

                <h4 ><a class="niceText">{{name}}</a></h4>
                <img class="img-responsive imagesShadows imgBorder" src="{{animals.[0].image2}}">
            </div>


        </div>
        {{/each}}

    </div>

 </script>

 <script id="animal-template" type="text/x-handlebars-template">
  <div class="container">
    <h4 class="niceText">{{name}}</h4>
      <div class="row ">
          {{#each animals}}
          <div class=" col-md-3">
              <div class="info-thumbnail hoverClass" data-id="{{@index}}">
              <p class="niceText">{{name}}</p>
              <img class="img-responsive  imagesShadows"  src="{{image1}}">
              <img class="img-responsive imagesShadows" src="{{image2}}">
              </div>
          </div>
          {{/each}}
      </div>
  </div>

 </script>

    <script id="info-template" type="text/x-handlebars-template">
        <div class="container">

            <h4 class="niceText">{{name}}</h4>

            <div class="row">
              <div class="col-md-12">

                  <div class="col-md-6">
                    <img class="img-responsive  imagesShadows"  src="{{image1}}">
                  </div>
               <div class="col-md-6">
               <img class="img-responsive  imagesShadows"  src="{{image2}}">
               </div>

               <div>
                <div  class="niceText">{{description}}</div>
               </div >
              </div>
            </div>
        </div>

    </script>



</body>
