import { Person } from "./person";

export class Contacts{
    // Declaramos los atributos de la clase
    public people:Person[];

    //Constructor
    constructor ()
    {
        this.people = [];
    }

    public printCalendar(){
        
        for( let persona of this.people){
            persona.printName();
            console.log(persona.yearOfBirth(2022));
            console.log(persona.getAddress());
        }
    }
}

