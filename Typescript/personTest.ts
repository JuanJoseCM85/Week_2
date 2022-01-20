import { Person } from "./person";

let persona = new Person("Juanjo",36,"Ctra de Pampanico");

//Probamos todos los métodos de la clase Person
persona.printName();

console.log("El año de nacimiento es: ");
console.log(persona.yearOfBirth(2022));

console.log("Cambiamos la dirección");
persona.setAddress("Nueva Calle");

console.log("Mostramos la nueva calle:");
console.log(persona.getAddress());






