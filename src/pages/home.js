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
    "https://images.unsplash.com/photo-1616299915952-04c803388e5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1062&q=80"
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
