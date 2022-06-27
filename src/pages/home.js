import heroImageFile from "../images/hero.png";

const home = () => {
  const homeContent = document.createElement("div");
  homeContent.setAttribute("id", "home-content");

  const hero = document.createElement("section");
  const heroImage = document.createElement("img");
  const heroHeading = document.createElement("h2");
  const heroLead = document.createElement("p");

  hero.classList.add("hero");
  heroImage.setAttribute(
    "src",
    heroImageFile
  );
  heroImage.setAttribute("alt", "");
  heroHeading.textContent =
    "Enjoy a variety of freshly made pasta to satisfy your craving";
  heroLead.textContent =
    "Caesarino's is the best place for authentic italian pasta. Our staff is top notch and the atmosphere makes you feel right at home. If you're ever in the mood for pasta, Caesarino's is the place to be!";

  hero.append(heroImage, heroHeading, heroLead);
  homeContent.append(hero);

  return homeContent;
};

export default home;
