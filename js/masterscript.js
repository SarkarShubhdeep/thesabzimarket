

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
}

$(document).ready(function(){

  // -----------------THE PROBLEM----------------------
  $('.bg-prob-img-1').mouseenter(function(){
    $(".text-overlay-1").addClass("bg-darker");
  });
  $('.bg-prob-img-1').mouseleave(function(){
    $(".text-overlay-1").removeClass("bg-darker");
  });

  $('.bg-prob-img-2').mouseenter(function(){
    $(".text-overlay-2").addClass("bg-darker");
  });
  $('.bg-prob-img-2').mouseleave(function(){
    $(".text-overlay-2").removeClass("bg-darker");
  });
  
  $('.bg-prob-img-3').mouseenter(function(){
    $(".text-overlay-3").addClass("bg-darker");
  });
  $('.bg-prob-img-3').mouseleave(function(){
    $(".text-overlay-3").removeClass("bg-darker");
  });

  $('.bg-prob-img-4').mouseenter(function(){
    $(".text-overlay-4").addClass("bg-darker");
  });
  $('.bg-prob-img-4').mouseleave(function(){
    $(".text-overlay-4").removeClass("bg-darker");
  });

  $('.bg-prob-img-5').mouseenter(function(){
    $(".text-overlay-5").addClass("bg-darker");
  });
  $('.bg-prob-img-5').mouseleave(function(){
    $(".text-overlay-5").removeClass("bg-darker");
  });

  $('.bg-prob-img-6').mouseenter(function(){
    $(".text-overlay-6").addClass("bg-darker");
  });
  $('.bg-prob-img-6').mouseleave(function(){
    $(".text-overlay-6").removeClass("bg-darker");
  });

});