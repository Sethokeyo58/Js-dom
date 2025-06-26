function changeText() {
    let heading = document.getElementById("title");
    heading.textContent = "Text Changed!";
}

function changeColor() {
    let elements = document.getElementsByClassName("message");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.color = "red";
    }
}

function makeBold() {
    let items = document.getElementsByTagName("li");
    for (let i = 0; i < items.length; i++) {
        items[i].style.fontWeight = "bold";
    }
}

function highlight() {
    let firstPara = document.querySelector(".info");
    firstPara.style.backgroundColor = "yellow";
    firstPara.style.color = "red"
}

function underlineText() {
    let paragraphs = document.querySelectorAll(".para");
    paragraphs.forEach((p) => {
        p.style.textDecoration = "underline";
    });

}

function changeHTML() {
    let div = document.getElementById("content");
    div.innerHTML = "New <i>HTML</i> Content";
}

function showInnerText() {
    let text = document.getElementById("text").innerText;
    alert(text);
}


const banner = document.getElementById("banner");
banner.style.color = "red";
banner.style.backgroundColor = "yellow";
banner.style.textAlign = "center";

const boxes = document.getElementsByClassName("box");
for (let box of boxes) {
    box.style.border = "1px solid green";
    box.style.padding = "20px"
}

const text2 = document.getElementById("text2");
console.log(text2.textContent);

const text3 = document.getElementById("text3");
console.log(text2.innerText);

const text4 = document.getElementById("text4");
// text4.textContent = "Set with textContent";
text4.innerText = "Set with innerText";

const box = document.getElementById("box");
box.classList.add("highlight");