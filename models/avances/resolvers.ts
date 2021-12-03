import { argsToArgsConfig } from "graphql/type/definition";
import { ModeloAvance } from "./avances"


const resolversAvance= {
    Query:{
        Avances: async(parent,args) =>{
            const avances = await ModeloAvance.find().populate('proyecto').populate('creadoPor');
            return avances;
        }
    },
    Mutation:{
        crearAvance: async (parents, args)=>{
            const avaceCreado = ModeloAvance.create({
            fecha: args.fecha,
            descripcion: args.descripcion,
            proyecto: args.proyecto,
            creadoPor:args.creadoPor,
            });
            return avaceCreado;
        },
    },
}

export {resolversAvance};
