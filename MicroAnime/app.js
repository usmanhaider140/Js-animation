const tl = gsap.timeline({
  defaults: {
    duration: 0.35,
    ease: "power2.easeOut",
  },
});

// DOM elements
const home = document.querySelector(".home");
const notification = document.querySelector(".notifications");
const message = document.querySelector(".messages");

// Home Icon Animation
gsap.set(".feather", { scale: 0, transformOrigin: "center" });

home.addEventListener("click", () => {
  tl.fromTo(".home-svg", { scale: 1 }, { scale: 0.9, yoyo: true, repeat: 1 });
  tl.fromTo(
    ".feather",
    { scale: 0, y: -5 },
    { scale: 1.5, y: 20, duration: 1, stagger: 0.2 }
  );
  tl.fromTo(".left-feather", { x: 0 }, { x: -5 });
  tl.fromTo(".right-feather", { x: 0 }, { x: 5 });
});

// Notification Animation
gsap.set(".bell", { transformOrigin: "top center" });
gsap.set(".ringer", { transformOrigin: "top center" });
gsap.set(".wave", { opacity: 0, transformOrigin: "bottom" });

notification.addEventListener("click", () => {
  gsap.fromTo(
    ".bell",
    { rotation: -5 },
    { rotation: 0, duration: 2, ease: "elastic.out(5,0.2)" }
  );

  gsap.fromTo(
    ".ringer",
    { rotation: -5 },
    { rotation: 0, duration: 2, ease: "elastic.out(5,0.2)" }
  );

  gsap.fromTo(
    ".wave",
    { opacity: 1, scale: 0 },
    { scale: 1.3, opacity: 0, duration: 1 }
  );
});

// Message Icon Animation

gsap.set(".flap", { transformOrigin: "top" });
message.addEventListener("click", () => {
  tl.fromTo(".messages-svg", { scale: 1 }, { scale: 0.9 });
  tl.fromTo(".flap", { scale: 1 }, { scale: -1, opacity: 1 }, "<50%");
  tl.fromTo(".messages-svg", { scale: 0.9 }, { scale: 1 }, "<50%");
  tl.fromTo(".note", { y: 0, opacity: 1 }, { y: -10, opacity: 0 });
  tl.fromTo(
    ".flap",
    { scale: -1, opacity: 0 },
    { scale: 1, opacity: 1 },
    "<50%"
  );
});
