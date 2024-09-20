let addMoneyForm = document.getElementById("add-money-form");
let cashOutForm = document.getElementById("cash-out-form");

//...........Added Add Money..............

document.getElementById("add-money-btn").addEventListener("click", function () {
  addMoneyForm.classList.remove("hidden");
  cashOutForm.classList.add("hidden");
});

document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const mainBalance = document.getElementById("main-balance").innerText;
    const addMoneyAmount = document.getElementById("add-money-amount").value;
    const mainBalanceNum = parseFloat(mainBalance);
    const addMoneyAmountNum = parseFloat(addMoneyAmount);

    const pinNumber = document.getElementById("pin-number").value;

    if (pinNumber === "1234") {
      const newBalance = mainBalanceNum + addMoneyAmountNum;
      document.getElementById("main-balance").innerText = newBalance;
    } else {
      alert("Please Try Again later.");
    }

    document.getElementById("add-money-amount").value = "";
    document.getElementById("pin-number").value = "";
    // addMoneyForm.classList.add('hidden');
  });

//...........Added Cash Out..............

document.getElementById("cash-out-btn").addEventListener("click", function () {
  cashOutForm.classList.remove("hidden");
  addMoneyForm.classList.add("hidden");
});

document.getElementById("cash-out").addEventListener("click", function (event) {
  event.preventDefault();

  const mainBalance = document.getElementById("main-balance").innerText;
  const cashOutAmount = document.getElementById("cash-out-amount").value;
  const mainBalanceNum = parseFloat(mainBalance);
  const cashOutAmountNum = parseFloat(cashOutAmount);

  const pinNumber = document.getElementById("pin-number2").value;

  if (pinNumber === "1234") {
    const newBalance = mainBalanceNum - cashOutAmountNum;
    document.getElementById("main-balance").innerText = newBalance;
  } else {
    alert("Please Try Again later.");
  }

  document.getElementById("cash-out-amount").value = "";
  document.getElementById("pin-number2").value = "";
  // cashOutForm.classList.add('hidden');
});





