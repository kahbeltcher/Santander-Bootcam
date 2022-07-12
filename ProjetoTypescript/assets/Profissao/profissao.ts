
enum Profissao {
    Atriz,
    Padeiro,
    Pedreiro,
    Confeiteira,
    Desenvolvedora
}

type Pessoas = {
    nome: string,
    idade: number,
    profissao: Profissao,
}

const mahressa: Pessoas = {
    nome: 'Mahressa',
    idade: 19,
    profissao: Profissao.Atriz,
};

const rodolfo: Pessoas = {
    nome: 'Rodolfo',
    idade: 32,
    profissao: Profissao.Padeiro
};

const hyo: Pessoas = {
    nome: 'Hyo',
    idade: 22,
    profissao: Profissao.Atriz
};

const alex: Pessoas = {
    nome: "Alex",
    idade: 18,
    profissao: Profissao.Pedreiro
}
const juliana: Pessoas = {
    nome: "Juliana",
    idade: 30,
    profissao: Profissao.Confeiteira
}
const amanda: Pessoas = {
    nome: "Amanda",
    idade: 21,
    profissao: Profissao.Desenvolvedora
}
