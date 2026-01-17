const navbar =document.querySelector(".navbar");

window.addEventListener("scroll", ()=>{
  if(window.scrollY>0){
    navbar.classList.add("scroll-nav");
  }
  else{
    navbar.classList.remove("scroll-nav");
  }
})

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});