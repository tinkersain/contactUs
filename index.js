// const button11 = document.getElementById("close-btn");
// const parent = document.getElementById("parent");

// button11.addEventListener("click", () => {
//   if (parent.classList.contains("hide-class")) {
//     parent.classList.remove("hide-class");
//   } else {
//     parent.classList.add("hide-class");
//   }
// });

// const inputt = document.getElementById("text-inp");
// const button = document.getElementById("submit-btn");

// button.addEventListener("click", () => {
//   const name = inputt.value;
//   console.log(name);
//   inputt.value = "";
// });
const input1 = document.getElementById("name");
const input2 = document.getElementById("suggested");
const button = document.getElementById("submit-btn");
button.addEventListener("click", () => {
  const name = input1.value;
  const suggested = input2.value;
  console.log(name, suggested);
});
