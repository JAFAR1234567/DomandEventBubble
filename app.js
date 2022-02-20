const parentDiv = document.querySelector(".parent");
const childDiv = document.querySelectorAll(".childdiv");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
parentDiv.style.border = "2px solid red";
parentDiv.style.padding = "30px";

function setChildStyle(child) {
  child.style.border = "2px solid green";
  child.style.marginBottom = "12px";
  child.style.padding = "12px";
}
childDiv.forEach((child) => {
  setChildStyle(child);
});

btn1.addEventListener("click", (e) => {
  const createDiv = document.createElement("div");
  createDiv.classList.add("childdiv");
  createDiv.innerHTML = ` <h1>title-2</h1>
    <p>Quasi a maxime deserunt sapiente dolorum. Consequatur saepe quos nostrum error quidem. Sapiente temporibus cumque, a nisi quos aliquid quae sint voluptatibus adipisci voluptatum officiis odit expedita praesentium repellendus dolores?</p>`;
  parentDiv.insertBefore(createDiv, parentDiv.children[5]);
  setChildStyle(createDiv);
});

parentDiv.addEventListener("click", (e) => {
  // e.stopPropagation();
  if (e.target.classList.contains("childdiv")) {
    e.target.style.backgroundColor = "yellow";
  } else if (e.target.parentNode.classList.contains("childdiv")) {
    console.log(e.target.parentNode);
    e.target.parentNode.style.backgroundColor = "yellow";
  }
});

//
const person = [
  { singer: "Atif aslam", address: "23 something street" },
  { singer: "Atif aslam", address: "25 something street" },
];
// console.log(person[0].address);
const player = { name: { firstName: "Mashrafe", lastName: "Murtaza" }, age: 38};

const {name:{firstName} = {}} = player;
console.log(firstName);