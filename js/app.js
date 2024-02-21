document.getElementById("bold").addEventListener("click", function () {
  const text = getTextArea("text-area");
  text.style.fontWeight = "bold";
});
document.getElementById("italic").addEventListener("click", function () {
  const text = getTextArea("text-area");
  text.style.fontStyle = "italic";
});
document.getElementById("underline").addEventListener("click", function () {
  const text = getTextArea("text-area");
  text.style.textDecoration = "underline";
});
document.getElementById("left").addEventListener("click", function () {
  const text = getTextArea("text-area");
  text.style.textAlign = "left";
});
document.getElementById("center").addEventListener("click", function () {
  const text = getTextArea("text-area");
  text.style.textAlign = "center";
});
document.getElementById("right").addEventListener("click", function () {
  const text = getTextArea("text-area");
  text.style.textAlign = "right";
});
document.getElementById("justify").addEventListener("click", function () {
  const text = getTextArea("text-area");
  text.style.textAlign = "justify";
});

document
  .getElementById("number-field")
  .addEventListener("keypress", function (event) {
    const text = getTextArea("text-area");
    text.style.fontSize = event.target.value + "px";
  });

  document.getElementById("color-field").addEventListener("change", function (event) {
    const text = getTextArea("text-area");
    text.style.color = event.target.value;
  })
