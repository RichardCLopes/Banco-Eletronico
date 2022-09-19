class Conta {
    constructor(num, nome, saldo){
        this._num = num;
        this._nome = nome;
        this._saldo = saldo;
    }
     
    get num(){
        return this._num;
    }

    set num(num){
        this._num = num;
    }

    get nome(){
        return this._nome;
    }

    set nome(nome){
        this._nome = nome;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(saldo){
        this._saldo = saldo;
    }
}