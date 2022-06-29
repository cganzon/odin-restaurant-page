import header from "./components/header";
import footer from "./components/footer";
import home from "./pages/home";
import "./css/styles.css";

const pageLoad = () => {
  const contentDiv = document.createElement("div");
  contentDiv.setAttribute("id", "content");
  contentDiv.append(home());
  document.body.append(header(), contentDiv, footer());
};

export default pageLoad;
