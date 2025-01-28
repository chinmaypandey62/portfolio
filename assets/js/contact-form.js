// const userId = "12lCSDbTpydxL8Tmy";
const serviceId = "service_fq2uc43";
const templateId = "template_mg93ywe";

const submitHandler = (event) => {
  event.preventDefault(); 

  const fullname = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (!fullname || !email || !message) {
    alert("All fields are required!");
    return;
  }

  emailjs
    .send(serviceId, templateId, { fullname, email, message })
    .then(
      (response) => {
        alert("Message sent successfully!");
        console.log("SUCCESS", response.status, response.text);

        document.getElementById("fullname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
      },
      (error) => {
        alert("Failed to send the message. Please try again.");
        console.error("ERROR", error);
      }
    );
};
