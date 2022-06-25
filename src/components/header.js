const header = () => {
  const header = document.createElement("header");
  const restaurantName = document.createElement("h1");
  const tabsList = document.createElement("ul");
  const homeTab = document.createElement("li");
  const menuTab = document.createElement("li");
  const contactTab = document.createElement("li");

  restaurantName.textContent = "Caesarino's";

  homeTab.textContent = "Home";
  homeTab.classList.add("tab");
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
