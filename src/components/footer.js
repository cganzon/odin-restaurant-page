import "../css/footer.css";

const footer = () => {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  const creator = document.createElement("p");
  const creatorLink = document.createElement("a");

  creatorLink.textContent = "cganzon";
  creatorLink.setAttribute("href", "https://github.com/cganzon");
  creatorLink.setAttribute("target", "_blank");
  creator.textContent = "Created by ";
  creator.append(creatorLink);

  const attribution = document.createElement("p");
  const attributionLink = document.createElement("a");
  attributionLink.textContent = "unsplash.com";
  attributionLink.setAttribute("href", "https://unsplash.com/");
  attributionLink.setAttribute("target", "_blank");
  attribution.textContent = "Image provided by ";
  attribution.append(attributionLink);

  footer.append(attribution, creator);

  return footer;
};

export default footer;
