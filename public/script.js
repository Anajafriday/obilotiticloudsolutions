const nav = document.querySelector(".nav-container");
const navBtn = document.querySelector(".nav_btn");
const [openBtn, closeBtn] = navBtn.querySelectorAll("button");
const list = document.querySelectorAll(".nav-links");
const ctaLink = document.querySelectorAll(".cta-link");
const navigate = () => {
  nav.classList.toggle("left-1/2");
  nav.classList.toggle("left-full");

  [openBtn, closeBtn].map((btns) => btns.classList.toggle("hidden"));
};

navBtn.addEventListener("click", (e) => {
  if (!e.target.classList.contains("hidden")) navigate();
});

const useLink = (e) => {
  e.preventDefault();
  const id = e.target.href.split("#").at(1);
  if (!id) return;
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
};
list.forEach((list) => {
  list.addEventListener("click", (e) => {
    useLink(e);
    if (e.target.classList.contains("footer_link")) {
      nav.classList.add("left-full");
      if (nav.classList.contains("left-1/2")) navigate();
    } else navigate();
  });
});

ctaLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    useLink(e);
  });
});
document.querySelector(".date").textContent = new Date().getFullYear();
