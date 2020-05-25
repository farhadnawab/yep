AOS.init();

/** Nav Toggle **/
function openMenu(){
  var navMenuDiv = document.getElementById("nav-content");
  navMenuDiv.classList.add("active");
}
function closeMenu(){
  var navMenuDiv = document.getElementById("nav-content");
  navMenuDiv.classList.remove("active");
}

/*** POPUP ****/
$(document).on('click', '[data-popup]', function(e) {// open popup
  $popup = $("#"+ $(this).attr("data-popup"));

  $("body").addClass("popup-active");
  $popup.addClass("active");
});
$(document).on('click', '.popup', function(e) {// close popup

  popupActiveId = $(".popup.active").attr("id");
  
  if(e.target.id == popupActiveId){//if clicked outside content area
      $("body").removeClass("popup-active");
      $(".popup").removeClass("active");
  }
});