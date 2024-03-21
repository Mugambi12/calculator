function calculate(operation) {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  const url = `/${operation}?num1=${num1}&num2=${num2}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("result").innerHTML = `Result: ${data.result}`;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
