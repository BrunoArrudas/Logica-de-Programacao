/*
#Parte 1:
    - Crie uma classe Veiculo
    - Adicione as propriedades: marca, modelo, preco, cor, autonomia, capacidadeTanque, imagemURL
    - Adicione um metodo calcularDistanciaMaxia, que retornará a autonomia * capacidadeTanque
    - Adicione um metodo exibirDetalhes, que retornará os dados concatenados de:
        * marca, modelo, cor, preco.toFixed(2)

Parte 2:
    - Crie uma função cadastrarVeiculo
*/

class Veiculo {
    constructor(marca, modelo, preco, cor, autonomia, capacidadeTanque, imagemURL) {
        this.marca = marca;
        this.modelo = modelo;
        this.preco = preco;
        this.cor = cor;
        this.autonomia = autonomia;
        this.capacidadeTanque = capacidadeTanque;
        this.imagemURL = imagemURL;
    }

    calcularDistanciaMaxima() {
        return this.autonomia * this.capacidadeTanque;
    }

    exibirDetalhes() {
        return `${this.marca} ${this.modelo} - ${this.cor} - R$ ${this.preco.toFixed(2)}`;
    }
}

let veiculos = [];

// Função para cadastrar veículo
function cadastrarVeiculo() {
    //recebimento de valores do HTML
    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;
    const preco = parseFloat(document.getElementById("preco").value);
    const cor = document.getElementById("cor").value;
    const autonomia = parseInt(document.getElementById("autonomia").value);
    const capacidadeTanque = parseInt(document.getElementById("capacidadeTanque").value);
    const imagemURL = document.getElementById("imagemURL").value;    

    // Instanciar um novo objeto veículo, passando os valores pedidos no construtor
    const veiculo = new Veiculo(marca, modelo, preco, cor, autonomia, capacidadeTanque, imagemURL);

    // Adicionar o veículo a nossa lista "banco de dados"
    veiculos.push(veiculo);

    // Atualiza a exibição
    exibirVeiculos()
    //console.log(veiculos);

    // Limpar formulário
    document.getElementById("veiculoForm").reset();
}

function exibirVeiculos(){
    const veiculosList = document.getElementById("veiculosList");
    // Limpar a lista antes de exibir a lista de veiculos
    veiculosList.innerHTML = ""; // Limpar a lista

    for (let i = 0; i < veiculos.length; i++) {
        const veiculoItem = document.createElement("li");
        const veiculoCard = criarVeiculoCard(veiculos[i]);
        veiculosList.appendChild(veiculoCard); //Passando imagens da função criarVeiculoCard.
        veiculosList.appendChild(veiculoItem);
    }

}

function criarVeiculoCard(veiculo){
    const veiculoCard = document.createElement("div");
    veiculoCard.className = "veiculo-card" //Puxa a classe CSS.

    const imagemVeiculo = document.createElement("img");
    imagemVeiculo.src = veiculo.imagemURL;
    imagemVeiculo.className = "veiculo-imagem";
    imagemVeiculo.alt = `${veiculo.marca} ${veiculo.modelo}`;
    veiculoCard.appendChild(imagemVeiculo);

    const detalhesVeiculo = document.createElement("div");
    detalhesVeiculo.textContent = veiculo.exibirDetalhes() + ` - Distância máxima: ${veiculo.calcularDistanciaMaxima()} km`;
    veiculoCard.appendChild(detalhesVeiculo);

    return veiculoCard;
}


//veiculos.push( new Veiculo("Audi","A3", 100000, "cinza", 12, 100, "www.url.com"));
//console.log(veiculos);