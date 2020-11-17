import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {

    constructor(agencia, numero, variacao, cliente) {
        super(agencia, numero, cliente);
        this._variacao = variacao;
        this._percJuros = 0.05; // 5%
    }

    calculaJuros() {
        return this._saldo * this._percJuros;
    }

    sacar(valor) {
        
        // método sobrescrito da classe Conta

        const taxa = 1.02;
        return this._sacar(valor, taxa);
    }
}