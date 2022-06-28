const footer = () => {
  const footer = document.createElement("footer");
  const p = document.createElement("p");
  const a = document.createElement("a");

  a.textContent = "cganzon";
  a.setAttribute("href", "https://github.com/cganzon");
  p.textContent = `Created by ${a}`;

  footer.append(p);

  return footer;
};

export default footer;
