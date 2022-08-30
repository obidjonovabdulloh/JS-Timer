const hourElement = document.querySelector(".hour")
const minuuntsElement = document.querySelector(".minute")
const secondsElement = document.querySelector(".sekund")
const millisecondsElement = document.querySelector(".milisekund")

const startElement = document.querySelector(".start")
const pauseElement = document.querySelector(".Pause")
const stopElement = document.querySelector(".Stop")
 

startElement.addEventListener("click" , () => {
    clearInterval(interval)
    interval = setInterval(startTimer , 10)
})

pauseElement.addEventListener("click" , () => {
    clearInterval(interval)
})
stopElement.addEventListener("click" , () => {
    clearInterval(interval)
    hour = 00
    minute = 00
    second = 00
    millisecond = 00
    interval
    hourElement.textContent ="00"
    minuuntsElement.textContent ="00"
    secondsElement.textContent ="00"
    millisecondsElement.textContent ="00"


})

let hour = 00,
    minute = 00,
    second = 00,
    millisecond = 00,
    interval



function startTimer() {
    millisecond++
    if(millisecond < 9) {
        millisecondsElement.innerText = "0" + millisecond
    }
    if(millisecond > 9) {
        millisecondsElement.innerText =  millisecond
    }
    if(millisecond > 99) {
        second++
        secondsElement.innerText = "0" + second
        millisecond = 0
        millisecondsElement.innerText = "0" + millisecond
    }




    // second++
    if(second < 9) {
        secondsElement.innerText = "0" + second
    }
    if(second > 9) {
        secondsElement.innerText =  second
    }
    if(second > 59 ) {
        minute++
        minuuntsElement.innerText = "0" + minute
        second = 0
        secondsElement.innerText = "0" + second
    }



    if(minute < 9) {
        minuuntsElement.innerText = "0" + minute
    }
    if(minute > 9) {
        minuuntsElement.innerText =  minute
    }
    if(minute > 60) {
        hour++
        hourElement.innerText = "0" + hour
        minute = 0
        minuuntsElement.innerText = "0" + minute
    }
}
