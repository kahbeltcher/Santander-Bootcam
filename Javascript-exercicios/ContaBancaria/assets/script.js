class ContaBank{
    constructor(agencia,saldo,tipo,numero){
        this.agencia = agencia;
        this.saldo = saldo;
        this.tipo = tipo;
        this.numero = numero;
    }
    get saldo (){
        return this.saldo;
    }
    set saldo (valor){
        this.saldo = valor;
    }

    sacar (valor){
        if(valor > this.saldo) {
            return 'Saldo insuficiente'
        }
        this.saldo = this.saldo - valor;
        return this.saldo;

    }
    depositar(valor) {
        this.saldo = this.saldo + valor;
        return this.saldo;
    }
}
class ContaCorrente extends ContaBank {
    constructor(agencia,saldo,cartaoCred){
        super(agencia,saldo);
        this.tipo = 'Corrente';
        this.cartaoCred = cartaoCred;
    }
    get cartaoCred() {
        return this.cartaoCred;
    }
    set cartaoCred(valor){
        this.cartaoCred =valor;
    }
}
class ContaPoupança extends ContaBank {
    constructor(agencia,saldo){
        super(agencia,saldo);
        this.tipo = 'Poupança';
    }
    
}
class ContaUniver  extends ContaBank{
    constructor(agencia,saldo){
        super(agencia,saldo);
        this.tipo = 'Universitaria';
    }
    sacar(valor){
        if(valor <= 500){
            this.saldo = this.saldo - valor;
        }
        else {
            return 'Operação negada!'
        }

    }
    
}