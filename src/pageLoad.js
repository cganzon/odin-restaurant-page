import header from "./components/header";
import tabSwitcher from "./helpers/tabSwitcher";

const pageLoad = (page) => {
  const contentDiv = document.querySelector("#content");
  contentDiv.textContent = "";
  contentDiv.append(header(), page());
  tabSwitcher();
};

export default pageLoad;
