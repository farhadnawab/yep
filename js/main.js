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