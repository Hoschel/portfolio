document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Project items hover effect
const projectItems = document.querySelectorAll(".project-item");
projectItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.style.transform = "scale(1.02)";
  });
  item.addEventListener("mouseleave", () => {
    item.style.transform = "scale(1)";
  });
});
