const header = () => {
  const header = document.createElement("header");
  const restaurantName = document.createElement("h1");
  const tabsList = document.createElement("ul");
  const homeTab = document.createElement("li");
  const menuTab = document.createElement("li");

  restaurantName.textContent = "Caesarino's";

  homeTab.textContent = "Home";
  homeTab.classList.add("tab");
  homeTab.setAttribute("id", "home");
  menuTab.textContent = "Menu";
  menuTab.classList.add("tab");
  menuTab.setAttribute("id", "menu");

  tabsList.append(homeTab, menuTab);

  header.append(restaurantName, tabsList);

  return header;
};

export default header;
