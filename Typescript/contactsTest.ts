import { Contacts } from "./contact";
import { Person } from "./person";

let contact1 = new Contacts();

let persona1 = new Person("Juanjo",36,"Ctra de Pampanico");
let persona2 = new Person("Maria",30,"En una calle");
let persona3 = new Person("Lucia",40,"Cerca del Moral");

contact1.people.push(persona1);
contact1.people.push(persona2);
contact1.people.push(persona3);

contact1.printCalendar();