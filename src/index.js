import pageLoad from "./pageLoad";
import home from "./pages/home";
import menu from "./pages/menu";

pageLoad(home);

const homeNavLink = document.querySelector(".home");
const menuNavLink = document.querySelector(".menu");

homeNavLink.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Clicked");
  pageLoad(home);
});

menuNavLink.addEventListener("click", (e) => {
  e.preventDefault();
  pageLoad(menu);
});
