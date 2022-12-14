const timeline = gsap.timeline({
  defaults: { duration: 0.75, ease: "power3.inOut" },
});

timeline.fromTo(
  ".hero-img",
  {
    scale: 1.2,
    borderRadius: "0",
  },
  {
    scale: 1,
    duration: 2.5,
    borderRadius: "2rem",
    ease: "elastic.out(1.5, 1)",
  }
);

timeline.fromTo(
  ".cta1",
  {
    x: "-100%",
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
  },
  "<20%"
);

timeline.fromTo(
  ".cta2",
  {
    y: "-100%",
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
  },
  "<20%"
);

timeline.fromTo(
  ".cta3",
  {
    x: "100%",
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
  },
  "<20%"
);

timeline.fromTo(
  ".cta4",
  {
    x: "-100%",
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
  },
  "<20%"
);

timeline.fromTo(
  ".cta5",
  {
    y: "100%",
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
  },
  "<20%"
);

timeline.fromTo(
  ".cta6",
  {
    x: "100%",
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
  },
  "<20%"
);

// Split Text Animation

const logo = document.querySelector(".logo");

const letters = logo.textContent.split("");
logo.textContent = "";

letters.forEach((letter, index) => {
  const span = document.createElement("span");
  span.textContent = letter;
  span.classList.add("letter");
  logo.appendChild(span);
});

gsap.set(".letter", { display: "inline-block" });

gsap.fromTo(
  ".letter",
  { y: "100%", opacity: 0 },
  { y: 0, delay: 1, opacity: 1, stagger: 0.05, ease: "back.out(3)" }
);
