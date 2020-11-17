import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente = new Cliente("Nadyan", "04988907454");
const cc = new ContaCorrente(1491, 22234, cliente);
const cp = new ContaPoupanca(1491, 22234, 51, cliente);

//console.log(cc);
//console.log(cp);

cp.depositar(100);
cp.sacar(10);
console.log(cp.saldo);
