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

    toString(){
        return `Numero: ${this.numero} - Saldo: ${this.saldo} - Cliente: ${this.cliente.nome}` 
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

    atualizarSeletorClientes();
    exibirClientes();
}

// Exibir clientes cadastrados
function exibirClientes() {
    const clientesList = document.getElementById("clientesList");
    // Limpar a lista antes de exibir os clientes
    clientesList.innerHTML = "";

    for (let i = 0; i < clientes.length; i++) {
        const clienteItem = document.createElement("li");
        clienteItem.textContent = `Nome: ${clientes[i].nome} - CPF: ${clientes[i].cpf}`;
        clientesList.appendChild(clienteItem);
    }
}

function atualizarSeletorClientes(){
    const seletorClientes = document.getElementById("cliente");

    clientes.forEach(cliente =>{
        const option = document.createElement("option");
        option.value = cliente.cpf;
        option.textContent = cliente.nome;
        seletorClientes.appendChild(option);
});
}


function cadastrarConta(){
    //Pegar os dados da tela
    const numero = parseInt(document.getElementById("numero").value);
    const saldo = parseFloat(document.getElementById("saldo").value);
    const tipoConta = document.getElementById("tipoConta").value;

    //Identificar o cliente selecionado na lista de clientes
    const clienteSelecionado = document.getElementById("cliente").value;
    const cliente = clientes.find(c => c.cpf === clienteSelecionado);

    //instanciar uma nova conta, a partir do tipo de conta selecionada
    
    let conta;
    switch(tipoConta){
        case "ContaCorrente":
            conta = new ContaCorrente(cliente,numero,saldo,100); //Opçoes dos clientes.
            break;
        case "ContaPoupança":
            conta = new ContaPoupanca(cliente, numero, saldo, 0.01);
            break;
        default:
            alert("tipo selecionado invalido!");
            break;
    }
    contas.push(conta);

    exibirContas();

    document.getElementById("contaForm").reset();
}

function exibirContas() {
    const contasList = document.getElementById("contasList");
    // Limpar a lista antes de exibir as contas
    contasList.innerHTML = "";

    for (let i = 0; i < contas.length; i++) {
        const contaItem = document.createElement("li");
        const contaCard = criarContaCard(contas[i]);
        contasList.appendChild(contaCard);
        contasList.appendChild(contaItem);
    }
}

function criarContaCard(conta) {
    const contaCard = document.createElement("div");
    contaCard.className = "conta-card";

    const detalhesConta = document.createElement("div");
    detalhesConta.textContent = conta.toString();
    contaCard.appendChild(detalhesConta);

    return contaCard;
}




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
