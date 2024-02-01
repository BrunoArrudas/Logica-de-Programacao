/*
#Parte 1:
    - Crie uma classe Veiculo
    - Adicione as propriedades: marca, modelo, preco, cor, autonomia, capacidadeTanque, imagemURL
    - Adicione um metodo calcularDistanciaMaxia, que retornará a autonomia * capacidadeTanque
    - Adicione um metodo exibirDetalhes, que retornará os dados concatenados de:
        * marca, modelo, cor, preco.toFixed(2)
*/


class Veiculo{
    constructor(marca, modelo, preco, cor, autonomia, capacidadeTanque,imagemURL){
        this.marca = marca;
        this.modelo = modelo;
        this.preco = preco;
        this.cor = cor;
        this.autonomia = autonomia;
        this.capacidadeTanque = capacidadeTanque;
        this.imagemURL = imagemURL;
    }

    calcularDistanciaMaxima(){
        return this.autonomia * this.capacidadeTanque;
    }

    exibirDetalhes(){
        return `${this.marca} - ${this.modelo} - ${this.cor} - R$ ${this.preco.toFixed(2)}`
    }
}

let veiculos = [];

veiculos.push( new Veiculo("Fiat","Uno", 60000, "branco", 16, 90, "www.url.com"));
veiculos.push( new Veiculo("Bmw","320i", 120000, "preto", 10, 120, "www.url.com"));
veiculos.push( new Veiculo("Audi","A3", 100000, "cinza", 12, 100, "www.url.com"));

console.log(veiculos);