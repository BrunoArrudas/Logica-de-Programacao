class MaterialBibliografico{
 constructor(titulo, autor){
  this.titulo = titulo;
  this.autor = autor;
  this.disponivel = true;
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