import conectarBD from "./DB/bd";
import { UserModel } from "./models/user";
import { Enum_EstadoUsuario, Enum_Rol, Enum_TipoObjetivo } from "./models/enums";
import { ProjectModel } from "./models/project";
import {ObjectId} from 'mongoose';
import { objetivoModel } from "./models/objetivos";

    //METODOLOGIA ONE TO MANY #1
const crearProyectosConObjetivos1 = async () =>{
    // CREAR UN PROYECTO CON EL USUARIO Y LOS OBJETIVOS
    const usuarioInicial = await UserModel.create({
        nombre: 'Clara',
        apellido: 'Giraldo',
        correo: 'cigc@aso.com',
        identificacion: '1234',
        rol: Enum_Rol.ADMINISTRADOR,
        estado: Enum_EstadoUsuario.AUTORIZADO,
      });
    
      const proyectoCreado = await ProjectModel.create({
        nombre: 'Proyecto Mision TIC',
        fechaInicio: new Date('2021/12/24'),
        fechaFin: new Date('2022/12/24'),
        presupuesto: 120000,
        lider: usuarioInicial._id,
      }); 
      
      const objetivoGeneral = await objetivoModel.create({
          descripcion: 'Objetivo general',
          tipo: Enum_TipoObjetivo.GENERAL,
          proyecto: proyectoCreado._id,
      });

      const objetivoEspecifico1 = await objetivoModel.create({
        descripcion: 'Objetivo Especifico 1',
        tipo: Enum_TipoObjetivo.ESPECIFICO,
        proyecto: proyectoCreado._id,
    });
    const objetivoEspecifico2 = await objetivoModel.create({
        descripcion: 'Objetivo Especifico 1',
        tipo: Enum_TipoObjetivo.ESPECIFICO,
        proyecto: proyectoCreado._id,
    });
    
    
    
    
    
};

// //CONSULTAR UN PROYECTO CON LOS OBJETIVOS
const consultarProyectosConObjetivos1 = async () =>{
    const proyecto = await ProjectModel.findOne({_id:'6199bd25ff6d15be803d31a5'});

console.log('el proyecto encontrado es: ', proyecto);

const objetivos = await objetivoModel.find({project: '6199bd25ff6d15be803d31a5'})

console.log('los objetivos encontrads son: ', objetivos);

const ProyectosConObjetivos = {...proyecto, objetivos: objetivos};

console.log('el proyecto con objetivos: ', ProyectosConObjetivos);
}

//METODOLOGIA ONE TO MANY #2
// CREAR UN PROYECTO CON EL USUARIO Y LOS OBJETIVOS
const crearObjetivosconProyectos2 = async () =>{
      const usuarioInicial = await UserModel.create({
        nombre: 'Clara',
        apellido: 'Giraldo',
        correo: 'cigc@aso.com',
        identificacion: '1234',
        rol: Enum_Rol.ADMINISTRADOR,
        estado: Enum_EstadoUsuario.AUTORIZADO,
  });


    const objetivoGeneral = await objetivoModel.create({
        descripcion: 'Objetivo general',
        tipo: Enum_TipoObjetivo.GENERAL,
        });

    const objetivoEspecifico1 = await objetivoModel.create({
        descripcion: 'Objetivo Especifico 1',
        tipo: Enum_TipoObjetivo.ESPECIFICO,
        
    });
    const objetivoEspecifico2 = await objetivoModel.create({
        descripcion: 'Objetivo Especifico 1',
        tipo: Enum_TipoObjetivo.ESPECIFICO,
        
    });


    const proyectoCreado = await ProjectModel.create({
        nombre: 'Proyecto Mision TIC',
        fechaInicio: new Date('2021/12/24'),
        fechaFin: new Date('2022/12/24'),
        presupuesto: 120000,
        lider: usuarioInicial._id,
        objetivos:[
            objetivoGeneral._id, 
            objetivoEspecifico1._id, 
            objetivoEspecifico2._id],
    }); 
}
        //CONSULTA CON POPULATE
const consultarProyectosConObjetivos2 = async () =>{
    const proyecto = await ProjectModel.find({id: '619ad355870cb99b7e268b07'}).populate('objetivos');
    console.log('Proyecto encontrado ', JSON.stringify( proyecto));
}
        
        //METODOLOGIA ONE TO MANY #3
const crearProyectosConObjetivos3 = async () =>{
      const usuarioInicial = await UserModel.create({
        nombre: 'Clara',
        apellido: 'Giraldo',
        correo: 'cigc@aso.com',
        identificacion: '1234',
        rol: Enum_Rol.ADMINISTRADOR,
        estado: Enum_EstadoUsuario.AUTORIZADO,
  });
    const proyectoCreado = await ProjectModel.create({
        nombre: 'Proyecto Mision TIC',
        fechaInicio: new Date('2021/12/24'),
        fechaFin: new Date('2022/12/24'),
        presupuesto: 120000,
        lider: usuarioInicial._id,
        objetivos:[
         {descripcion: 'Objerivo General',tipo: Enum_TipoObjetivo.GENERAL},
         {descripcion: 'Objerivo Especifico 1',tipo: Enum_TipoObjetivo.ESPECIFICO},
         {descripcion: 'Objerivo Especifico 2',tipo: Enum_TipoObjetivo.ESPECIFICO},
        ],
    });
}

const consultarProyectosConObjetivos3 = async () =>{
    const proyectoCreado = await ProjectModel.find({id: '619ae5d598d3b14530b48987'});
    console.log('proyecto', proyectoCreado);
    
}
const main = async()=>{
    await conectarBD ();
  
   
    
};
main();

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
// const proyecto = await ProjectModel.find({
//     nombre: 'Proyecto 3'
// }).populate('objetivos');
// console.log('el proyecto es ', JSON.stringify(proyecto) );

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
    //     });}