document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');
  const header = document.querySelector('.header');
  let isScrollingByClick = false;

  // Manual click event
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');

      isScrollingByClick = true;

      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 80,
          behavior: 'smooth'
        });
      }

      setTimeout(() => {
        isScrollingByClick = false;
      }, 800);
    });
  });

  // Scroll Spy & Navbar Background Effect
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY || window.pageYOffset;

    // Update header background
    if (scrollPos > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Scroll Spy logic
    if (isScrollingByClick) return;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');

      if (scrollPos >= sectionTop && scrollPos < sectionTop + section.offsetHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
});

// Scroll Reveal
ScrollReveal({
  distance: '50px',
  duration: 1000,
  delay: 200,
  reset: false, // if true, animation repeats when element re-enters
  afterReveal: function(el) {
    el.style.transform = '';
  }
});

// Reveal sections
ScrollReveal().reveal('.service-content, skills-content h1, projects h2', { origin: 'top' });
ScrollReveal().reveal('.about-img img', { origin: 'left' });
ScrollReveal().reveal('.about-content', { origin: 'right' });
ScrollReveal().reveal('.services-box, .skill-card, .tools-card', { origin: 'bottom', interval: 100 });
ScrollReveal().reveal('.project-box', { origin: 'bottom', interval: 100 });
ScrollReveal().reveal('.contact-content, .contact-form', { origin: 'left' });


// Form Section
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const message = document.getElementById("formMessage");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const data = new FormData(form);

      fetch(form.action, {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          message.textContent = "Thank you! Your message has been sent.";
          message.style.color = "lightgreen";
          form.reset();
        } else {
          message.textContent = "Oops! Something went wrong.";
          message.style.color = "red";
        }
      });
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menu-icon");
  const navbar = document.querySelector(".navbar");

  menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });

  // Optional: Close menu on link click
  const navLinks = document.querySelectorAll(".navbar .nav-link");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navbar.classList.remove("active");
    });
  });
});
