function displayBox(num){
    inpt.value+=num;
}
function evaluateExpression(){
    let val=inpt.value
    let result=eval(val)
    inpt.value=result
}

function clearBox(){
    inpt.value=""
}
function backk(){
    inpt.value=inpt.value.slice(0,-1)
}