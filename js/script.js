const scrollElements = document.querySelectorAll(".hide");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("show", entry.isIntersecting);
  });
});

scrollElements.forEach((element) => observer.observe(element));
