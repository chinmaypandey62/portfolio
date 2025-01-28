const serviceId = "service_fq2uc43";
const templateId = "template_mg93ywe";

const submitHandler = (event) => {
  event.preventDefault();
  const form = event.target;
  const submitBtn = form.querySelector('.form-btn');
  const btnText = submitBtn.querySelector('span');
  
  // Disable button and show spinner
  submitBtn.disabled = true;
  btnText.textContent = 'Sending...';

  // Get form values
  const formData = {
    fullname: document.getElementById('fullname').value.trim(),
    email: document.getElementById('email').value.trim(),
    message: document.getElementById('message').value.trim()
  };

  // Validate form
  if (!formData.fullname || !formData.email || !formData.message) {
    alert('Please fill in all required fields');
    resetButton(submitBtn, btnText);
    return;
  }

  // Send email
  emailjs.sendForm(serviceId, templateId, form)
    .then((response) => {
      alert('Message sent successfully!');
      form.reset();
    })
    .catch((error) => {
      alert(`Error sending message: ${error.text}`);
    })
    .finally(() => {
      resetButton(submitBtn, btnText);
    });
};

function resetButton(button, textElement) {
  button.disabled = false;
  textElement.textContent = 'Send Message';
}