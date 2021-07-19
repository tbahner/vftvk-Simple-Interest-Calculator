function compute() {
  //Get the values and calculate
  var principal = document.getElementById("principal").value;
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;
  var interest = principal * years * rate / 100;
  var year = new Date().getFullYear() + parseInt(years);

  //Create the interest text
  document.getElementById("result").innerHTML = "If you deposit the amount of " + principal + ",\<br\>at an interest rate of " + rate + "%\<br\>You will receive an amount of <mark>" + interest + "</mark>,\<br\>in the year " + year + "\<br\>"
}

//Update the slider value
function updateRate() {
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = rateval;
}

//Check for positive values
function validateAmount() {
  var principal = document.getElementById("principal").value;
  var biggerThanZero = parseInt(principal) > 0;
  if (!biggerThanZero) {
    alert("Enter a positive number");
    document.getElementById("principal").focus();
  }
}
