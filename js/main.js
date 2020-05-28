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

/*** Open Book ***/
$(document).on('click', '.open-book .arrow-left', function(e) {// open popup
  $activeElem = $(this).closest(".open-book").find(".pages > .page.active");
  if($activeElem.prev().length > 0){
    $activeElem.removeClass("active");
    $activeElem.prev().addClass("active");
  }
});

$(document).on('click', '.open-book .arrow-right', function(e) {// open popup
  $activeElem = $(this).closest(".open-book").find(".pages > .page.active");
  if($activeElem.next().length > 0){
    $activeElem.removeClass("active");
    $activeElem.next().addClass("active");
  }
});


/*** Tabs ***/
$(document).on('click', '.tab .tab-buttons > a', function(e) {// open popup
  $currentTab = $(this).closest(".tab");
  $activeElem = $currentTab.find("#"+ $(this).attr("data-target"));
  if($activeElem.length > 0 && !$activeElem.hasClass("active")){
    
    //Tab button active
    $currentTab.find(".tab-buttons > a").removeClass("active");
    $(this).addClass("active");

    //Tab content Active
    $currentTab.find(".tab-content").removeClass("active");
    $activeElem.addClass("active");
  }
});