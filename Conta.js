import { Cliente } from "./Cliente.js";

export class Conta {

    static QuantidadeContas = 0;

    constructor(agencia, numero, cliente) {
        this._agencia = agencia;
        this._numero = numero;
        if (cliente instanceof Cliente) {
            this._cliente = cliente;
        } else {
            this._cliente = null;
        }
        this._saldo = 0;
        Conta.QuantidadeContas++;
    }

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get saldo() {
        return this._saldo
    }

    get cliente() {
        return this._cliente;
    }

    get numero() {
        return this._numero;
    }

    get agencia() {
        return this._agencia;
    }

    sacar(valor) {
        if (valor > this._saldo) {
            return;
        }
        this._saldo -= valor;
        return this._saldo;
    }

    depositar(valor) {
        if (valor <= 0) {
            return
        }
        this._saldo += valor;
        return this._saldo;
    }

    transferir(valor, conta) {
        if (valor <= 0) {
            return;
        }
        this.sacar(valor);
        conta.depositar(valor);
        return valor;
    }
}
