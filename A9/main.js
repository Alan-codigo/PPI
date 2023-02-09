
function sumaraltotal(value) {
  document.querySelector("#display").innerHTML += value;
}

function calculate() {
  const expression = document.querySelector("#display").innerHTML;

  const result = eval(expression);

  document.querySelector("#display").innerHTML = result;
}