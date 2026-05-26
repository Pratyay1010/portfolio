// ======================================================
// PROJECT DATA
// ======================================================

const projects = [

  {
    title: "Safe Reinforcement Learning for Quadruped Navigation",
    desc: "Investigated safe reinforcement learning for quadruped navigation using PPO-Lagrangian under safety-constrained autonomous control environments.",
    tech: ["Safe RL", "PPO", "Gymnasium", "Robotics"],
    github: "https://github.com/Pratyay1010/Safe-RL-Quadruped-Navigation"
  },

  {
    title: "Reinforcement Learning for Visual Object Tracking",
    desc: "Explored reinforcement learning for robust visual object tracking by integrating spatial-temporal perception with sequential decision-making under occlusion and motion uncertainty.",
    tech: ["PyTorch", "PPO", "Computer Vision", "RL"],
    github: "https://github.com/Pratyay1010/RL-Visual-Object-Tracking"
  },

  {
    title: "Embedded Vision for Real-Time 3D Print Monitoring",
    desc: "Developed deployment-aware computer vision pipelines on Sony IMX500 AI camera hardware for real-time defect detection under edge-compute and latency constraints in autonomous manufacturing systems.",
    tech: ["Sony IMX500", "Embedded Vision", "Edge AI", "YOLO"],
    github: "https://github.com/Pratyay1010/embedded-vision-3d-print-monitoring"
  },

  {
    title: "Robust Perception Under Foggy Environments",
    desc: "Benchmarked CNN, transformer, and open-vocabulary detection models under degraded foggy urban environments to analyze robustness in adverse perception conditions.",
    tech: ["Computer Vision", "Benchmarking", "Transformers"],
    github: "https://github.com/Pratyay1010/foggy-perception-benchmark"
  },

  {
    title: "Vision-Language Learning for Mammography Analysis",
    desc: "Explored open-vocabulary lesion grounding in mammography using vision-language learning pipelines built on GroundingDINO and multimodal representation alignment.",
    tech: ["Vision-Language Models", "GroundingDINO", "Medical AI"],
    github: "https://github.com/Pratyay1010/Vision-Language-Mammography-Detection"
  },

  {
    title: "Multi-Agent Reinforcement Learning in Competitive Environments",
    desc: "Investigated multi-agent reinforcement learning through competitive Pong environments to study emergent coordination and adaptive policy learning.",
    tech: ["Multi-Agent RL", "PettingZoo", "PyTorch"],
    github: "https://github.com/Pratyay1010/Multi-Agent-Pong-RL"
  }

];

// ======================================================
// DOM ELEMENTS
// ======================================================

const body =
  document.body;

const projectGrid =
  document.getElementById("projectGrid");

const themeToggle =
  document.getElementById("themeToggle");

const mobileMenuBtn =
  document.getElementById("mobileMenuBtn");

const mobileMenu =
  document.getElementById("mobileMenu");

const navbar =
  document.querySelector(".navbar-custom");

const profileImage =
  document.querySelector(".hero-image img");

const navLinks =
  document.querySelectorAll(
    'a[href^="#"]'
  );

// ======================================================
// RENDER PROJECTS
// ======================================================
function renderProjects() {

  if (!projectGrid) return;

  projectGrid.innerHTML = projects.map(project => `

    <div class="card-modern flex flex-col justify-between">

      <div>

        <h3 class="text-lg font-bold mb-3 leading-snug">
          ${project.title}
        </h3>

        <p class="text-sm leading-relaxed opacity-85 mb-5">
          ${project.desc}
        </p>

      </div>

      <div>

        <div class="flex flex-wrap gap-2 mb-5">

          ${project.tech.map(t => `
            <span class="badge">${t}</span>
          `).join("")}

        </div>

        <a
          href="${project.github}"
          target="_blank"
          class="btn-outline inline-flex items-center px-4 py-2 text-sm"
        >
          View Project
        </a>

      </div>

    </div>

  `).join("");

}

renderProjects();

// ======================================================
// THEME TOGGLE
// ======================================================

let darkMode =
  localStorage.getItem("theme") !== "light";

function applyTheme() {

  if (darkMode) {

    body.classList.add("dark");

    if (themeToggle) {
      themeToggle.innerHTML = "☀️";
    }

  } else {

    body.classList.remove("dark");

    if (themeToggle) {
      themeToggle.innerHTML = "🌙";
    }

  }

}

applyTheme();

themeToggle?.addEventListener(
  "click",
  () => {

    darkMode = !darkMode;

    localStorage.setItem(
      "theme",
      darkMode ? "dark" : "light"
    );

    applyTheme();

  }
);

// ======================================================
// MOBILE MENU
// ======================================================

mobileMenuBtn?.addEventListener(
  "click",
  () => {

    mobileMenu.classList.toggle(
      "active"
    );

  }
);

document
  .querySelectorAll("#mobileMenu a")
  .forEach((link) => {

    link.addEventListener(
      "click",
      () => {

        mobileMenu.classList.remove(
          "active"
        );

      }
    );

  });

// ======================================================
// CLOSE MOBILE MENU ON OUTSIDE CLICK
// ======================================================

document.addEventListener(
  "click",
  (e) => {

    if (
      mobileMenu &&
      mobileMenuBtn &&
      !mobileMenu.contains(e.target) &&
      !mobileMenuBtn.contains(e.target)
    ) {

      mobileMenu.classList.remove(
        "active"
      );

    }

  }
);

// ======================================================
// SMOOTH SCROLL
// ======================================================

navLinks.forEach((link) => {

  link.addEventListener(
    "click",
    function (e) {

      const targetId =
        this.getAttribute("href");

      if (!targetId.startsWith("#"))
        return;

      const target =
        document.querySelector(targetId);

      if (!target)
        return;

      e.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }
  );

});

// ======================================================
// ACTIVE NAVIGATION
// ======================================================

const sections = [
  "home",
  "research",
  "projects",
  "publications",
  "experience",
  "contact"
];

function updateActiveNav() {

  let current = "";

  sections.forEach((section) => {

    const element =
      document.getElementById(section);

    if (!element) return;

    const sectionTop =
      element.offsetTop - 140;

    const sectionHeight =
      element.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY <
      sectionTop + sectionHeight
    ) {

      current = section;

    }

  });

  navLinks.forEach((link) => {

    const href =
      link.getAttribute("href")
      ?.replace("#", "");

    if (href === current) {

      link.classList.add(
        "text-purple-500"
      );

      link.classList.remove(
        "opacity-70"
      );

    } else {

      link.classList.remove(
        "text-purple-500"
      );

      link.classList.add(
        "opacity-70"
      );

    }

  });

}

window.addEventListener(
  "scroll",
  updateActiveNav
);

window.addEventListener(
  "load",
  updateActiveNav
);

// ======================================================
// PROFILE IMAGE FALLBACK
// ======================================================

if (profileImage) {

  profileImage.onerror = () => {

    profileImage.src =
      "https://placehold.co/500x500?text=PD";

  };

}

// ======================================================
// HERO IMAGE MICRO INTERACTION
// ======================================================

if (profileImage) {

  profileImage.addEventListener(
    "mousemove",
    (e) => {

      if (window.innerWidth < 1024)
        return;

      const rect =
        profileImage.getBoundingClientRect();

      const x =
        e.clientX -
        rect.left -
        rect.width / 2;

      const y =
        e.clientY -
        rect.top -
        rect.height / 2;

      profileImage.style.transform = `
        perspective(1000px)
        rotateY(${x / 35}deg)
        rotateX(${-y / 35}deg)
        translateY(-4px)
      `;

    }
  );

  profileImage.addEventListener(
    "mouseleave",
    () => {

      profileImage.style.transform = `
        perspective(1000px)
        rotateY(0deg)
        rotateX(0deg)
        translateY(0px)
      `;

    }
  );

}

// ======================================================
// REVEAL ANIMATION
// ======================================================

function initRevealAnimation() {

  const revealItems =
    document.querySelectorAll(
      ".section-box, .card-modern"
    );

  const observer =
    new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform =
              "translateY(0px)";

          }

        });

      },

      {
        threshold: 0.08
      }

    );

  revealItems.forEach((item) => {

    item.style.opacity = "0";

    item.style.transform =
      "translateY(24px)";

    item.style.transition =
      "opacity .7s ease, transform .7s ease";

    observer.observe(item);

  });

}

window.addEventListener(
  "load",
  initRevealAnimation
);

// ======================================================
// NAVBAR SHADOW
// ======================================================

window.addEventListener(
  "scroll",
  () => {

    if (!navbar) return;

    if (window.scrollY > 10) {

      navbar.style.boxShadow =
        "0 10px 35px rgba(0,0,0,0.18)";

    } else {

      navbar.style.boxShadow = "";

    }

  }
);

// ======================================================
// RESIZE FIX
// ======================================================

window.addEventListener(
  "resize",
  () => {

    if (
      window.innerWidth > 768 &&
      mobileMenu
    ) {

      mobileMenu.classList.remove(
        "active"
      );

    }

  }
);
