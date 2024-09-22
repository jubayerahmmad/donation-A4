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

// noakhali btn event handler
document.getElementById("noakhali-btn").addEventListener("click", function () {
  const noakhaliAmount = getInputValue("noakhali-input");
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

  let currentBalance = getTextValue("total-amount");
  currentBalance -= parseFloat(noakhaliAmount);
  document.getElementById("total-amount").innerText = currentBalance;

  document.getElementById("noakhali-input").value = "";
});

// feni btn event handler
document.getElementById("feni-btn").addEventListener("click", function () {
  const feniAmount = getInputValue("feni-input");
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

  let currentBalance = getTextValue("total-amount");
  currentBalance -= parseFloat(feniAmount);
  document.getElementById("total-amount").innerText = currentBalance;

  document.getElementById("feni-input").value = "";
});

// quota btn event handler
document.getElementById("quota-btn").addEventListener("click", function () {
  const quotaAmount = getInputValue("quota-input");
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

  let currentBalance = getTextValue("total-amount");
  currentBalance -= parseFloat(quotaAmount);
  document.getElementById("total-amount").innerText = currentBalance;

  document.getElementById("quota-input").value = "";
});
