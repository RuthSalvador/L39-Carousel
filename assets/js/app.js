$(document).ready(function(){
  var slides = $("#slides");
  var previous = $("#previous");
  var next = $("#next");

$("#slides figure:last").insertBefore("#slides figure:first");
slides.css("margin-left", "-"+100+"%");

previous.on("click", function(){
  slides.animate({
    marginLeft:0
  }, 350, function(){
    $("#slides figure:last").insertBefore("#slides figure:first");
    slides.css("margin-left", "-"+100+"%");
  });
});

function moveNext(){
  slides.animate({
    marginLeft:"-"+200+"%"
  }, 350, function(){
    $("#slides figure:first").insertAfter("#slides figure:last");
    slides.css("margin-left", "-"+100+"%");
  });
}

next.on("click", function(){
    moveNext();
});

function automatic(){
  setInterval(function () {
    moveNext();
  }, 5000);
}
automatic();

})
