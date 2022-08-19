const containers = document.querySelectorAll(".input-container");
const form = document.querySelector("form");

const tl = gsap.timeline({ defaults: { duration: 1 } });

// Line
const start =
  "M0 0.999512C0 0.999512 60.5 0.999512 150 0.999512C239.5 0.999512 300 0.999512 300 0.999512";

const end =
  "M1 0.999512C1 0.999512 61.5 7.5 151 7.5C240.5 7.5 301 0.999512 301 0.999512";

// Animation
containers.forEach((container) => {
  const input = container.querySelector(".input");
  const line = container.querySelector(".elastic-line");
  const placeholder = container.querySelector(".placeholder");
  input.addEventListener("click", () => {
    if (!input.value) {
      tl.fromTo(
        line,
        {
          attr: {
            d: start,
          },
        },
        {
          attr: {
            d: end,
          },
          ease: "Power2.easeOut",
          duration: 0.75,
        }
      );
      tl.to(
        line,
        {
          attr: {
            d: start,
          },
          ease: "elastic.out(3, 0.5)",
        },
        "<50%"
      );
      // Placeholder Shift
      tl.to(
        placeholder,
        {
          top: -15,
          left: 0,
          ease: "Power2.easeOut",
          scale: 0.7,
          duration: 0.5,
        },
        "<"
      );
    }
  });
});

form.addEventListener("click", (e) => {
  containers.forEach((container) => {
    const input = container.querySelector(".input");
    const line = container.querySelector(".elastic-line");
    const placeholder = container.querySelector(".placeholder");

    if (document.activeElement !== input) {
      if (!input.value) {
        gsap.to(placeholder, {
          top: 0,
          left: 0,
          scale: 1,
          ease: "Power2.easeOut",
        });
      }
    }
    input.addEventListener("input", (e) => {
      if (e.target.type === "text") {
        let inputText = e.target.value;
        if (inputText.length > 2) {
          // colorize
          colorize("#6391e8", line, placeholder);
        } else {
          colorize("#fe8c99", line, placeholder);
        }
      }
      if (e.target.type === "email") {
        let inputText = e.target.value;
        if (validateEmail(inputText)) {
          // colorize
          colorize("#6391e8", line, placeholder);
        } else {
          colorize("#fe8c99", line, placeholder);
        }
      }
      if (e.target.type === "tel") {
        let inputText = e.target.value;
        if (validatePhone(inputText)) {
          // colorize
          colorize("#6391e8", line, placeholder);
        } else {
          colorize("#fe8c99", line, placeholder);
        }
      }
    });
  });
});

// checking email validation

function validateEmail(email) {
  let re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// checking phone validation
function validatePhone(phone) {
  let re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return re.test(phone);
}

// colorize Function
function colorize(color, line, placeholder) {
  gsap.to(line, { stroke: color, duration: 0.75 });
  gsap.to(placeholder, { color: color, duration: 0.75 });
}

// Checkbox animation

const checkbox = document.querySelector(".checkbox");
const tl2 = gsap.timeline({
  defaults: { duration: 0.5, ease: "Power2.easeOut" },
});

const tickMarkPath = document.querySelector(".tick-mark path");
const tickMarkPathLength = tickMarkPath.getTotalLength();

gsap.set(checkbox, { opacity: 0 });
gsap.set(tickMarkPath, {
  strokeDasharray: tickMarkPathLength,
  strokeDashoffset: tickMarkPathLength,
});
checkbox.addEventListener("click", () => {
  if (checkbox.checked) {
    tl2.to(".checkbox-fill", {
      top: "0%",
    });
    tl2.fromTo(
      tickMarkPath,
      {
        strokeDashoffset: tickMarkPathLength,
      },
      { strokeDashoffset: 0 },
      "<50%"
    );
    tl2.to(
      ".checkbox-label",
      {
        color: "#6391e8",
      },
      "<"
    );
  } else {
    tl2.to(".checkbox-fill", {
      top: "100%",
    });
    tl2.fromTo(
      tickMarkPath,
      {
        strokeDashoffset: 0,
      },
      { strokeDashoffset: tickMarkPathLength },
      "<50%"
    );
    tl2.to(
      ".checkbox-label",
      {
        color: "#c5c5c5",
      },
      "<"
    );
  }
});

// Animating Character
gsap.set("#eye", { transformOrigin: "center" });
gsap.fromTo(
  "#eye",
  {
    scale: 1,
  },
  {
    scale: 0.3,
    repeat: -1,
    yoyo: true,
    repeatDelay: 1,
    ease: "Power2.easeOut",
  }
);
gsap.fromTo(
  "#eyebrow",
  {
    y: -1,
  },
  {
    y: 0,
    repeat: -1,
    yoyo: true,
    repeatDelay: 1,
    ease: "Power2.easeOut",
  }
);

const button = document.querySelector("button");
gsap.set("#hand", { transformOrigin: "left" });

button.addEventListener("click", (e) => {
  e.preventDefault();
  gsap.to(".contact-left, .contact-right", {
    y: 30,
    opacity: 0,
    duration: 0.75,
    ease: "Power2.easeOut",
    pointerEvents: "none",
  });
  gsap.to(
    "form",
    {
      scale: 0.8,
      duration: 0.75,
      ease: "Power2.easeOut",
    },
    "<"
  );
  gsap.fromTo(
    ".submitted",
    {
      y: 30,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.75,
      ease: "Power2.easeOut",
    },
    "<"
  );
  gsap.fromTo(
    "#hand",
    {
      rotation: 0,
      y: 0,
    },
    {
      rotation: -10,
      y: 2,
      duration: 2,
      ease: "elastic(3, 0.3)",
      delay: 1,
      repeat: -1,
      yoyo: true,
    }
  );
});
