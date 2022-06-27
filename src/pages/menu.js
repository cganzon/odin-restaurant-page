const menu = () => {
  const menuContent = document.createElement("div");
  menuContent.setAttribute("id", "menu-content");

  const h2 = document.createElement("h2");
  h2.textContent = "This is the menu page";

  menuContent.append(h2);

  return menuContent;
};

export default menu;
