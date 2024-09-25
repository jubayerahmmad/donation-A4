// get input value
function getInputValue(Id) {
  const inputValue = Number(document.getElementById(Id).value);
  return inputValue;
}

// get text value
function getTextValue(Id) {
  const textValue = Number(document.getElementById(Id).innerText);
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
      <h3 class="text-xl font-semibold">${amount} BDT is Donated for ${title}</h3>
      <p class="text-sm">Date: ${new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
      })}</p>
    `;
  document.getElementById("history-section").appendChild(div);
}
