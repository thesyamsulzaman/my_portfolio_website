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
    nav.className = docElem.scrollTop > 22 ? "nav--scroll" : "";
  });
});
