function calculateSum() {
  const num1 = document.getElementById("input1").value;
  const num2 = document.getElementById("input2").value;
  const sum = document.getElementById("finalSum");
  sum.innerHTML = Number(num1) + Number(num2);
}
