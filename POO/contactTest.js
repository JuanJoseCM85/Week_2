let libreriaContact = require ("./contacts");
let libreriaPersona = require ("./person");

let agenda = new libreriaContact.contacts();
let per = new libreriaPersona.person("Juanjo","Lopez Lopez",1.60,59);

agenda.usuarioAgenda.push(per);
agenda.printPersonas();