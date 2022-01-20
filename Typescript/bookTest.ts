import { Book } from "./book";

let libro1 = new Book("El señor de los granillos",344,"ES03503IB2","Un autor conocido","LibroAbierto");

//Probamos el método toString
console.log(libro1.toString());

//Probramos todos los get
console.log(libro1.getAuthor());
console.log(libro1.getEditorial());
console.log(libro1.getIsbn());
console.log(libro1.getNPages());
console.log(libro1.getTitle());

libro1.setAuthor("Nuevo Autor");
libro1.setEditorial("Nueva Editorial");
libro1.setIsbn("0000001111222");
libro1.setNPages(3);
libro1.setTitle("Un libro muy interesante");

console.log(libro1.toString());





