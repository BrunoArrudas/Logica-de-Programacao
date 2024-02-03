class Pessoa {
    constructor(nome, anoNascimento) {
        this.anoNascimento = anoNascimento;
        this.nome = nome;
    }

    seApresentar(pessoa) {
        console.log(`Olá, meu nome é ${this.nome}`);
        pessoa.conhecer(this);
    }

    conhecer(pessoa) {
        console.log(`Prazer em conhece-lo ${pessoa.nome}, meu nome é ${this.nome}`);
    }

    ehAdulto(ano) {

        let ano = new Date;
        ano = ano.getFullYear();

        let adulto = ano - this.anoNascimento > 18;
        let idadePositiva = ano - this.anoNascimento >= 0; // Faz o 0 contar tambem.

        if(adulto) {
            return true;
        } else if (!adulto && idadePositiva){
            return false;
        }
         
         alert("Pessoa não era nascida nesse ano")
        //return "Pessoa não era nascida nesse ano!"
    }

}

const pessoaA = new Pessoa("Fulano" , 2000); //2000 Declarou o valor passado pela pessoa.
const pessoaB = new Pessoa("Beltrano");

pessoaA.seApresentar(pessoaB)
console.log(pessoaA.ehAdulto(2024)) //2024 Passou o parametro a ser medido.



// Jeitos diferentes de fazer a mesma verificação.
//--------------------------------------------------------------------------------//
// Outro exemplo de numero negativo
//console.log(pessoaA)

 // ehAdulto(ano) {
 //   if(ano - this.anoNascimento > 18) {
 //      return true;
 //   } else if (ano - this.anoNascimento < 18 && ano - this.anoNascimento > 0){
 //       return false;
 //   }
 //   return "Pessoa não era nascida nesse ano!"
 //  }
//-------------------------------------------------------------------------------//
 //  ehAdulto(ano) {
 //   let adulto = ano - this.anoNascimento > 18;
 //   let idadeNegativa = ano - this.anoNascimento < 0
 //    if(adulto) {
 //       return true;
 //   } else if (!adulto && !idadeNegativa){
 //       return false;
 //   }
 //   return "Pessoa não era nascida nesse ano!"
 //   }
 //------------------------------------------------------------------------------//
 //    ehAdulto(anoPessoa){
 //   if(anoPessoa - this.anoNascimento > 18){
 //       return true
 //   } else {
 //       return false
 //   }
 //   }
 //------------------------------------------------------------------------------//