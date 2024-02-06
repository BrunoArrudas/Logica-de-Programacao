class Cliente {
    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }
}

class Conta {
    constructor(cliente, numero, saldo) {
        this.cliente = cliente;
        this.numero = numero;
        this.saldo = saldo;
    }

    sacar(valorSaque) {
        if (this.saldo >= valorSaque && valorSaque > 0) {
            this.saldo -= valorSaque;
            return true;
        }

        return false;
    }

    depositar(valorDeposito) {
        if (valorDeposito > 0) {
            this.saldo += valorDeposito;
            return true;
        }

        return false;
    }

    transferir(valorTransferencia, conta) {
        //se consigo sacar dessa conta
        //posso depositar na conta destino
        if (this.sacar(valorTransferencia)) {
            conta.depositar(valorTransferencia)
            return true;
        }

        return false;
    }
}

class ContaCorrente extends Conta {
    constructor(cliente, numero, saldo, limiteChequeEspecial) {
        super(cliente, numero, saldo);
        this.limiteChequeEspecial = limiteChequeEspecial;
    }

    sacar(valorSaque) {
        //Somar o valor do cheque especial ao valor do saldo.
        //Verificar se pode sacar com base nessa soma.
        const valorlimiteEspecial = this.saldo + this.limiteChequeEspecial;

        if (valorSaque <= valorlimiteEspecial) {
            return super.sacar(valorSaque);
        }
        return false

    }
}

class ContaPoupanca extends Conta {
    constructor(cliente, numero, saldo, taxaRendimento) {
        super(cliente, numero, saldo);
        this.taxaRendimento = taxaRendimento;
    }

    aplicarRendimento() {
        this.saldo += this.saldo * this.taxaRendimento;
    }
}

let contas = [];
let clientes = [];

function cadastrarCliente(){
    //Pegar dados da tela
    const nome = document.getElementById("nomeCliente").value;
    const cpf = document.getElementById("cpfCliente".value);

    //Instanciar novo cliente
    const cliente = new Cliente(nome, cpf);
    
    //Adicionar esse cliente a lista de clientes
    clientes.push(cliente);
}

console.log(clientes);



//let clienteA = new Cliente("Fulano","1234567890");
//clientes.push(clienteA);

//let clienteB = new Cliente("Beltrano","0987654321");
//clientes.push(clienteB);

//let contaX = new ContaCorrente(clienteA, 123, 100, 150);
//contas.push(contaX);

//let contaY = new ContaPoupanca(clienteB, 111, 100, 0.01);
//contas.push(contaY);

//contaY.transferir(50, contaX);

//console.log("Conta Y: ", contaY);
//console.log("Conta X: ", contaX);

//let contaZ = new ContaCorrente(clienteB, 235, 0, 180);
//contas.push(contaZ);

//console.log(contaY.cliente.nome); Separando por pontos, eu consigo localizar o cliente ou seja o valor desejado.
