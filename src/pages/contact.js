const contact = () => {
  const contactContent = document.createElement("div");
  contactContent.setAttribute("id", "contact-content");

  const h2 = document.createElement("h2");
  h2.textContent = "This is the contact page";

  contactContent.append(h2);

  return contactContent;
};

export default contact;
