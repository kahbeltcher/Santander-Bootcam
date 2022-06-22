var currentNumberWrapper = document.getElementById("currentNumber");//pela o elemento em span pelo id
var currentNumber = 0; //serve como um contador
btn.onclick = function inscrement() {
  currentNumber = currentNumber + 1; // também pode ser currentNumber++
  currentNumberWrapper.innerHTML = currentNumber; 
  //faz com que o elemento mude de valor em tela recebendo o "contador" algo parecido
  if (currentNumber >= 1) {
    document.getElementById("currentNumber").style.color = "green";
    //faz o elemento mudar de cor conforme condição
  }
  if (currentNumber >= 10) {
    document.getElementById("btn").disabled = true;
    //desabilita o botão caso maior ou igual a 10
  } else if (currentNumber < 10) {
    //se menor que 10 
    document.getElementById("btn").disabled = false;
     // botão de incremento desabilitado igual a false
    document.getElementById("bt").disabled = false;
    //botão de decremento também igual a falso
  }
 
};
bt.onclick = function decrement() {
  currentNumber = currentNumber - 1;
  currentNumberWrapper.innerHTML = currentNumber;
  if (currentNumber === 0 || currentNumber < 0) {
    document.getElementById("currentNumber").style.color = "red";
  }
  if (currentNumber <= -10) {
    document.getElementById("bt").disabled = true;
  } else if (currentNumber > -10) {
    document.getElementById("btn").disabled = false;
    document.getElementById("bt").disabled = false;
  }
   /*vale os mesmo para o restante das condições.
  Fiz dessa forma pois vi que a primeira condição se >= 10 sendo verdadeira, 
  desabilitava o botão  porém a condição sendo falsa não desabilitava o botão ,
  mesmo colocando a condição btn.disabled = false 
  ainda sim o mesmo ficava desabilitado o mesmo valendo para > - 10 
  porem fazendo dessa forma resolve o problema das duas condições 
  logo tanto o botão (-) quando o (+) ficam habilitados caso os valores fujam de suas condições impostas
*/
};
