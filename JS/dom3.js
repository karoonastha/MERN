const htmlbtn = document.getElementById("htmlbtn")
const cssbtn = document.getElementById("cssbtn")

const container = document.getElementById("content")

htmlbtn.addEventListener("click", () => {
    htmlbtn.style.backgroundColor = "green";
    cssbtn.style.backgroundColor = "red";
    container.innerHTML = "This is HTML."
})

cssbtn.addEventListener("click", () => {
    htmlbtn.style.backgroundColor = "red";
    cssbtn.style.backgroundColor = "green";
    container.innerHTML = "This is CSS."
})
