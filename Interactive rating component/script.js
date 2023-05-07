const thankYou = document.querySelector(".thankYou")
const main = document.querySelector(".main")
const submit = document.getElementById("submit")
const rate = document.getElementById("rate")
const numOne = document.getElementById("num1")
const numTwo = document.getElementById("num2")
const numThree = document.getElementById("num3")
const numFour = document.getElementById("num4")
const numFive = document.getElementById("num5")
submit.addEventListener("click", function(){
    thankYou.classList.remove("hidden")
    main.style.display = "none"
})
numOne.addEventListener("click", function(){
    rate.textContent = "1"
})
numTwo.addEventListener("click", function(){
    rate.textContent = "2"
})
numThree.addEventListener("click", function(){
    rate.textContent = "3"
})
numFour.addEventListener("click", function(){
    rate.textContent = "4"
})
numFive.addEventListener("click", function(){
    rate.textContent = "5"
})