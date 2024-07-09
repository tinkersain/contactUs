function addContent() {
  const input1 = document.getElementById("input1").value;
  const input2 = document.getElementById("input2").value;

  document.getElementById("data1").textContent = input1;

  const img1 = document.createElement("img");
  img1.src = input2;
  img1.alt = "Dynamic Image";
  img1.style.width = "100%";
  img1.style.height = "100%";

  const image1Box = document.getElementById("image1");
  image1Box.innerHTML = "";
  image1Box.appendChild(img1);

  const img2 = document.createElement("img");
  img2.src = input2;
  img2.alt = "Dynamic Image";
  img2.style.width = "100%";
  img2.style.height = "100%";

  const image2Box = document.getElementById("image2");
  image2Box.innerHTML = "";
  image2Box.appendChild(img2);
}

function removeContent() {
  document.getElementById("input1").value = "";
  document.getElementById("input2").value = "";

  document.getElementById("data1").textContent = "Data";

  const image1Box = document.getElementById("image1");
  image1Box.innerHTML = "Image";

  const image2Box = document.getElementById("image2");
  image2Box.innerHTML = "Image";
}
