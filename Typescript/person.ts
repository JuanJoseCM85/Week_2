export class Person{

    //declaración de atributos
    public name:string;
    public age:number;
    private address:string;

    //Constructor
    constructor(nombre:string,edad:number,direccion:string)
    {
        this.name = nombre;
        this.age = edad;
        this.address = direccion;
    }


    //Getters y Setters y métodos publicos
    public getAddress():string
    {
        return this.address;
    }

    public printName():void
    {
        console.log(this.name);
    }

    public yearOfBirth(currentYear:number):number
    {
        return currentYear - this.age;
    }

    public setAddress(address:string):void
    {
        this.address = address;
    }

}

