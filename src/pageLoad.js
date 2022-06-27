import header from "./components/header";
import home from "./pages/home";

const pageLoad = () => {
  const contentDiv = document.createElement("div");
  contentDiv.setAttribute("id", "content");
  contentDiv.append(home());
  document.body.append(header(), contentDiv);
};

export default pageLoad;
