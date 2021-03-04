const qna = document.querySelector(".qna");
const btn = document.querySelector(".qna__icon");
const btn2 = document.querySelector(".qna__icon-2");
const nav__ul = document.querySelector(".nav__ul");
const burger = document.querySelector(".nav__burger");
const top_bottom = document.querySelector(".top-bottom");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 500) {
    top_bottom.classList.add("top-bottom__show");
  } else {
    top_bottom.classList.remove("top-bottom__show");
  }
});
burger.addEventListener("click", () => {
  nav__ul.classList.toggle("nav__show");
  burger.classList.toggle("nav__toggle");
});
btn.addEventListener("click", () => {
  qna.classList.toggle("qna__show");
  qna.classList.remove("qna__show-2");
});
btn2.addEventListener("click", () => {
  qna.classList.toggle("qna__show-2");
  qna.classList.remove("qna__show");
});

// scroll
let scroll = new SmoothScroll('a[href*="#"]', {
  speed: 700,
});

gsap.from(".features-box", {
  scrollTrigger: ".features-box",
  x: -2000,
  duration: 1.3,
  stagger: 0.2,
});
gsap.from(".image-gallery__image-box", {
  scrollTrigger: ".image-gallery__image-box",
  x: -2000,
  duration: 1.3,
  stagger: 0.2,
});
gsap.from(".details__image-box-1", {
  scrollTrigger: ".details__image-box-1",
  x: -2000,
  duration: 1.3,
  stagger: 0.2,
});

gsap.from(".details__text-box-1", {
  scrollTrigger: ".details__text-box-1",
  x: 2000,
  duration: 1.3,
  stagger: 0.2,
});

gsap.from(".details__image-box-2", {
  scrollTrigger: ".details__image-box-2",
  x: 2000,
  duration: 1.3,
  stagger: 0.2,
});
gsap.from(".details__text-box-2", {
  scrollTrigger: ".details__text-box-2",
  x: -2000,
  duration: 1.3,
  stagger: 0.2,
});
gsap.from(".details__image-box-3", {
  scrollTrigger: ".details__image-box-3",
  x: -2000,
  duration: 1.3,
  stagger: 0.2,
});

gsap.from(".details__text-box-3", {
  scrollTrigger: ".details__text-box-3",
  x: 2000,
  duration: 1.3,
  stagger: 0.2,
});
