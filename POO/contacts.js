let libreriaPersona = require("./person");

class contacts
{
    constructor()
    {
        
        this.usuarioAgenda = [];
    }

    printPersonas()
    {
        for(let value of this.usuarioAgenda){
            value.printAll();
        }
    }
}



module.exports ={ contacts }