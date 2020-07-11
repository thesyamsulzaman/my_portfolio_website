document.addEventListener("DOMContentLoaded", () => {
  // VARIABLES
  const nav = document.querySelector("nav");
  let body = document.body,
    docElem = document.documentElement,
    offset = 100,
    scrollPos,
    docHeight;

  let navLists = document.getElementById("nav__list");
  let navToggleButton = document.getElementById("nav__toggle");
  let items = document.querySelectorAll("nav ul li");
  let heroTitle = document.querySelector(".hero__title");
  let heroText = document.querySelector(".hero__text");

  // EVENTS
  navToggleButton.addEventListener("click", function () {
    navLists.classList.toggle("nav__links--toggle");
  });

  items.forEach((item) =>
    item.addEventListener("click", function () {
      //item.classList.add("nav__item--active");
      //item.classList.remove("nav__item--active");
    })
  );
  window.addEventListener("scroll", function () {
    if (docElem.scrollTop > 22) {
      nav.className = "nav--scroll";
      heroText.classList.add("hero__title--faded");
      heroTitle.classList.add("hero__text--faded");
    } else {
      nav.className = "";
      heroText.classList.remove("hero__title--faded");
      heroTitle.classList.remove("hero__text--faded");
    }
  });
});
