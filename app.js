let input = document.getElementById("screen")

let numbers = document.querySelectorAll(".number")
let operators = document.querySelectorAll(".operator")

let buttonClearAll = document.querySelector("#clear-all")
let buttonClear = document.querySelector("#clear")
let buttonEqual= document.getElementById("equal")

let operator = ""
let num1 = "" 

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click",function(){
        input.value += numbers[i].innerHTML
    })
}
for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click",function(){
        operator = operators[i].innerHTML
        num1 =Number(input.value) 
        input.value = ''
    })
}

buttonClearAll.addEventListener("click",function(){
    input.value= ""
})
buttonClear.addEventListener("click",function(){
    input.value= input.value.slice(0,-1);
})

buttonEqual.addEventListener('click',function(){
    let num2 = Number(input.value)
    let result;

    operator == "+" ? result = num1 + num2 :
    operator == "-" ? result = num1 - num2 :
    operator == "/" ? result = num1 / num2 :
    operator == "*" ? result = num1 * num2 :
    operator == "%" ? result = num1 % num2 : console.log("empty operator");
    
    input.value = result

})




