//alert("hi");
$(document).ready(function() {
  $('select').material_select();
  $('.parallax').parallax();

  // for HTML5 "required" attribute
  $("select[required]").css({
    display: "inline",
    height: 0,
    padding: 0,
    width: 0
  });

 
});
	

//FIXED MENU BUTTON-------------//
$('.fixed-action-btn').openFAB();
$('.fixed-action-btn').closeFAB();
$('.fixed-action-btn.toolbar').openToolbar();
$('.fixed-action-btn.toolbar').closeToolbar();

//Fixed Menu Button functions----//
$(".fixed-action-btn").on("click", function(){		
  
  alert("hi");

  $.get("/about").done(function (data) {		
    window.location.replace("/about");
  });	
});
