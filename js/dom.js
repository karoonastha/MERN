// function handleClick(){

// }

// const handleClick = (a,b) => {
//   alert("Button clicked");
// };

// handleClick(1, ()=> console.log("hello"))

// const btn = document.getElementsByClassName("clickbtn");
// const btn1 = document.getElementById("btn");

// const btn2 = document.getElementsByTagName("button");

// const btn2 = document.querySelector(".reset");
// const btn3 = document.querySelector("button");
// const div = document.querySelector("div");

// const red = document.querySelector(".red");

// const color = document.querySelectorAll(".color");
// const body = document.querySelector("body");

// for (let i = 0; i < color.length; i++) {
//   color[i].addEventListener("click", () => {
//     body.style.backgroundColor = color[i].innerHTML.toLowerCase();
//   });
// }

div.innerHTML = "Hello World";
// btn3.addEventListener("click", () => {
//   //   div.style.backgroundColor = "black";
//   div.style.display = "none";
// });

// btn2.addEventListener("click", () => {
//   //   div.style.backgroundColor = "white";
//   div.style.display = "block";
// });

// const changeColor = (color) => {
//   div.style.backgroundColor = color;
// };

const sidebar = document.querySelector(".sidebar");
// const btn = document.querySelector(".icon");
const cross = document.querySelector(".cross");

const bar = document.querySelector(".bar");
bar.addEventListener("click", () => {
  // sidebar.style.marginLeft = "-8rem";
  // sidebar.classList.add("toggle");
  sidebar.classList.toggle("toggle");
  // cross.style.display = "none";
  // bar.style.display = "block";
});
// bar.addEventListener("click", () => {
//   // sidebar.style.marginLeft = "-8rem";
//   // sidebar.classList.add("toggle");
//   sidebar.classList.remove("toggle");
//   cross.style.display = "block";
//   bar.style.display = "none";
// });
