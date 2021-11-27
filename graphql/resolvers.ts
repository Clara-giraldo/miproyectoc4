import { UserModel } from "../models/user";

const resolvers = {

    Query:{
        Usuarios: async ( parent, arg) =>{
            const usuarios = await UserModel.find();
            return usuarios;
        },
        Usuario: async (parent, args) => {
            const usuario = await UserModel.findOne({ _id: args._id });
            return usuario;
          },
          Proyectos: async (parent, args) => {
            const proyectos = await ProjectModel.find().populate('lider');
            return proyectos;
          },
    },
    Mutation: {
        crearUsuario: async (parent, args)=>{
            const usuariocreado = await UserModel.create({
                nombre: args.nombre,
                apellido: args.apellido,
                identificacion: args.identificacion,
                correo: args.correo,
                rol: args.rol,
            });

            if(Object.keys(args).includes('estado')){
                usuariocreado.estado = args.estado;
            }
            return usuariocreado;
            
            console.log('Ejecuentado la mutacion')
        },

        editarUsuario: async(parent, args) =>{
            const usuarioEditado = await UserModel.findByIdAndUpdate(args._id,{
                nombre: args.nombre,
                apellido: args.apellido,
                identificacion: args.identificacion,
                correo: args.correo,
                rol: args.rol,
                estado:args.estado,
            });
            return usuarioEditado;
        },

       eliminarUsuario: async (parent, args) => {
      if (Object.keys(args).includes('_id')) {
        const usuarioEliminado = await UserModel.findOneAndDelete({ _id: args._id });
        return usuarioEliminado;
      } else if (Object.keys(args).includes('correo')) {
        const usuarioEliminado = await UserModel.findOneAndDelete({ correo: args.correo });
        return usuarioEliminado;
      }
    },
    },
    
};
export {resolvers};