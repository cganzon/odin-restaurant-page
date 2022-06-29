import initialPageLoad from "./initialPageLoad";
import loadContent from "./loadContent";
import home from "./pages/home";
import menu from "./pages/menu";
import contact from "./pages/contact";

initialPageLoad();

const dom = (() => {
  const contentDiv = document.querySelector("#content");
  const tabs = document.querySelectorAll(".tab");

  return { contentDiv, tabs };
})();

dom.tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    dom.tabs.forEach((tab) => tab.classList.remove("active"));
    dom.contentDiv.textContent = "";

    const selectedTab = e.target.id;
    selectedTab === "home" && loadContent(home);
    selectedTab === "menu" && loadContent(menu);
    selectedTab === "contact" && loadContent(contact);

    tab.classList.add("active");
  });
});
