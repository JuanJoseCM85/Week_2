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




