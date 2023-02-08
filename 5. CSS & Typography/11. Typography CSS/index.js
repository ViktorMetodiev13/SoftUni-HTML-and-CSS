document.getElementById("clickMeButton").addEventListener("click", onClick);
let p = document.getElementById("emptyParagraph");

function onClick(e) {
    e.preventDefault;
    p.textContent = 'I am clicked';
}
