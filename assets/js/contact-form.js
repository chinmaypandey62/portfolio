const serviceId = "service_fq2uc43";
const templateId = "template_mg93ywe";
const publicKey = "12lCSDbTpydxL8Tmy";

const submitHandler = (event) => {
  event.preventDefault();
  const form = event.target;
  const submitBtn = form.querySelector('.form-btn');
  const btnText = submitBtn.querySelector('span');

  // Get form values
  const formData = {
    fullname: document.getElementById('fullname').value.trim(),
    email: document.getElementById('email').value.trim(),
    message: document.getElementById('message').value.trim()
  };

  // Validate form
  if (!formData.fullname || !formData.email || !formData.message) {
    alert('Please fill in all required fields');
    return;
  }

  // Disable button and show spinner
  submitBtn.disabled = true;
  btnText.textContent = 'Sending...';

  // Send email
  emailjs.sendForm(serviceId, templateId, form, publicKey)
    .then((response) => {
      alert('Message sent successfully!');
      form.reset();
    })
    .catch((error) => {
      console.error('EmailJS error:', error);
      const reason = (error && (error.text || error.message)) || 'Please try again later.';
      alert(`Error sending message: ${reason}`);
    })
    .finally(() => {
      resetButton(submitBtn, btnText);
    });
};

function resetButton(button, textElement) {
  button.disabled = false;
  textElement.textContent = 'Send Message';
}
