import pageLoad from "./pageLoad";
import home from "./pages/home";
import menu from "./pages/menu";

pageLoad(home);

const homeNavLink = document.querySelector(".home");
const menuLinks = document.querySelectorAll(".menu");

homeNavLink.addEventListener("click", (e) => {
  e.preventDefault();
  pageLoad(home);
});

menuLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    pageLoad(menu);
  });
});
