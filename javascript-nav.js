document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("nav");
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) { // Adjust threshold as needed
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    })
});