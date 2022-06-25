import header from "./components/header";

const pageLoad = (page) => {
  const contentDiv = document.querySelector("#content");

  contentDiv.append(header(), page());
};

export default pageLoad;
