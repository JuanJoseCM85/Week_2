import { Book } from "./book";

export class Library{

    //Declaración de atributos.
    private books:Book[];
    private address:string;
    private manager:string;

    //Constructor
    constructor(libros:Book[],direccion:string,manager:string)
    {
        this.books = libros;
        this.address = direccion;
        this.manager = manager;
    }

    //Getters y Setters de addres y manager
    public getAddress():string
    {
        return this.address;
    }

    public getManager():string
    {
        return this.manager;
    }

    public setAddress(nuevaDireccion:string):void
    {
        this.address = nuevaDireccion;
    }

    public setManager(nuevoManager:string):void
    {
        this.manager = nuevoManager;
    }

    public toString():string
    {
        let i:number;
        i=1;
        let resultado:string;
        resultado="";        
        for (let lib of this.books){
            resultado += "Book"+ i + ":\n" + lib.toString() +"\n";
        }

        return resultado;
    }

    public getNumberOfBooks():number
    {
        return this.books.length;
    }

    public findByAuthor(autor:string):Book[]
    {
        let libroEncontrado:Book[] = [];


        for(let lib of this.books){
            if ( lib.getAuthor() == autor){
                console.log("Entra");
                libroEncontrado.push(lib);
            }
        }

        return libroEncontrado;

    }

}

let libro1 = new Book("El señor de los granillos",344,"ES03503IB2","Un autor conocido","LibroAbierto");
let libro2 = new Book("El señor de los granillos2",3442,"ES03503IB22","Un autor conocido3","LibroAbierto2");
let libro3 = new Book("El señor de los granillos3",3443,"ES03503IB23","Un autor conocido3","LibroAbierto3");

let arrayLibros:Book[];

arrayLibros = [libro1,libro2,libro3];

let biblio = new Library(arrayLibros,"Down Street","Marc el Librero");

console.log(biblio.toString());

console.log("Numero de libros: ");
console.log(biblio.getNumberOfBooks());

let arrayLibrosAutor = biblio.findByAuthor("Un autor conocido3");

for(let lib2 of arrayLibrosAutor)
{
    console.log(lib2.getTitle());
    
}




