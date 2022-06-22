var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;
btn.onclick = function inscrement() {
  currentNumber = currentNumber + 1;
  currentNumberWrapper.innerHTML = currentNumber;
  if (currentNumber >= 1) {
    document.getElementById("currentNumber").style.color = "green";
  }
  if (currentNumber >= 10) {
    document.getElementById("btn").disabled = true;
  } else if (currentNumber < 10) {
    document.getElementById("btn").disabled = false;
    document.getElementById("bt").disabled = false;
  }
};
bt.onclick = function decrement() {
  currentNumber = currentNumber - 1;
  currentNumberWrapper.innerHTML = currentNumber;
  if (currentNumber == 0 || currentNumber < 0) {
    document.getElementById("currentNumber").style.color = "red";
  }
  if (currentNumber <= -10) {
    document.getElementById("bt").disabled = true;
  } else if (currentNumber > -10) {
    document.getElementById("btn").disabled = false;
    document.getElementById("bt").disabled = false;
  }
};
