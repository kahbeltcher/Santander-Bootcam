export class ContaBancaria {

    private _saldo: number //encapsulamento
    private _numeroConta:string
    private _agencia:string 

    constructor(){

        this._saldo = 0;// this faz referencia ao objeto saldo.
        this._numeroConta='00000-0'
        this._agencia='0000'

    }

    get numero():string {
        return this._numeroConta;
    }
    set numero(valor:string){
        const regex = /^\d{5}-\d{1}$/ 
        if(regex.test(valor)){
            this._numeroConta = valor
        }else {
            console.log(`Formato numero inválido!`)
        }
    }
    get agencia():string {
        return this._agencia;
    }
    set agencia(valor:string){
        const regex = /^\d{4}$/ 
        if(regex.test(valor)){
            this._agencia = valor
        }else {
            console.log(`Formato numero inválido!`)
        }
    }

    consultar():number{
        return this._saldo;//retorna o saldo
    }
    depositar(valor:number):boolean{
        if(valor >= 0){
            this._saldo+=valor;
            return true
        }
        return false
    }
    sacar(valor:number):boolean{
        if(valor >=0 && this._saldo >=valor){
            this._saldo -=valor;
            return true
        }
        return false
    }
}
