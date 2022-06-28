// solução um.
function verificaPalindromo(string){
    //se diferente de true.
    if (!string) return 'string inexistente';

    //se igual a true
    return string.split('').reverse().join('') === string;
}
console.log(verificaPalindromo('ama'));

//solução dois.
function verificaPalindromo2(string){
    if (!string) return 'string inexistente';

    //loop
    for(let i=0;i < string.length /2;i++){
        //condição
        if(string[i]!==string[string.length -1 -i]){
            return false;
        }
    }
    return true;
}
console.log(verificaPalindromo2('abba'))