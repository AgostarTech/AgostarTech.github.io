(function () {
  emailjs.init("sxYPres4FB1gBpy37");  // ✅ Correct EmailJS Public Key
})();

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_ydbhe8n", "__ejs-test-mail-service__", this)
    .then(() => {
      document.getElementById("form-message").innerText = "✅ Message sent successfully!";
      this.reset();
    }, (error) => {
      document.getElementById("form-message").innerText = "❌ Failed to send message!";
      console.error("EmailJS error:", error);
    });
});
