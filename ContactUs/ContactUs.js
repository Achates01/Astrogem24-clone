document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const formData = new FormData(event.target);

  const contactData = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  };

  console.log("Contact data:", contactData);

  alert("Thank you for contacting us! We will get back to you soon.");

  event.target.reset();
});
