import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente = new Cliente("Nadyan", "04994967954");
const cc = new ContaCorrente(1394, 29244, cliente);
const cp = new ContaPoupanca(1394, 29244, 51, cliente);

console.log(cc);
console.log(cp);

cp.depositar(100);
console.log(cp.calculaJuros());
