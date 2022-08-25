// Transition Animation

const tlLeave = gsap.timeline({
  defaults: {
    duration: 0.75,
    ease: "power2.easeOut",
  },
});

const tlEnter = gsap.timeline({
  defaults: {
    duration: 0.75,
    ease: "power2.easeOut",
  },
});

// function for leave and enter animation

const leaveAnimation = (current, done) => {
  const product = current.querySelector(".img-container");
  console.log(product);
  const text = current.querySelector(".showcase-text");
  const circles = current.querySelectorAll(".circle");
  const arrow = current.querySelector(".showcase-arrow");
  return (
    tlLeave.fromTo(
      arrow,
      {
        y: 0,
        opacity: 1,
      },
      {
        y: 50,
        opacity: 0,
      }
    ),
    tlLeave.fromTo(
      product,
      { y: 0, opacity: 1 },
      { y: 100, opacity: 0, onComplete: done },
      "<"
    ),
    tlLeave.fromTo(
      text,
      { y: 0, opacity: 1 },
      { y: 100, opacity: 0, onComplete: done },
      "<"
    ),
    tlLeave.fromTo(
      circles,
      { y: 0, opacity: 1 },
      {
        y: -200,
        opacity: 0,
        onComplete: done,
        stagger: 0.15,
        ease: "back.out(1.7)",
        duration: 1,
      },
      "<"
    )
  );
};

const enterAnimation = (current, done, gradient) => {
  const product = current.querySelector(".img-container");
  console.log(product);
  const text = current.querySelector(".showcase-text");
  const circles = current.querySelectorAll(".circle");
  const arrow = current.querySelector(".showcase-arrow");
  return (
    tlEnter.fromTo(
      arrow,

      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
      }
    ),
    tlEnter.to("body", { background: gradient }, "<"),
    tlEnter.fromTo(product, { y: -100, opacity: 0 }, { y: 0, opacity: 1 }, "<"),
    tlEnter.fromTo(
      text,
      { y: 100, opacity: 0, onComplete: done },
      { y: 0, opacity: 1 },
      "<"
    ),
    tlEnter.fromTo(
      circles,
      { y: -200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        onComplete: done,
        stagger: 0.15,
        ease: "back.out(1.7)",
        duration: 1,
      },
      "<"
    )
  );
};

function productEnterAnimation(next, done) {
  tlEnter.fromTo(next, { y: "100%" }, { y: "0%" });
  tlEnter.fromTo(
    next,
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, onComplete: done, stagger: 0.1 }
  );
}

function productLeaveAnimation(current, done) {
  tlLeave.fromTo(current, { y: "0%" }, { y: "100%", onComplete: done });
}

barba.init({
  preventRunning: true,
  transitions: [
    {
      name: "default",
      once(data) {
        const done = this.async();
        const current = data.next.container;
        const gradient = getGradient(current.dataset.name);
        gsap.set("body", { background: gradient });
        enterAnimation(current, done, gradient);
      },
      leave(data) {
        const done = this.async();
        let current = data.current.container;
        leaveAnimation(current, done);
      },
      enter(data) {
        const done = this.async();
        let next = data.next.container;
        let gradientColor = getGradient(data.next.namespace);
        enterAnimation(next, done, gradientColor);
      },
    },
    {
      name: "product-transition",
      sync: true,
      from: { namespace: ["handbag", "product"] },
      to: { namespace: ["product", "handbag"] },
      enter(data) {
        const done = this.async();
        let next = data.next.container;
        productEnterAnimation(next, done);
      },
      leave(data) {
        const done = this.async();
        let current = data.current.container;
        productLeaveAnimation(current, done);
      },
    },
  ],
});

// Change the background color of the showcase

function getGradient(name) {
  switch (name) {
    case "handbag":
      return "linear-gradient(260deg, #b75d62, #754d4f)";
    case "hat":
      return "linear-gradient(260deg, #f4d03f, #16a085)";
    case "boot":
      return "linear-gradient(260deg, #a9c9ff, #ffbbec)";
  }
}
