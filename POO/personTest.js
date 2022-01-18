let libreriaPersona = require("./person");

 let persona = new libreriaPersona.person("Juanjo","Cabrera",1.78,71);
 console.log("El indice de masa corporal es: " + persona.calcImc());
 console.log("La edad es " + persona.edad(1985) );
 console.log("El obejto tiene estos atributos:");
 persona.printAll();
 console.log("Tiene estos hobbies:");
 persona.printHobbies();