import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {

    constructor(agencia, numero, cliente) {
        super(agencia, numero, cliente);
    }

    sacar(valor) {
        
        // método sobrescrito da classe Conta

        const taxa = 1.1;
        return this._sacar(valor, taxa);
    }
}