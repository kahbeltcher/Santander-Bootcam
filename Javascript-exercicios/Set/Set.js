const myArray = [30,30,40,5,200,200,160,10,5];
function valoresUnicos(arr){
    const mySet = new Set(arr);
    return [...mySet];
}
console.log(valoresUnicos(myArray));