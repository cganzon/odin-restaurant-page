import pageLoad from "../pageLoad";
import home from "../pages/home";
import menu from "../pages/menu";
import contact from "../pages/contact";

const tabSwitcher = () => {
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      const selectedTab = e.target.id;
      selectedTab === "home" && pageLoad(home);
      selectedTab === "menu" && pageLoad(menu);
      selectedTab === "contact" && pageLoad(contact);
    });
  });
};

export default tabSwitcher;
