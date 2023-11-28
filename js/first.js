var screen1 = document.getElementById("screen")

function addText(){
    screen1.textContent=0 
}



let num =8
let num1 = 2
document.getElementById("number__1").textContent=num
document.getElementById("number__2").textContent = num1
function save() {
    var plus = num+num1
    screen1.textContent =  "the answer is : "+  plus
}
function incrementCount() {
    var plus1 = num-num1
    screen1.textContent = "the answer is : "+ plus1
}
function divide() {
    var plus2 =  num/num1
    screen1.textContent ="the anwser is " + plus2
}
function gng() {
    if (num1 === 0){
        screen1.textContent = "no value"
    }
    var plus4 = num*num1
    screen1.textContent = plus4

}
let screen2 = document.getElementById("screen2")
function last(){
    screen2.textContent += " "+ screen1.textContent
}