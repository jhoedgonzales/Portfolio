const titles = ["Front End Developer", "Web Designer", "Creative Coder"];
  const typingElement = document.getElementById("typing-text");

  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentTitle = titles[titleIndex];
    const displayedText = currentTitle.substring(0, charIndex);
    typingElement.textContent = displayedText;

    if (!isDeleting && charIndex < currentTitle.length) {
      charIndex++;
      setTimeout(typeEffect, 100); // typing speed
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(typeEffect, 70); // deleting speed
    } else {
      // Pause before switching state
      isDeleting = !isDeleting;
      if (!isDeleting) {
        titleIndex = (titleIndex + 1) % titles.length;
      }
      setTimeout(typeEffect, 1000); // pause before typing/deleting
    }
  }

  window.onload = typeEffect;