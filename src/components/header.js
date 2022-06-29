import "../css/header.css";

const header = () => {
  const header = document.createElement("header");
  const restaurantName = document.createElement("h1");
  const tabsList = document.createElement("ul");
  const homeTab = document.createElement("li");
  const menuTab = document.createElement("li");
  const contactTab = document.createElement("li");

  header.classList.add("header");

  restaurantName.textContent = "Caesarino's";
  restaurantName.classList.add("restaurant-name");

  tabsList.classList.add("tabs");

  homeTab.textContent = "Home";
  homeTab.classList.add("tab", "active");
  homeTab.setAttribute("id", "home");
  menuTab.textContent = "Menu";
  menuTab.classList.add("tab");
  menuTab.setAttribute("id", "menu");
  contactTab.textContent = "Contact";
  contactTab.classList.add("tab");
  contactTab.setAttribute("id", "contact");

  tabsList.append(homeTab, menuTab, contactTab);

  header.append(restaurantName, tabsList);

  return header;
};

export default header;
