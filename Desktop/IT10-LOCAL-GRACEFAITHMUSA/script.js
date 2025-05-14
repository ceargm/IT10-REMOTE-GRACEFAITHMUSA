let fontSelect = document.getElementById("fontSelect");
let displayText = document.getElementById("displayText");

let sizeSelect = document.getElementById("sizeSelect");

fontSelect.addEventListener("click", function() {
    const selectedFont = fontSelect.value;
    displayText.style.fontFamily = selectedFont;
});


sizeSelect.addEventListener("click", function() {
    const selectedSize = sizeSelect.value;
    displayText.style.fontSize = selectedSize;
});