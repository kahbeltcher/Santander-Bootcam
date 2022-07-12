let input1 = document.getElementById('input1');  
let input2 = document.getElementById('input2');
let button = document.getElementById('button');
let resultado = document.getElementById('resultado');
var container = document.querySelector('.container')
function stopDefAction(Event) {
  Event.preventDefault();
}

 function somatotal(){
    let input1Val = parseInt(input1.value);
    let input2Val = parseInt(input2.value);
    let soma = input1Val + input2Val;
    document.getElementById('resultado').value = soma;  
}
     
     
document.getElementById('button').addEventListener('click', stopDefAction, false );

button.addEventListener('click', ()=>{
  somatotal();

});
