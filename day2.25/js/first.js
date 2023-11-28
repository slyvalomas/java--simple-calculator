let firstCard = Math.floor(Math.random()*10)+2
let secondCard = Math.floor(Math.random()*10)+2
let bunnsCard = Math.floor(Math.random()*10)+2
let sum = firstCard +secondCard + bunnsCard
console.log(firstCard)
console.log(secondCard)
console.log(sum)
console.log(bunnsCard)

function gamble(){
    var counter1 =document.getElementById("counter1")
    var counter2 =document.getElementById("counter2")
    var counter3 =document.getElementById("counter3")
    var results =document.getElementById("resoltes")
    counter1.textContent=firstCard
    counter2.textContent=secondCard
    counter3.textContent=bunnsCard
    results.textContent = sum
    if (sum>21){
        document.getElementById("comment").textContent="you lose"
    }   else if (sum===21){
        document.getElementById("comment").textContent="you win"
    }   else if (sum<21){
        document.getElementById("comment").textContent="you still good"
    }


}
function reset(){
    var counter1 =document.getElementById("counter1")
    var counter2 =document.getElementById("counter2")
    var counter3 =document.getElementById("counter3")

    counter1.textContent=0
    counter2.textContent=0
    counter3.textContent=0
    document.getElementById("comment").textContent=""
}




