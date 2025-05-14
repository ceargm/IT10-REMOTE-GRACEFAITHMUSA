let fontSelect = document.getElementById("fontSelect");
let displayText = document.getElementById("displayText");

fontSelect.addEventListener("click", function() {
    const selectedFont = fontSelect.value;
    displayText.style.fontFamily = selectedFont;
});