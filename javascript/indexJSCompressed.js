$(document).ready(function(){$(".showEffect1").animate({left:"0"},{duration:1500}),$(".showEffect2").animate({left:"0"},{duration:1800}),$(".showEffect3").animate({left:"0"},{duration:2300}),$(".showEffect4").animate({left:"0"},{duration:2500}),$(".showEffect5").animate({left:"0"},{duration:3e3}),$(".showEffect6").animate({left:"0"},{duration:3200}),$(".showEffect7").animate({right:"0"},{duration:1200}),$(".showEffect8").animate({right:"0"},{duration:5e3}),$(".footerAbout").on("click",function(){$(about).click()}),$(".footerContact").on("click",function(){$(contactUs).click()}),$(".learnMore").on("click",function(){$(services).click()}),$(".nav a").click(function(){$(".navbar-collapse").collapse("hide")}),$("#error").hide();var a="",b=0;$("#contact").submit(function(c){function d(a){var b=/^\s*[a-zA-Z0-9,\s]+\s*$/;return b.test(a)}function e(a){var b=/^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;return b.test(a)}d($("#gameTitle").val())&&d($("#suggestedBy").val())||(c.preventDefault(),a="Only letters and numbers please",$("#error").html(a),$("#error").show(),$("#error").fadeOut(3e3),b=1),e($("#email").val())?0==b&&$("#subscribeForm").submit():(c.preventDefault(),a="Give correct email",$("#error").html(a),$("#error").show(),$("#error").fadeOut(3e3),b=2)})});