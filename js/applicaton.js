window.addEventListener("scroll", function () {
  shrink();
});

let navbar = document.getElementById("navbar");

function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
    navbar.classList.remove("navbar-shrink");
  }
}

const loaders = document.getElementById("loaders");

window.addEventListener("load", () => {
  loaders.classList.add("loading-none");
});

// or

const loers = document.getElementById("loaders");

const loadersDuration = 12000; // 12s

setTimeout(() => {
  loaders.classList.add("loading-none");
}, loadersDuration);

const hamburger = document.querySelector(".hamburger");
const navLink = document.querySelector(".navbar-responsive");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hide");
  navLink.classList.toggle("hide");
});
