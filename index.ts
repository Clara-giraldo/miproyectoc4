import conectarBD from "./DB/bd";
import { UserModel } from "./models/user";

const main = async()=>{
    await conectarBD ();

    await UserModel.create({
        correo: "das@asdf.con",
        identificacion: "123456",
        nombre: "clara",
        apellido: "cardona",
    })
    .then((u) => {
        console.log('usuario creado', u);
    })
    .catch((e) =>{
        console.error('Error creando el usuario', e);
    });

};
main();