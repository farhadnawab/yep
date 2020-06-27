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

  if($popup.length > 0){
    $("body").addClass("popup-active");
    $popup.addClass("active");
  }
});
$(document).on('click', '.popup', function(e) {// close popup

  popupActiveId = $(".popup.active").attr("id");
  
  if(e.target.id == popupActiveId){//if clicked outside content area
      $("body").removeClass("popup-active");
      $(".popup").removeClass("active");
      $("#"+ popupActiveId).find(".responsive-video iframe").attr("src","");
  }
});

/*** POPUP IMAGE ****/
$(document).on('click', '[data-popup-image]', function(e) {// open popup
  $popup = $("#"+ $(this).attr("data-popup-image"));

  if($popup.length > 0){
    var imageUrl = $(this).find("img").attr("src");

    $("body").addClass("popup-active");
    $popup.addClass("active");
    $popup.find("img").attr("src", imageUrl);
  }
});

/*** POPUP Video ****/
$(document).on('click', '[data-popup-video]', function(e) {// open popup
  $popup = $("#"+ $(this).attr("data-popup-video"));

  if($popup.length > 0){
    var imageUrl = $(this).attr("data-video-url");

    $("body").addClass("popup-active");
    $popup.addClass("active");
    $popup.find("iframe").attr("src", imageUrl);
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


/*** Zoom image ***/
var scaleImage = "1.8";

if(window.matchMedia("(max-width: 1280px)").matches)
  scaleImage = "2.3";
if(window.matchMedia("(max-width: 1024px)").matches)
  scaleImage = "2.8";
if(window.matchMedia("(max-width: 768px)").matches)
  scaleImage = "2.3";
if(window.matchMedia("(max-width: 480px)").matches)
  scaleImage = "2.8";

$('.zoom-image')
// tile mouse actions
.on('mouseover', function(){
  $(this).children('.photo').css({'transform': 'scale('+ scaleImage +')'});
})
.on('mouseout', function(){
  $(this).children('.photo').css({'transform': 'scale(1)'});
})
.on('mousemove', function(e){
  $(this).children('.photo').css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +'%'});
})
// tiles set up
.each(function(){
  $(this)
    // add a photo container
    .append('<div class="photo"></div>');
    // set up a background image for each tile based on data-image attribute
    $(this).find('.photo').css('background-image', 'url("' + $(this).find("img").attr("src") + '")');
})


/**** Quiz Working ****/
var slideOffset = 0;
$(document).on("click",".slide-next", function(){
  
  if($(this).hasClass("is-correct")){
    
    $(this).text("That's right!");    

    setTimeout(() => {
      
      if($(this).closest("section").next().length > 0)
      {
        //Take height of the current section
        $(this).closest("section").addClass("h-0");
        $(this).closest("section").next().removeClass("h-0");

        //Scroll to top of the current section
        $("html, body").animate({
          scrollTop: $(this).closest("section").next().offset().top
        }, 50);
        
        slideOffset += $(this).closest("section").next().outerWidth();

        $("#quiz-wrapper").css({'transform': 'translate(-'+ slideOffset +'px, 0)'});
      }

    }, 1000);
  }else if($(this).hasClass("is-wrong")){
    
    var text = $(this).text();
    $(this).text("Try again");
    $(this).addClass("active");

    setTimeout(() => {
      $(this).text(text);
      $(this).removeClass("active");
    }, 2000);
  }else if($(this).closest("section").next().length > 0)
  {
    //Take height of the current section
    $(this).closest("section").addClass("h-0");
    $(this).closest("section").next().removeClass("h-0");

    //Scroll to top of the current section
    $("html, body").animate({
      scrollTop: $(this).closest("section").next().offset().top
    }, 50);

    slideOffset += $(this).closest("section").next().outerWidth();

    $("#quiz-wrapper").css({'transform': 'translate(-'+ slideOffset +'px, 0)'});
  }
});