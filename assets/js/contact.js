// Initialize EmailJS with your public key
(function () {
  emailjs.init("sxYPres4FB1gBpy37"); // ✅ Your EmailJS public key
})();

// Handle contact form submission
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const formMessage = document.getElementById("form-message");
  const recaptchaResponse = grecaptcha.getResponse();

  // Check if reCAPTCHA is completed
  if (!recaptchaResponse) {
    formMessage.innerText = "❌ Please complete the reCAPTCHA.";
    formMessage.style.color = "red";
    return;
  }

  // Send form data via EmailJS
  emailjs.sendForm("service_ydbhe8n", "template_hao1o8o", this)
    .then(() => {
      formMessage.innerText = "✅ Message sent successfully!";
      formMessage.style.color = "green";
      this.reset();
      grecaptcha.reset();
    })
    .catch((error) => {
      formMessage.innerText = "❌ Failed to send message!";
      formMessage.style.color = "red";
      console.error("EmailJS error:", error);
    });
});
