import { Cliente } from "./Cliente/Cliente.js"
import { ContaCorrente } from "./Conta/ContaCorrente.js"
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const cliente = new Cliente("Nadyan", "04988907454", "999999");

const cc = new ContaCorrente(1491, 22234, cliente);
const cp = new ContaPoupanca(1491, 22234, 51, cliente);

//console.log(cc);
//console.log(cp);

//cp.depositar(100);
//cp.sacar(10);
//console.log(cp.saldo);

const gerente = new Gerente("Suriel", "87452578522", 900);
const diretor = new Diretor("Nadyan", "04988907454", 1000);

gerente.cadastrarSenha("1234567");
diretor.cadastrarSenha("123456");

const loginGerente = SistemaAutenticacao.login(gerente, "1234567");
const loginDiretor = SistemaAutenticacao.login(diretor, "1236");
console.log(loginGerente, loginDiretor);

const loginCliente = SistemaAutenticacao.login(cliente, "999999");
console.log(loginCliente);
