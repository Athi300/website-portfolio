const navLinkEls = document.querySelectorAll('.nav-link');
const windowPathname = window.location.pathname;

navLinkEls.forEach(navLinkEl => {
  if(navLinkEl.href.includes(windowPathname)) {
    navLinkEl.classList.add('active');
  }
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinkEls.classList.toggle("active")
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  nav-FileList.classList.remove("active");
}))