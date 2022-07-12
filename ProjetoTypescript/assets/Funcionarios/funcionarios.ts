const funcionario = {
    codigo: 1,
    nome: 'Marcos'
};

const funcionario2: {codigo: number, nome: string} = {
    codigo: 2,
    nome: 'Pedro'
}

interface Funcionario {  
    codigo: number,
    nome: string
};

const funcionarioObjeto = {} as Funcionario;
funcionarioObjeto.codigo = 1;
funcionarioObjeto.nome = 'Marcos';

const funcionarioObjeto2: Funcionario = {
    codigo: 2,
    nome: 'Pedro'
}