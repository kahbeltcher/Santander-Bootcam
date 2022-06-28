function SomaNum(arr){
    return arr.reduce(function(prev,current){
        console.log({prev})
        console.log({current})
        return prev + current;
    });
}
const array = [1,2];
console.log('Soma:',SomaNum(array));
console.log('---------------')

const lista = [
    {
        nome:'Sabao',
        preco:12,
    },
    {
        nome:'Cereal',
        preco:20,
    },
    {
        nome:'Mochila',
        preco:100,
    },
];
const saldoDispo = 230;
function CalculaSaldo(saldoDispo,lista){
    return lista.reduce(function(prev,current,index){
        console.log('rodada',index+1);
        console.log({prev});
        console.log({current});
        return prev-current.preco;
    },saldoDispo);
}
console.log(CalculaSaldo(saldoDispo,lista));