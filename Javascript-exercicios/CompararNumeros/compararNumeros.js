function comparaNumeros(numero1, numero2) {
  const pFrase = PrimeiraFrase(numero1, numero2);
  const sFrase = SegundaFrase(numero1, numero2);

  return `${pFrase} ${sFrase}`;
}

function PrimeiraFrase(numero1, numero2) {
  let pFrase = `Os números ${numero1} e ${numero2}`;
  let sim_nao = "não";

  if (numero1 === numero2) {
    sim_nao = "";
  }

  return `${pFrase} ${sim_nao} são iguais.`;
}

function SegundaFrase(numero1, numero2) {
  const soma = numero1 + numero2;
  let comparaOne = "menor";
  let comparaTwo = "menor";

  if (soma > 10) {
    comparaOne = "maior";
  }

  if (soma > 20) {
    comparaTwo = "maior";
  }

  return `Sua soma é ${soma}, que é ${comparaOne} do que 10 e ${comparaTwo} do que 20.`;
}

console.log(comparaNumeros(2, 5));
