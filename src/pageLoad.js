import header from "./components/header";

const pageLoad = (page) => {
  const contentDiv = document.querySelector("#content");
  contentDiv.textContent = "";
  contentDiv.append(header(), page());
};

export default pageLoad;
