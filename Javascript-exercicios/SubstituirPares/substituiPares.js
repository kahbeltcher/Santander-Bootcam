function substituiPares(arr) {
  //loop
  if (!arr) return -1;
  if (!arr.length) return -1;

  for (let i = 0; i < arr.length; i++) {
    //primeira condição.
    if (arr[i] === 0) {
      console.log("você já é zero");
      //segunda condição.
    } else if (arr[i] % 2 === 0) {
      console.log(`Substituindo ${arr[i]} por 0...`);
      arr[i] = 0; //substitui o valor na posição por 0
    }
  }
  return arr;
}
let array = [1, 2, 4, 0, 6, 7, 8, 9];
console.log(substituiPares(array));
