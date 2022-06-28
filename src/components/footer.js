const footer = () => {
  const footer = document.createElement("footer");
  const p = document.createElement("p");
  const a = document.createElement("a");

  footer.classList.add("footer");

  a.textContent = "cganzon";
  a.setAttribute("href", "https://github.com/cganzon");
  a.setAttribute("target", "_blank");
  p.textContent = "Created by ";
  p.append(a);

  footer.append(p);

  return footer;
};

export default footer;
