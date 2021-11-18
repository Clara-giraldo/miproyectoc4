import conectarBD from "./DB/bd";
import { UserModel } from "./models/user";
import { Enum_Rol } from "./models/enums";

const main = async()=>{
    await conectarBD ();


    //CREAR UN NUEVO USUARIO
    // await UserModel.create({
    //     correo: "das@asdf.con",
    //     identificacion: "123456",
    //     nombre: "clara",
    //     apellido: "cardona",
    // })
    // .then((u) => {
    //     console.log('usuario creado', u);
    // })
    // .catch((e) =>{
    //     console.error('Error creando el usuario', e);
    // });

    //HACER UNA CONSULTA DE USUARIOS

    // await UserModel.find()
    // .then((u) =>{
    //     console.log('Usuarios', u);
    // })
    // .catch((e)=>{
    //     console.error('error obteniendo los usuarios', e);
    // });


    //HACER UNA CONSULTA DE UN SOLO USUARIO

    await UserModel.findOne( {identificacion : '123456'})
    .then((u) =>{
        console.log('Usuarios encontrado', u);
    })
    .catch((e)=>{
        console.error('error obteniendo los usuarios', e);
    });





//CREAR UN NUEVO USUARIO
    // await UserModel.create({
    //     apellido: "cardona",
    //     correo: "asdf@asdf.com",
    //     identificacion:"25623",
    //     nombre: "Ines",
    //     rol: Enum_Rol.administrador,

    // })
    // .then((u) => {
    //     console.log('usuario creado', u);
    // })
    // .catch((e) =>{
    //     console.error('Error creando el usuario', e);
    // });


    // //EDITAR UN USUARIO
    // await UserModel.findOneAndUpdate(
    //     { correo: 'das@asdf.con'},
    //     { nombre : 'Ines',
    //     apellido: 'Herrera'        ,
    // })
    // .then((u) => {
    //     console.log('usuario actualizado', u);    
    // })
    // .catch((e) => {
    //     console.log('Usuario no se puede actulizar', e)
    // })
    
    // //ELIMINAR UN USUARIO

    // await UserModel.findOneAndDelete({ correo: "das@asasdf.con"})
    // .then((u) => {
    //         console.log('usuario eliminado', u);    
    //     })
    //     .catch((e) => {
    //         console.log('Usuario no se puede eliminar', e)
    //     });

};
main();