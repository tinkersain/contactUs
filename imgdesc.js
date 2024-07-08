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

/* For Dynamic insertion */

/* let state = true;
function addInParentContent(state, input1, input2) {
  const content1 = `<div class="content1">
          <div class="data" id="data1">${input1}</div>
          <div class="image" id="image1">
            <img
              src=${input2}
              alt="Book Cover 1"
            />
          </div>
        </div>`;

  const content2 = `<div class="content2">
          <div class="image" id="image2">
            <img
              src=${input2}
              alt="Book Cover 2"
            />
          </div>
          <div class="data" id="data2">${input1}</div>
        </div>`;

  const parentContent = document.getElementById("parentContent");
  if (state) parentContent.innerHTML += content1;
  else parentContent.innerHTML += content2;
}

function handleClick() {
  const input1 = document.getElementById("input1").value;
  const input2 = document.getElementById("input2").value;
  if (input1.length === 0 || input2.length === 0) {
    alert("Please fill both the fields !");
  } else {
    addInParentContent(state, input1, input2);
    state = !state;
  }
} */
