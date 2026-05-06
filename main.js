const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
 
  if (window.scrollY > 50) {
    navbar.classList.add("scroll-nav");
  } else {
    navbar.classList.remove("scroll-nav");
  }
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId !== "#" && targetId.startsWith("#")) {
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        e.preventDefault();     
       targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }
  });
});
