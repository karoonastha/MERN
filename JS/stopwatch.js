const hour = document.querySelector("#hour")
const min = document.querySelector("#min")
const sec = document.querySelector("#sec")


const play = document.querySelector("#play")
const pause = document.querySelector("#pause")
const reset = document.querySelector("#reset")


let h = 0;
let m = 0;
let s = 0;

const playbtn = () => {
    interval = setInterval(() => {
        s++;
        sec.innerHTML = s;
        if (s >= 60) {
            s = 0;
            m++;
            min.innerHTML = m;
        }
        if (m >= 60) {
            m = 0;
            h++;
            hour.innerHTML = h;
        }
    }, 1000);
}

const pausebtn = () => {
    clearInterval(interval);
};

const resetbtn = () => {
    let h = 00;
    let m = 00;
    let s = 00;
     clearInterval(interval);
    sec.innerHTML = s;
    min.innerHTML = m;
    hour.innerHTML = h;
}



