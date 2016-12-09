'use strict';

require('./vendor/jquery.js');
require('./vendor/jquery-ujs.js');
require('./vendor/jquery-ui.js');
require('./vendor/rotator.js');

window.$ = window.jQuery;

var overlayCheck = function(){
  var $o = ["blue","teal","green","olive","brown","red","purple","pink","lightblue"];
  var $t = $("div.inner").children().last();
  if ($t.is("p")){
    if ($t.text().split(" ").length === 1){
        var $c = $.trim($t.text().toLowerCase());
      for (var i in $o){
        if ($c === $o[i]){
          $(".overlay").removeClass("default").addClass($c);
          $t.css("display", "none");
        }
      }
    }
  }
};

$(document).ready(function(){
    $("ul.dropdown-container li").hover(function(){
            if ($(this).find("ul").length > 0 ) {
                    $(this).find("ul").each(function(){
                            $(this).show("blind", 250).addClass("active")
                    })
            }
    }, function(){
            $(this).find("ul").removeClass("active").stop().hide()
    })

    if ($("section#side_body").length > 0) {
            $("section#body").addClass("body-with-side");
    }

    if ($(window).height() > $("body").height()) {
            $("footer").css("position", "absolute").css("bottom", 0)
    }

    overlayCheck();

    $(".truelife-video-modal.bg,.truelife-video-modal.close").click(function(){
      $(".truelife-video-modal").fadeOut()
    })
    $(".truelife-video-overlay-trigger").click(function(){
      $(".truelife-video-modal").fadeIn()
    })
    
    $.expr[':'].external = function(obj){
        return !obj.href.match(/^mailto\:/)
               && (obj.hostname != location.hostname)
               && !obj.href.match(/^javascript\:/)
               && !obj.href.match(/^$/)
    };
  
    $('a:external').attr('target', '_blank');
});