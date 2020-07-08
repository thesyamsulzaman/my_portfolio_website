document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  let body = document.body,
    docElem = document.documentElement,
    offset = 100,
    scrollPos,
    docHeight;

  let items = document.querySelectorAll("nav ul li");
  items.forEach(item =>
    item.addEventListener("click", function() {
      //item.classList.remove("nav__item--active");
      //item.classList.add("nav__item--active");
    })
  );
  window.addEventListener("scroll", function() {
    nav.className = docElem.scrollTop > 22 ? "nav--scroll" : "";
  });
});
