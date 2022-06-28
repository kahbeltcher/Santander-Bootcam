function filtraPares(arr){
    return arr.filter(callback);
}

function callback(item){
    return item % 2 === 0;

}
const myArr = [2,6,4,7,9,2];
console.log('Pares:',filtraPares(myArr));