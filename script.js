const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop; //initial position of the navbar
const sections = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll(".navbar-link");
const progress = document.querySelector(".progress-bars-wrapper");
const progressPercent = document.querySelectorAll(".progress-percent");
const progressPercentageValue = [97, 89, 85, 87, 80, 70, 50];

window.addEventListener("scroll", () => {
  // Run functionFn upon scroll
  mainFn();
});

const mainFn = () => {
  if (window.pageYOffset >= navbarOffsetTop) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

  //Check if user has scrolled to a section
  sections.forEach((section, i) => {
    if (window.pageYOffset >= section.offsetTop - 10) {
      //removes the class change from all navbarLinks
      navbarLinks.forEach((navbarLink) => {
        navbarLink.classList.remove("change");
      });

      //adds the class change to highlight the navLink of the current section
      navbarLinks[i].classList.add("change");
    }
  });

  //Progress Bars
  if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
    progressPercent.forEach((el, i) => {
      el.style.width = `${progressPercentageValue[i]}%`;

      //access <span> elements to display %value
      el.previousElementSibling.firstElementChild.textContent =
        progressPercentageValue[i];
    });
  }
};

// Run function mainFn before user scroll
mainFn();

//Reload page when window is resized
window.addEventListener("resize", () => {
  window.location.reload();
});
