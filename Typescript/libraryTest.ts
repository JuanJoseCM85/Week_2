import { Library } from "./library";
import { Book } from "./book";

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