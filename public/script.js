const overlayContainer = document.querySelector(".overlay");

const modalOverlay = document.getElementById("modalOverlay");
const modalCloseBtn = document.querySelectorAll(".modalCloseBtn");
const nav = document.querySelector(".nav-container");
const navBtn = document.querySelector(".nav_btn");
const [openBtn, closeBtn] = navBtn.querySelectorAll("button");
const list = document.querySelectorAll(".nav-links");
const ctaLink = document.querySelectorAll(".cta-link");

const navigate = () => {
  nav.classList.toggle("hidden");

  [openBtn, closeBtn].map((btns) => btns.classList.toggle("hidden"));
};

navBtn.addEventListener("click", (e) => {
  if (!e.target.classList.contains("hidden")) navigate();
});

const useLink = (e) => {
  e.preventDefault();
  const id = e.currentTarget.href.split("#").at(1);
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
const toggleModal = () => {
  modalOverlay.classList.toggle("hidden");
  overlayContainer.classList.toggle("hidden");
  document.body.classList.toggle("overflow-hidden");
};
// Show modal after 20 seconds
setTimeout(toggleModal, 50000);

// Close modal
modalCloseBtn.forEach((Btn) => Btn.addEventListener("click", toggleModal));
