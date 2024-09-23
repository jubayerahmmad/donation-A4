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
    document.getElementById("my_modal_1").showModal();
  }

  let currentTotal = getTextValue("noakhali-amount");
  currentTotal += parseFloat(noakhaliAmount);
  document.getElementById("noakhali-amount").innerText = currentTotal;

  document.getElementById("total-amount").innerText = currentBalance;

  const title = document.getElementById("noakhali-title").innerText;
  addDonationToHistory(noakhaliAmount, title);
  document.getElementById("noakhali-input").value = "";
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
    document.getElementById("my_modal_2").showModal();
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
    document.getElementById("my_modal_3").showModal();
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
