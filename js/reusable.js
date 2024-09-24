// Reusable donation handler function
function handleDonation(donateInputId, balanceId, totalDonateId, description) {
  return function (event) {
    event.preventDefault();

    const donateAmount = document.getElementById(donateInputId).value;
    const donateNumber = parseFloat(donateAmount);
    const balanceElement = document.getElementById(balanceId);
    const balance = parseFloat(balanceElement.innerText);

    const donationModal = document.getElementById("donation-modal");
    const donationError = document.getElementById("donation-error");
    const donationMessage = document.getElementById("donation-message");
    const donationWarningMessage = document.getElementById(
      "donation-warning-message"
    );

    if (!donateNumber || isNaN(donateNumber) || donateNumber <= 0) {
      donationWarningMessage.innerText =
        "Please enter a valid positive number for donation.";
      donationError.showModal();
      return;
    }

    const newBalance = balance - donateNumber;

    if (newBalance < 0) {
      donationWarningMessage.innerText =
        "You cannot donate more than your available balance.";
      donationError.showModal();
      return;
    }

    balanceElement.innerText = newBalance;

    const totalDonationElement = document.getElementById(totalDonateId);
    const previousDonation = parseFloat(totalDonationElement.innerText) || 0;
    totalDonationElement.innerText = previousDonation + donateNumber;

    appendTransactionDetails(donateNumber, description);

    donationMessage.innerText = `Thank you for your donation of ${donateNumber} ৳`;
    donationModal.showModal();
  };
}

document.getElementById("close-confirm").addEventListener("click", function () {
  const donationModal = document.getElementById("donation-modal");
  donationModal.close();
});

document.getElementById("close-again").addEventListener("click", function () {
  const donationErrorModal = document.getElementById("donation-error");
  donationErrorModal.close();
});

document
  .getElementById("donate-now-noakhali")
  .addEventListener(
    "click",
    handleDonation(
      "donate-noakhali",
      "account-balance",
      "total-donate-noakhali",
      "Aid for Flood at Noakhali"
    )
  );

document
  .getElementById("donate-now-feni")
  .addEventListener(
    "click",
    handleDonation(
      "donate-feni",
      "account-balance",
      "total-donate-feni",
      "Flood Relief in Feni"
    )
  );

document
  .getElementById("donate-now-quota")
  .addEventListener(
    "click",
    handleDonation(
      "donate-quota-protest",
      "account-balance",
      "total-donate-quota",
      "Aid for Injured in the Quota Movement"
    )
  );
