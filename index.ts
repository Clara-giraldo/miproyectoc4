import conectarBD from "./DB/bd";
import { UserModel } from "./models/user";
import { Enum_EstadoUsuario, Enum_Rol, Enum_TipoObjetivo } from "./models/enums";
import { ProjectModel } from "./models/project";
import {ObjectId} from 'mongoose';
import { objetivoModel } from "./models/objetivos";
const main = async()=>{
    await conectarBD ();

        //CRUD PROYECTOS

            //CREAR NUEVO PROYECTO
    // ProjectModel.create({
    //     nombre: "Proyecto 3",
    //     presupuesto: 120,
    //     fechaInicio: Date.now(),
    //     fechaFin: new Date('2022/11/10'),
    //     lider: "6195c5876daa28a18f231225",
    //     objetivos:['6199a4ec92401eb25dc9419d','6199a6276ab3b11694135e9c']
    //  })
    //  .then((u) => {
    //     console.log('Proyecto creado', u);
    // })
    // .catch((e) =>{
    //     console.error('Error creando el proyecto', e);
    // });


        //CREAR UN OBJETIVO
    
    // const objet = await objetivoModel.create({
    //     descripcion: "Este es el objetivo Especifico",
    //     tipo: Enum_TipoObjetivo.ESPECIFICO,
    // });

    
// //OTRA FORMA DE OBJETIVOS CON POPULATE
        const proyecto = await ProjectModel.find({
            nombre: 'Proyecto 3'
        }).populate('objetivos');
        console.log('el proyecto es ', JSON.stringify(proyecto) );



};
main();
//         //CONSULTAR UN PROYECTO
// const proyecto = await ProjectModel.find({
//     nombre: 'Proyecto 1'
// });
// console.log('el proyecto es ', proyecto, proyecto[0].lider);

//     //CONSULTAR EL LIDER - FORMA DIFICIL
// const lider = await UserModel.find({_id: proyecto[0].lider});
// console.log('el lider es ', lider);

        // //OTRA FORMA DE CONSULTAR CON POPULATE
        // const proyecto = await ProjectModel.find({
        //     nombre: 'Proyecto 2'
        // }).populate('lider');
        // console.log('el proyecto es ', proyecto);

//CREAR UN NUEVO USUARIO
  // await UserModel.create({
  //     nombre: "Ines",
  //     identificacion:"4325845696",
  //     apellido: "cardona",
  //     correo: "aclara@gfdda.com",
  //     rol: Enum_Rol.ADMINISTRADOR,
      

  // })
  // .then((u) => {
  //     console.log('usuario creado', u);
  // })
  // .catch((e) =>{
  //     console.error('Error creando el usuario', e);
  // });
 

  // await UserModel.find()
  // .then((u) =>{
  //     console.log('Usuarios', u);
  // })
  // .catch((e)=>{
  //     console.error('error obteniendo los usuarios', e);
  // });



//CRUD USUARIOS

 // //CREAR UN NUEVO USUARIO
    // await UserModel.create({
    //     correo: "das@assdfdf.con",
    //     identificacion: "2563254",
    //     nombre: "clara",
    //     apellido: "cardona",
    //     rol: 'Lider',
    // })
    // .then((u) => {
    //     console.log('usuario creado', u);
    // })
    // .catch((e) =>{
    //     console.error('Error creando el usuario', e);
    // });

    //HACER UNA CONSULTA DE USUARIOS



    // //HACER UNA CONSULTA DE UN SOLO USUARIO

    // await UserModel.findOne( {identificacion : '123456'})
    // .then((u) =>{
    //     console.log('Usuarios encontrado', u);
    // })
    // .catch((e)=>{
    //     console.error('error obteniendo los usuarios', e);
    // });





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