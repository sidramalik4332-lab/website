document.addEventListener("DOMContentLoaded", function () {

  // Smooth scroll (optional UX improvement)
  const links = document.querySelectorAll("a");

  links.forEach(link => {
    link.addEventListener("click", function () {
      console.log("Navigating to:", this.href);
    });
  });

  // Simple form validation (contact page)
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", function (e) {
      const inputs = form.querySelectorAll("input, textarea");
      let valid = true;

      inputs.forEach(input => {
        if (input.value.trim() === "") {
          valid = false;
        }
      });

      if (!valid) {
        e.preventDefault();
        alert("Please fill all fields!");
      } else {
        alert("Message sent successfully!");
      }
    });
  }

});