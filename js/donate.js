document
  .getElementById("donate-now-noakhali")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const donateAmount = document.getElementById("donate-noakhali").value;
    const donateNumber = parseFloat(donateAmount);
    const balanceElement = document.getElementById("account-balance");
    const balance = parseFloat(balanceElement.innerText);

    if (isNaN(donateNumber) || donateNumber <= 0) {
      alert("Please enter a valid positive number for donation.");
      return;
    }

    const newBalance = balance - donateNumber;

    if (newBalance < 0) {
      alert("You cannot donate more than your available balance.");
      return;
    }

    balanceElement.innerText = newBalance;

    const totalDonationElement = document.getElementById(
      "total-donate-noakhali"
    );
    const previousDonation = parseFloat(totalDonationElement.innerText) || 0;
    totalDonationElement.innerText = previousDonation + donateNumber;

    appendTransactionDetails(donateNumber, "Aid for Flood at Noakhali");
  });
