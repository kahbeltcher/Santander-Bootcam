const banana ={
    value:2,
};
const morango ={
    value:4,
};
function mapWith(arr,thisArg){
    return arr.map(function(item){
     return   item * this.value;
    },thisArg);
}

const numeros =[1,2];
console.log('this -> banana',mapWith(numeros,banana));
console.log('this -> morango',mapWith(numeros,morango));


function MapSem (arr){
   return arr.map(function(item){
    return item * 2;
    });
}
const num = [2,4,5,8,10];
console.log('ARRAY * 2 -->',MapSem(num));
console.log('ARRAY original -->',num);