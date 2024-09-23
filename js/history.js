function appendTransactionDetails(donateAmount, title) {
  const transactionContainer = document.getElementById("history-list");

  const date = new Date().toString();
  const transactionHTML = `
        <div class="flex p-8 bg-white border rounded-2xl border-gray-900 border-opacity-10">
            <div class="flex flex-col space-y-4">
                <p class="text-xl font-bold leading-loose text-gray-900">${donateAmount} Taka is Donated for ${title}, Bangladesh</p>
                <p class="text-base font-light leading-relaxed text-gray-900 text-opacity-70">Date : ${date}</p>
            </div>
        </div>
    `;

  transactionContainer.insertAdjacentHTML("beforeend", transactionHTML);
}
