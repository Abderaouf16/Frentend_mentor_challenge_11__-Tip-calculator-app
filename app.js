const billInput = document.getElementById("bill-input");
const customTip_input = document.getElementById("customTip-input");
const peopleNumber_input = document.getElementById("peopleNum-input");
const tipAmount_text = document.getElementById("tip-amount");
const tipTotal_text = document.getElementById("tip-total");
const resetBtn = document.getElementById("reset-btn");
const tipPercentage_input = document.querySelectorAll(".tipPercentage-input");
const customTipInput = document.getElementById("customTip-input");

// UNCHECK TIP PERCENTAGE BTN IF THE USER CLICKS ON THE TIP CUSTOM INPUT

customTipInput.addEventListener("click", function () {
  tipPercentage_input.forEach((element) => {
    element.checked = false;
  });
});

// PROCCESS VARIABLES
// 1
let billValue;
//2
let tipPercentage;
//4
let peopleNumber;
//5
let tipAmount;
//6
let total;

let newtippercentagevalue;


// GET THE BILL VALUE & UPDATE THE 'billValue' VARIABLE  

billInput.addEventListener("input", function updateBillValue() {
  billValue = billInput.value;
  if (tipPercentage == undefined) {
    console.log("tippercentage not available");
  } else {
    updateTipAmount();
    updateTotalMoney();
  }
});


// GET THE CUSTOM TIP PERCENTAGE FROM THE INPUT & UPDATE THE 'newtippercentagevalue' VARIABLE 

customTipInput.addEventListener("input", function () {
  newtippercentagevalue = customTipInput.value;
  newtippercentage();
});



// GET THE TIP PERCENTAGE FROM 'BUTTONS %'  & UPDATE THE 'newtippercentagevalue' VARIABLE 

tipPercentage_input.forEach((element) => {
  element.addEventListener("click", function () {
    const selected = document.querySelector(
      'input[name="tipPercentage"]:checked'
    );
    newtippercentagevalue = selected.value;
    newtippercentage();
  });
});

// UPDATE THE 'tipPercentage' VARIABLE

function newtippercentage() {
  tipPercentage = newtippercentagevalue;

  if (billValue == undefined) {
    console.log("billValue not available");
  } else {
    updateTipAmount();
  }
  if(peopleNumber !== undefined){
    updateTotalMoney()
  }else{
    console.log('people number is required')

  }
}




// PRINT THE TIP AMOUNT VALUE IN THE CARD

function updateTipAmount() {
  if (billValue !== undefined && tipPercentage !== undefined) {
    tipAmount = billValue * (tipPercentage * 0.01);
    tipAmount_text.innerText = tipAmount;
  } else {
    console.log("bill or tip percentage error");
  }
}

// GET PEOPLE NUMBER FROM THE INPUT & UPDATE THE 'peopleNumber' VARIABLE 

peopleNumber_input.addEventListener("input", function () {
  peopleNumber = peopleNumber_input.value;
  updateTotalMoney();
});


// PRINT  THE TOTAL MONEY VALUE IN THE CARD

function updateTotalMoney() {
  if (tipAmount) {
    total = tipAmount * peopleNumber;
    tipTotal_text.innerText = total;
  } else {
    console.log("there is no tipAmount");
  }
}

