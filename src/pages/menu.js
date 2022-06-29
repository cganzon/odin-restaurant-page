import makeListItem from "../helpers/makeListItem";

const menu = () => {
  const menuContent = document.createElement("div");
  menuContent.setAttribute("id", "menu-content");

  const menuCard = document.createElement("div");
  menuCard.classList.add("menu-card");

  const h2 = document.createElement("h2");
  h2.textContent = "Menu";

  const stepOneWrapper = document.createElement("div");
  const stepOne = document.createElement("h3");
  stepOne.textContent = "1. Choose your pasta";

  const stepOneList = document.createElement("ul");
  const spaghetti = makeListItem("Spaghetti");
  const capellini = makeListItem("Capellini");
  const rigatoni = makeListItem("Rigatoni");
  const fettuccine = makeListItem("Fettuccine");
  const linguine = makeListItem("Linguine");
  const tortellini = makeListItem("Tortellini");
  const fusilli = makeListItem("Fusilli");

  stepOneList.append(
    spaghetti,
    capellini,
    rigatoni,
    fettuccine,
    linguine,
    tortellini,
    fusilli
  );
  stepOneWrapper.append(stepOne, stepOneList);

  const stepTwoWrapper = document.createElement("div");
  const stepTwo = document.createElement("h3");
  stepTwo.textContent = "2. Choose your sauce";
  const stepTwoList = document.createElement("ul");

  const alfredo = makeListItem("Alfredo");
  const pesto = makeListItem("Pesto");
  const marinara = makeListItem("Marinara");
  const bolognese = makeListItem("Bolognese (Meat Sauce)");
  const tomatoCream = makeListItem("Tomatoes & Cream");
  const aioli = makeListItem("Aioli (Garlic & Olive Oil)");

  stepTwoList.append(alfredo, pesto, marinara, bolognese, tomatoCream, aioli);
  stepTwoWrapper.append(stepTwo, stepTwoList);

  const stepThreeWrapper = document.createElement("div");
  const stepThree = document.createElement("h3");
  stepThree.textContent = "3. Choose your protein (optional)";
  const stepThreeList = document.createElement("ul");

  const italianSausage = makeListItem("Italian Sausage");
  const meatballs = makeListItem("Meatballs");
  const grilledChicken = makeListItem("Grilled Chicken");
  const pepperoni = makeListItem("Pepperoni");
  const calamari = makeListItem("Calamari");
  const shrimp = makeListItem("Shrimp");
  const salmon = makeListItem("Baked Salmon");

  stepThreeList.append(
    italianSausage,
    meatballs,
    grilledChicken,
    pepperoni,
    calamari,
    shrimp,
    salmon
  );
  stepThreeWrapper.append(stepThree, stepThreeList);

  const stepFourWrapper = document.createElement("div");
  const stepFour = document.createElement("h3");
  stepFour.textContent = "4. Choose your toppings (optional)";
  const stepFourList = document.createElement("ul");

  const zucchini = makeListItem("Zucchini");
  const mushrooms = makeListItem("Sauteed Mushrooms");
  const tomato = makeListItem("Fresh Tomato");
  const peppers = makeListItem("Roasted Peppers");
  const broccoli = makeListItem("Broccoli");
  const peas = makeListItem("Peas");
  const onion = makeListItem("Onion");
  const spinach = makeListItem("Spinach");
  const olives = makeListItem("Black Olives");
  const mozzarella = makeListItem("Mozzarella Cheese");
  const feta = makeListItem("Feta Cheese");
  const ricotta = makeListItem("Ricotta Cheese");

  stepFourList.append(
    zucchini,
    mushrooms,
    tomato,
    peppers,
    broccoli,
    peas,
    onion,
    spinach,
    olives,
    mozzarella,
    feta,
    ricotta
  );
  stepFourWrapper.append(stepFour, stepFourList);

  menuCard.append(
    h2,
    stepOneWrapper,
    stepTwoWrapper,
    stepThreeWrapper,
    stepFourWrapper
  );

  menuContent.append(menuCard);

  return menuContent;
};

export default menu;
