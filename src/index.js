// const gallery = document.querySelector(".gallery");

// // Pause scrolling when hovering over the gallery
// gallery.addEventListener("mouseenter", () => {
//   gallery.classList.add("paused");
// });

// // Resume scrolling when the mouse leaves the gallery
// gallery.addEventListener("mouseleave", () => {
//   gallery.classList.remove("paused");
// });
        document.querySelectorAll(".accordion-button").forEach((button) => {
          button.addEventListener("click", function () {
            const icon = this.querySelector(".accordion-icon");
            icon.textContent = icon.textContent === "+" ? "-" : "+";
          });
        });