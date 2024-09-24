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

// Button - Using toggle
function toggleSections(showSectionId) {
  const sectionIds = ["donation-section", "history-section"];
  const btnIds = ["donation-btn", "history-btn"];

  sectionIds.forEach((id) => {
    if (id === showSectionId) {
      document.getElementById(id).classList.remove("hidden");
    } else {
      document.getElementById(id).classList.add("hidden");
    }
  });

  function toggleActiveButton(activeBtnId) {
    btnIds.forEach((btnId) => {
      if (btnId === activeBtnId) {
        document.getElementById(btnId).classList.add("bg-btn-primary");
        document
          .getElementById(btnId)
          .classList.remove(
            "border",
            "border-gray-900",
            "border-opacity-30",
            "text-opacity-70"
          );
      } else {
        document.getElementById(btnId).classList.remove("bg-btn-primary");
        document
          .getElementById(btnId)
          .classList.add(
            "border",
            "border-gray-900",
            "border-opacity-30",
            "text-opacity-70"
          );
      }
    });
  }

  return { toggleSections, toggleActiveButton };
}

// Set up event listeners for buttons
const toggleFunctions = toggleSections("donation-section");
document.getElementById("donation-btn").addEventListener("click", () => {
  toggleFunctions.toggleSections("donation-section");
  toggleFunctions.toggleActiveButton("donation-btn");
});

const historyToggleFunctions = toggleSections("history-section");
document.getElementById("history-btn").addEventListener("click", () => {
  historyToggleFunctions.toggleSections("history-section");
  historyToggleFunctions.toggleActiveButton("history-btn");
});

document.getElementById("blog").addEventListener("click", function () {
  window.location.href = "./blog.html";
});

// Initialize the default active button
document.addEventListener("DOMContentLoaded", function () {
  toggleFunctions.toggleSections("donation-section");
  toggleFunctions.toggleActiveButton("donation-btn");
});

// function updateDonationMessage(title) {
//   const donationMessage = document.getElementById("donation-message");
//   donationMessage.textContent = `You Have Donated for ${title}`;
// }
