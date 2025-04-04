(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init({
    publicKey: "XO0QQX7sPLnNaxJaf",
  });
})();

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // these IDs from the previous steps
      emailjs.sendForm("service_nddc7ss", "template_4vyqp27", this).then(
        () => {
          document.getElementById("alert-message").style.display = "block";
          setInterval(function () {
            // $(".alert").fadeOut();
            // $(".alert").style.display = 'none';
            document.getElementById("alert-message").style.display = "none";
            document.getElementById("contact-form").reset();
          }, 3000);
        },
        (error) => {
          alert("FAILED...", error);
        }
      );
    });
};
