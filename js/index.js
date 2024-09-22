// Sticky NavBer
document.addEventListener("scroll", function () {
  const headernavbar = document.getElementById("headernavbar");
  const navbar = document.getElementById("navbar");

  if (window.scrollY > 50) {
    headernavbar.classList.add("backdrop-blur-lg", "bg-white/70", "shadow-lg");
    navbar.classList.remove("bg-red-50");
  } else {
    headernavbar.classList.remove(
      "backdrop-blur-lg",
      "bg-white/70",
      "shadow-lg"
    );
    navbar.classList.add("bg-red-50");
  }
});
