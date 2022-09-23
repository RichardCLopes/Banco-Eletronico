class Conta {
  extrato = new Array();

  constructor(num, nome, saldo, lim_e, lim_t, limite) {
    this._num = num;
    this._nome = nome;
    this._saldo = saldo;
    this._lim_e = lim_e;
    this._lim_t = lim_t;
    this._limite = limite
  }

  get num() {
    return this._num;
  }

  set num(num) {
    this._num = num;
  }

  get nome() {
    return this._nome;
  }

  set nome(nome) {
    this._nome = nome;
  }

  get saldo() {
    return this._saldo;
  }

  set saldo(saldo) {
    this._saldo = saldo;
  }

  get extrato() {
    return this.extrato;
  }

  get lim_e() {
    return this._lim_e;
  }

  set lim_e(lim_e) {
    this._lim_e = lim_e;
  }

  get lim_t() {
    return this._lim_t;
  }

  set lim_t(lim_t) {
    this._lim_t = lim_t;
  }

  get limite() {
    return this._limite;
  }

  set limite(limite) {
    this._limite = limite;
  }

  addExtrato(movimentacao) {
    this.extrato.unshift(movimentacao);
  }
}
