class person
{
    //La altura debe estar en metros y el peso en KG
    constructor(nombre,apellidos,altura,peso)
    {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.altura = altura;
        this.peso = peso;
        this.yearOfBirth;
        this.hobbies = ["Nadar"];
    }

    calcImc ()
    {
        return this.peso / (this.altura * this.altura);
    }

    edad(anoNacimiento)
    {
        this.yearOfBirth  = anoNacimiento;
        return new Date().getFullYear() - anoNacimiento;
    }

    printAll()
    {
        for (let value in this){
            console.log(value + " - " + this[value]);
        }
    }

    printHobbies(){
        for (let value of this.hobbies){
            console.log(value); 
        }
    }
}

module.exports={person}