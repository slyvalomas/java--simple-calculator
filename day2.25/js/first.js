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
// practice
let age = Math.floor(Math.random()*150  )+1
console.log(age)
if (age>=21){
console.log("your age is "+age+" years old you can join")
}else{  
    
    var needAge=21-age
    console.log("your age is "+age+" years old sorry you cant join come after "+ needAge+ " years")}
if (age<100){

    var needYears=100-age 
    console.log("sorry you are "+age+" you are not elegible to get the car from the king you need to wait for "+ needYears +" years" )
}else if (age ===100){
    console.log("happy 100 years mr you are "+age+"years old you are elegible you can have the card ")

}    else{
    var moreYears = age-100;
    console.log("your age is "+age+" years old sorry you cant get a card from the king because you get one "+ moreYears+ " years ago")}


