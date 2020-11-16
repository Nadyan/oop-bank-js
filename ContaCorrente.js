import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {

    constructor(agencia, numero, cliente) {
        super(agencia, numero, cliente);
    }
}