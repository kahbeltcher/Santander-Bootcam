function pares (array) 
{
    let Numero = [] ;
    for ( let i = 0; i < array.length; i++){
    if(array[i] % 2 === 0){
            Numero.push(array[i]);
        }
        else {
            console.log(`${array[i]} é impar!`)
        }
    }
    console.log('Os números pares são: ' + Numero);
}
let array = [1,2,3,7,9,8,10,12];
pares(array)


