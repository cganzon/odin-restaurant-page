import pageLoad from "../pageLoad";
import home from "../pages/home";
import menu from "../pages/menu";

const tabSwitcher = () => {
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      const selectedTab = e.target.id;
      selectedTab === "home" && pageLoad(home);
      selectedTab === "menu" && pageLoad(menu);
    });
  });
};

export default tabSwitcher;
