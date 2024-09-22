// get input value
function getInputValue(inputId) {
  const inputValue = parseFloat(document.getElementById(inputId).value);
  return inputValue;
}

// get text value
function getTextValue(textId) {
  const textValue = parseFloat(document.getElementById(textId).innerText);
  return textValue;
}

//add classList
function addClassList(id) {
  document
    .getElementById(id)
    .classList.add("bg-green-300", "hover:bg-green-400");
}

// remove classList
function removeClassList(id) {
  document
    .getElementById(id)
    .classList.remove("bg-green-300", "hover:bg-green-400");
}

// add donation to history
function addDonationToHistory(amount, title) {
  const div = document.createElement("div");
  div.classList.add(
    "mt-5",
    "space-y-3",
    "p-3",
    "border-2",
    "border-gray-200",
    "rounded-xl"
  );
  div.innerHTML = `
    <h1 class="text-xl font-semibold">${amount} BDT is Donated for ${title}</h1>
    <p class="text-sm">Date: ${new Date().toLocaleDateString()}</p>
  `;
  document.getElementById("history-section").appendChild(div);
}
// noakhali btn event handler
document.getElementById("noakhali-btn").addEventListener("click", function () {
  const noakhaliAmount = getInputValue("noakhali-input");
  let currentBalance = getTextValue("total-amount");
  if (currentBalance < noakhaliAmount) {
    alert("You don't have enough balance to donate");
    return;
  }
  currentBalance -= parseFloat(noakhaliAmount);

  if (noakhaliAmount <= 0 || isNaN(noakhaliAmount)) {
    alert("Please enter a valid amount");
    return;
  } else {
    // alert("You have successfully donated for flood relief in Noakhali");
    document.getElementById("my_modal_3").showModal();
  }

  let currentTotal = getTextValue("noakhali-amount");
  currentTotal += parseFloat(noakhaliAmount);
  document.getElementById("noakhali-amount").innerText = currentTotal;

  document.getElementById("total-amount").innerText = currentBalance;

  const title = document.getElementById("noakhali-title").innerText;
  addDonationToHistory(noakhaliAmount, title);
  document.getElementById("noakhali-input").value = "";

  // const div = document.createElement("div");
  // div.classList.add(
  //   "mt-10",
  //   "space-y-6",
  //   "p-3",
  //   "border-2",
  //   "border-gray-200",
  //   "rounded-xl"
  // );
  // div.innerHTML = `
  // <h1>${noakhaliAmount} BDT is Donated for ${title}</h1>
  // `;
  // document.getElementById("history-section").appendChild(div);
});

// feni btn event handler
document.getElementById("feni-btn").addEventListener("click", function () {
  const feniAmount = getInputValue("feni-input");
  let currentBalance = getTextValue("total-amount");
  if (currentBalance < feniAmount) {
    alert("You don't have enough balance to donate");
    return;
  }
  currentBalance -= parseFloat(feniAmount);
  if (feniAmount <= 0 || isNaN(feniAmount)) {
    alert("Please enter a valid amount");
    return;
  } else {
    // alert("You have successfully donated for flood relief in Feni");
    document.getElementById("my_modal_4").showModal();
  }

  let currentTotal = getTextValue("feni-amount");
  currentTotal += parseFloat(feniAmount);
  document.getElementById("feni-amount").innerText = currentTotal;

  document.getElementById("total-amount").innerText = currentBalance;
  const title = document.getElementById("feni-title").innerText;
  addDonationToHistory(feniAmount, title);

  document.getElementById("feni-input").value = "";
});

// quota btn event handler
document.getElementById("quota-btn").addEventListener("click", function () {
  const quotaAmount = getInputValue("quota-input");
  let currentBalance = getTextValue("total-amount");
  if (currentBalance < quotaAmount) {
    alert("You don't have enough balance to donate");
    return;
  }
  currentBalance -= parseFloat(quotaAmount);
  if (quotaAmount <= 0 || isNaN(quotaAmount)) {
    alert("Please enter a valid amount");
    return;
  } else {
    // alert("You have successfully donated for flood relief in Quota");
    document.getElementById("my_modal_2").showModal();
  }

  let currentTotal = getTextValue("quota-amount");
  currentTotal += parseFloat(quotaAmount);
  document.getElementById("quota-amount").innerText = currentTotal;

  document.getElementById("total-amount").innerText = currentBalance;
  const title = document.getElementById("quota-title").innerText;
  addDonationToHistory(quotaAmount, title);

  document.getElementById("quota-input").value = "";
});

// history tab event handler
document.getElementById("history-btn").addEventListener("click", function () {
  addClassList("history-btn");
  removeClassList("donation-btn");
  document.getElementById("cards-container").classList.add("hidden");
  document.getElementById("footer").classList.add("hidden");
  document.getElementById("history-section").classList.remove("hidden");
});

// donation tab event handler
document.getElementById("donation-btn").addEventListener("click", function () {
  addClassList("donation-btn");
  removeClassList("history-btn");
  document.getElementById("cards-container").classList.remove("hidden");
  document.getElementById("footer").classList.remove("hidden");
  document.getElementById("history-section").classList.add("hidden");
});

// blog btn event handler
document.getElementById("blog-btn").addEventListener("click", function () {
  window.location.href = "./blog.html";
});
