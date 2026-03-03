// const btn1 = document.querySelector("#greenbtn");
// const btn2 = document.querySelector("#bluebtn");
// const btn3 = document.querySelector("#redbtn");
// const btn4 = document.querySelector("#yellowbtn");
// const body = document.querySelector("body")

// btn1.addEventListener ("click", () => {
//     alert("BackgroundColor is green.");
//   body.style.backgroundColor = "green";
// });

// btn2.addEventListener ("click", () => {
//     alert("BackgroundColor is blue.");
//   body.style.backgroundColor = "blue";
// });

// btn3.addEventListener ("click", () => {
//     alert("BackgroundColor is red.");
//   body.style.backgroundColor = "red";
// });

// btn4.addEventListener ("click", () => {
//     alert("BackgroundColor is yellow.");
//   body.style.backgroundColor = "yellow";
// });


 const body = document.querySelector("body")

 const changeColor = (color) => {
    body.style.backgroundColor = color;
 }