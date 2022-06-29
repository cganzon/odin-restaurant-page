import heroImageFile from "../images/hero.png";

const home = () => {
  const homeContent = document.createElement("div");
  homeContent.setAttribute("id", "home-content");

  const hero = document.createElement("section");
  const heroImage = document.createElement("img");
  const heroText = document.createElement("div");
  const heroHeading = document.createElement("h2");
  const heroLead = document.createElement("p");

  hero.classList.add("hero");
  heroImage.setAttribute(
    "src",
    heroImageFile
  );
  heroImage.setAttribute("alt", "");

  heroText.classList.add("hero-text");
  heroHeading.textContent =
    "Pasta catered to you";
  heroLead.textContent =
    "Here at Caesarino's, you decide the kind of pasta we should make. Choose from a wide variety of ingredients to build the perfect dish tailored to your craving";

  heroText.append(heroHeading, heroLead)

  hero.append(heroImage, heroText);
  homeContent.append(hero);

  return homeContent;
};

export default home;
