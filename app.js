const billInput = document.getElementById("bill-input");
const customTip_input = document.getElementById("customTip-input");
const peopleNumber_input = document.getElementById("peopleNum-input");
const tipAmount_text = document.getElementById("tip-amount");
const tipTotal_text = document.getElementById("tip-total");
const resetBtn = document.getElementById("reset-btn");
const tipPercentage_input = document.querySelectorAll(".tipPercentage-input");
const customTipInput = document.getElementById("customTip-input");
const bill_Container = document.querySelector(".bill-container");
const peopleNum_Container = document.querySelector(".peopleNum-container");
const percentage_btn_container = document.querySelectorAll(
  ".percentage-btn-container"
);

/* -------------------------------------------------------------------

                              EVENTLISTENERS

--------------------------------------------------------------------*/

billInput.addEventListener("input", updateBillValue);
customTipInput.addEventListener("input", getCustomTip);
peopleNumber_input.addEventListener("input", getPeopleNumber);
tipPercentage_input.forEach((button) => {
  button.addEventListener("click", getSelectedTipPercentage);
});
resetBtn.addEventListener("click", resetAll);

// PROCCESS VARIABLES
// 1
let billValue;
//2
let newTipPercentageValue;
//2
let tipPercentage;
//3
let peopleNumber;
//4
let tipAmount;
//5
let total;

// MAIN FUNCTIONS AND LOGIC

/*-----------------------------------------------------------------------------

                                      FUNCTIONS

------------------------------------------------------------------------------*/

// GET THE BILL VALUE & UPDATE THE 'billValue' VARIABLE

function updateBillValue() {
  billValue = billInput.value;

  if (peopleNumber == undefined) {
    total == "";
  } else {
    updateTotalMoney();
  }
  updateTipAmount();
  inputValidation(billValue, 1, bill_Container, billMessage);
}

// GET THE CUSTOM TIP PERCENTAGE FROM THE INPUT & UPDATE THE 'newtippercentagevalue' VARIABLE

function getCustomTip() {
  tipPercentage_input.forEach((element) => {
    element.checked = false;
  });
  newTipPercentageValue = customTipInput.value;
  if (newTipPercentageValue.length > 2) {
    customTipInput.value = newTipPercentageValue.slice(0, 2);
  } else {
    newtipPercentage();
  }
  inputValidation(newTipPercentageValue, 2, customTip_input, customTipMessage);
}

// GET THE TIP PERCENTAGE FROM 'BUTTONS %'  & UPDATE THE 'newtippercentagevalue' VARIABLE

function getSelectedTipPercentage() {
  const selected = document.querySelector(
    'input[name="tipPercentage"]:checked'
  );
  newTipPercentageValue = selected.value;
  newtipPercentage();

  // clear text, message, borderColor of customTipinput when the user clicks on a btn percentage
  cleatInputValidation(customTip_input, customTipMessage);
}

// UPDATE THE 'tipPercentage' VARIABLE

function newtipPercentage() {
  tipPercentage = newTipPercentageValue;

  if (billValue == undefined) {
    console.log("billValue not available");
    // setErrorMessage(1,"Cant't be Zero")
  } else {
    updateTipAmount();
  }
  if (peopleNumber !== undefined) {
    updateTotalMoney();
  } else {
    console.log("people number is required");
  }
}

// PRINT THE TIP AMOUNT VALUE IN THE CARD

function updateTipAmount() {
  if (isNaN(billValue) || isNaN(tipPercentage)) {
    tipAmount == undefined;
  } else if (billValue !== undefined && tipPercentage !== undefined) {
    tipAmount = billValue * (tipPercentage * 0.01);
    tipAmount_text.innerText = tipAmount.toFixed(1); // toFixed method to get one decimal number after the dot
  } else {
    console.log("bill or tip percentage error");
  }
}

// GET PEOPLE NUMBER FROM THE INPUT & UPDATE THE 'peopleNumber' VARIABLE

function getPeopleNumber() {
  peopleNumber = peopleNumber_input.value;
  updateTotalMoney();

  if (billValue == undefined) {
    bill_Container.style.border = "1px solid red";
    setErrorMessage(1, "Cant't be blank");
  }
  inputValidation(peopleNumber, 3, peopleNum_Container, peopleNumberMessage);
}

// PRINT  THE TOTAL MONEY VALUE IN THE CARD

function updateTotalMoney() {
  if (tipAmount !== undefined) {
    total = billValue * peopleNum + tipAmount;
    tipTotal_text.innerText = total.toFixed(1);
  } else {
    total = billValue * peopleNumber;
  }
}

/*------------------------------------------------------------------------

                           VALIDATION FUNCTIONS

----------------------------------------------------------------------*/

const billMessage = document.getElementById("billMessage");
const peopleNumberMessage = document.getElementById("pepleNum-message");
const customTipMessage = document.getElementById("selectTip-message");

// INPUTS VALIDATION

function inputValidation(value, caseNum, input, messageTag) {
  if (!value) {
    setErrorMessage(caseNum, "Cant't be blank");
    input.style.border = "1px solid red";
  } else if (value == 0) {
    setErrorMessage(caseNum, "Cant't be zero");
    input.style.border = "1px solid red";
  } else if (isNaN(value)) {
    value == "";
    setErrorMessage(caseNum, "Wrong format");
    input.style.border = "1px solid red";
  } else {
    input.style.border = "1px solid green";
    messageTag.innerText = "";
  }
}

// PRINT ERROR MESSAGE FOR SPECIFIC INPUT

function setErrorMessage(num, message) {
  switch (num) {
    case 1:
      billMessage.innerText = message;
      break;
    case 2:
      customTipMessage.innerText = message;
      break;
    case 3:
      peopleNumberMessage.innerText = message;
      break;
  }
}

// CLEAR INPUT VALIDATION

function cleatInputValidation(input) {
  input.value = "";
  input.style.border = "none";
  customTipMessage.innerText = "";
}

/* ----------------------------------

           RESET FUNCTION

------------------------------------*/

// RESET EVERY THING IN THE CARD

function resetAll() {
  tipTotal_text.innerText = 0;
  tipAmount_text.innerText = 0;
  billInput.value = "";
  customTipInput.value = "";
  peopleNumber_input.value = "";
  tipPercentage_input.forEach((element) => {
    element.checked = false;
  });
  billValue = undefined;
  tipPercentage = undefined;
  peopleNumber = undefined;
  tipAmount = undefined;
  total = undefined;
  newTipPercentageValue = undefined;
}
