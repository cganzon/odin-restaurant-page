import "../css/contact.css";

const contact = () => {
  const contactContent = document.createElement("div");
  contactContent.setAttribute("id", "contact-content");

  const h2 = document.createElement("h2");
  h2.textContent = "Contact Us";

  const address = document.createElement("p");
  address.textContent = "Address: 123 Totally Real Street, Somewhere, Over There 12345";
  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = "Phone Number: (123) 456-7890";
  const email = document.createElement("p");
  email.textContent = "Email: totallyrealemail@email.com";

  contactContent.append(h2, address, phoneNumber, email);

  return contactContent;
};

export default contact;
