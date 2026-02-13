const  container = document.querySelector(".container")
 
const btn1 = document.getElementById('open')
const btn2 = document.getElementById('close')

btn1.addEventListener ("click", ()=>{
    container.style.display = ("block")
})

btn2.addEventListener ("click", ()=>{
    container.style.display = ("none")
})


