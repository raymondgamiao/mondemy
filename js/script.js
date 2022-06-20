window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    var element = document.getElementById("navbar");
    element.classList.add("bg-white");
    element.classList.add("shadow");
  } else if (
    document.body.scrollTop < 49 ||
    document.documentElement.scrollTop < 49
  ) {
    var element = document.getElementById("navbar");
    element.classList.remove("bg-white");
    element.classList.remove("shadow");
  }
}
