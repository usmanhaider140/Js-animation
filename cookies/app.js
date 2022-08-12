gsap.fromTo(
  ".cookie-text",
  { duration: 1, opacity: 0, y: -50, ease: "power3.inOut" },
  { opacity: 1, y: 0 }
);

const timeLine = gsap.timeline({ defaults: { duration: 0.75 } });

timeLine.fromTo(
  ".cookie-container",
  { opacity: 0, scale: 0 },
  { opacity: 1, scale: 1, ease: "elastic.out(1, 0.4)", duration: 1.5 }
);

timeLine.fromTo(
  ".cookie",
  { opacity: 0, x: -50, rotate: -90 },
  { opacity: 1, x: 0, rotate: 0 },
  "-=0.5"
);

timeLine.fromTo(
  ".cookie",
  { y: 0, rotation: 0 },
  { y: -20, rotation: -20, yoyo: true, repeat: -1 }
);

timeLine.fromTo(
  "#crumbs",
  { y: 0, rotation: 0 },
  { y: -20, rotation: -20, yoyo: true, repeat: -1 },
  "<"
);
timeLine.fromTo("#Group_4", { y: 0 }, { y: -10, yoyo: true, repeat: -1 }, "<");
timeLine.fromTo("#Group_5", { y: 0 }, { y: -10, yoyo: true, repeat: -1 }, "<");
timeLine.fromTo("#Group_7", { y: 0 }, { y: -10, yoyo: true, repeat: -1 });

const button = document.querySelector("button");
button.addEventListener("click", () => {
  gsap.to(".cookie-container", {
    duration: 0.5,
    opacity: 0,
    y: 100,
    ease: "power1.out",
  });
});
