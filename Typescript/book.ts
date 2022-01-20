export class Book{
    //Declaración de atributos
    private title:string;
    private nPages:number;
    private isbn:string;
    private author:string;
    private editorial:string;

    //Constructor
    constructor (titulo:string,numeroPag:number,isbn:string,autor:string,edit:string){
        this.title = titulo;
        this.nPages = numeroPag;
        this.isbn = isbn;
        this.author = autor;
        this.editorial = edit;
    }

    //Getters y Setters metodos publicos
    
    //Devuelve el titulo
    public getTitle():string
    {
        return this.title;
    }

    //Modifica el titulo
    public setTitle(nuevoTitulo:string):void
    {
        this.title = nuevoTitulo;
    }

    //Devuelve el número de paginas
    public getNPages():number
    {
        return this.nPages;
    }

    //Modifica el número de páginas
    public setNPages(x:number):void
    {
        this.nPages = x;
    }

    //Devuelve el isbn
    public getIsbn():string
    {
        return this.isbn;
    }

    //Modifica el isbn
    public setIsbn(nuevoIsbn:string):void
    {
        this.isbn = nuevoIsbn;
    }

    //Devuelve el autor
    public getAuthor():string
    {
        return this.author;
    }

    //Modifica el autor.
    public setAuthor(nuevoAutor:string):void
    {
        this.author = nuevoAutor;
    }

    //Devuelve la editorial
    public getEditorial():string
    {
        return this.editorial;
    }

    //Modifica la editorial
    public setEditorial(nuevaEditorial:string):void
    {
        this.editorial = nuevaEditorial;
    }

    public toString():string
    {
        return "Title - "+ this.title +"\n" + "Number of Pages - " + this.nPages +"\n"+ "ISBN - " + this.isbn +"\nAuthor - "+this.author+"\nEditorial - "+ this.editorial;   
    }
}