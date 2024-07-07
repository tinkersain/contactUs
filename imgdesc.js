function handleClick() {
  const input1 = document.getElementById("input1").value;
  const input2 = document.getElementById("input2").value;

  if (input1) {
    document.getElementById("data1").textContent = input1;
  }

  if (input2) {
    document.getElementById("data2").textContent = input2;
  }
}
