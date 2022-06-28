function calculaIdade(anos){
    return `Daqui a ${anos},anos, ${this.nome} terá ${
        this.idade + anos} anos de idade.`;
}
const pessoaOne = {
    nome:'Bruna',
    idade:30,
};
const pessoaTwo = {
    nome:'Fabiola',
    idade:15,
};
const anima = {
    nome:'Lana',
    idade:9,
    raca:'maltês',
};
console.log(calculaIdade.call(pessoaOne,30));
console.log(calculaIdade.apply(anima,[3]));