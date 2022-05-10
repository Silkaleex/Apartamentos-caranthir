alert("Hello World!");
var btnTop = document.getElementById("btn-top"),
  logo = document.getElementById("logo");

window.addEventListener("scroll", function () {
  var scroll = document.documentElement.scrollTop,
    fullSize = document.documentElement.offsetHeight,
    sizeVP = document.documentElement.clientHeight;

  if (scroll > 100) {
    btnTop.classList.add("show");
  } else {
    btnTop.classList.remove("show");
  }

  //Modificar cuando llegue al final de la pagina
  if (fullSize == scroll + sizeVP) {
    btnTop.classList.add("scrollFinal");
  } else {
    btnTop.classList.remove("scrollFinal");
  }
});

btnTop.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

logo.addEventListener("click", function () {
  window.scrollTo(0, 0);
});
