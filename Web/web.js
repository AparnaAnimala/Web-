document.addEventListener("DOMContentLoaded", () => {
  // ✅ Form submit handler
  const form = document.getElementById("formcont");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("✅ Thank you for registering! Our team will contact you soon.");
      form.reset();
    });
  }

  // ✅ Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

  // ✅ Highlight navbar link when clicked
  const navLinks = document.querySelectorAll(".nav a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.forEach(l => l.classList.remove("active-link"));
      link.classList.add("active-link");
    });
  });

  // ✅ Example dynamic message
  const heading = document.querySelector(".better");
  if (heading) {
    setInterval(() => {
      heading.classList.toggle("text-primary");
    }, 1500);
  }
});