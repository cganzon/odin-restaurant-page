import header from "./components/header";

const pageLoad = () => {
  const contentDiv = document.querySelector("#content");

  contentDiv.append(header());
};

export default pageLoad;
