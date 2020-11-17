import { Cliente } from "./Cliente.js";

// Classe Conta abstrata
// Não pode ser instanciada
// diretamente, apenas herdada

export class Conta {

    static QuantidadeContas = 0;

    constructor(agencia, numero, cliente) {
        
        if (this.constructor == Conta) {
            // Classe abstrata, nao deve ser instanciada diretamente
            throw new Error("Você não deveria instanciar um objeto do tipo 'Conta' (Classe abstrata).");
        }
        
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
        // Método abstrato, 
        // deve ser sobrescrito na classe filha

        throw new Error("O método 'sacar' da classe Conta é abstrato e deve ser sobrescrito.");
    }

    _sacar(valor, taxa) {
        
        const valorSacar = valor * taxa;
        
        if (valorSacar > this._saldo) {
            return;
        }
        
        this._saldo -= valorSacar
        return valorSacar;
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
