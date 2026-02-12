// function handleClick(){

// }

// const handleClick = (a,b) => {
//   alert("Button clicked");
// };

// handleClick(1, ()=> console.log("hello"))

// const btn = document.getElementsByClassName("clickbtn");
// const btn1 = document.getElementById("btn");

// const btn2 = document.getElementsByTagName("button");

const btn2 = document.querySelector(".reset");
const btn3 = document.querySelector("button");
const div = document.querySelector("div");

btn3.addEventListener("click", () => {
  //   div.style.backgroundColor = "black";
  div.style.display = "none";
});

btn2.addEventListener("click", () => {
  //   div.style.backgroundColor = "white";
  div.style.display = "block";
});
