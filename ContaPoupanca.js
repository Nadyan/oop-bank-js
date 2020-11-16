import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {

    constructor(agencia, numero, variacao, cliente) {
        super(agencia, numero, cliente);
        this._variacao = variacao;
    }
}