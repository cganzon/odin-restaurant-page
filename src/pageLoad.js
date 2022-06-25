const pageLoad = () => {
  const contentDiv = document.querySelector("#content");

  const header = document.createElement("header");
  const restaurantName = document.createElement("h1");
  const nav = document.createElement("nav");
  const navLinkOne = document.createElement("a");
  const navLinkTwo = document.createElement("a");

  restaurantName.textContent = "Caesarino's";
  navLinkOne.textContent = "Home";
  navLinkOne.setAttribute("href", "");
  navLinkOne.classList.add("home");
  navLinkTwo.textContent = "Menu";
  navLinkTwo.setAttribute("href", "");
  navLinkTwo.classList.add("menu");

  nav.append(navLinkOne, navLinkTwo);
  header.append(restaurantName, nav);

  contentDiv.append(header);
};

export default pageLoad;
