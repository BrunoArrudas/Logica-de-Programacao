class MaterialBibliografico{
 constructor(titulo, autor){
  this.titulo = titulo;
  this.autor = autor;
  this.disponivel = true;
 }

 realizarEmprestimo() {
    if (this.disponivel == true) {
        this.disponivel = false;
        return true; //Emprestimo realizado com sucesso
    } else if (this.disponivel == false) {
        return false; //Material já emprestado
    }
}

realizarDevolucao() {
    if(this.disponivel == false) {
        this.disponivel = true;
        return true; //Devolução realizada com sucesso
    } else {
        return false; //Material já devolvido previamente
    }
}

}

class Livro extends MaterialBibliografico{
  constructor(titulo, autor, genero){
   super(titulo,autor);
   this.genero = genero;
  }
}

class Revista extends MaterialBibliografico{
  constructor(titulo, autor,categoria){
    super(titulo, autor);
    this.categoria = categoria;
  }

}