//aluno é um obj que tem nome,nota e turma.
const aluno =[
    {
        nome:'Maria',
        nota:10,
        turna:'A08',
    },
    {
        nome:'Ana',
        nota:6,
        turma:'B2',
    },
    {
        nome:'Flavio',
        nota:4,
        turma:'C4',
    },
];
//função.
function alunosAprovados(arr,media){
    let aprovados=[];
    //loop
    for (i=0; i< arr.length;i++){
       const {nota,nome} = arr[i];
        if(nota >= media){
            aprovados.push(nome);
        }
    }
    return aprovados;
}
console.log(alunosAprovados(aluno,5));
