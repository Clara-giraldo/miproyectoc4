
import { ProjectModel } from "./proyectos";


const resolversProyecto = {

    //SE CREAN LO QUERY PARA TODOS
    Query:{
        Proyectos: async (parent, args) => {
            const proyectos = await ProjectModel.find().populate('lider');
            return proyectos;
        },
    },

    //SE CREAN LAS MUTACIONES
    Mutation: {
        crearProyecto: async (parent, args) => {
            const proyectoCreado = await ProjectModel.create({
              nombre: args.nombre,
              estado: args.estado,
              fase: args.fase,
              fechaInicio: args.fechaInicio,
              fechaFin: args.fechaFin,
              presupuesto: args.presupuesto,
              lider: args.lider,
              objetivos: args.objetivos,
            });
            return proyectoCreado;
        },
    },
};
export {resolversProyecto};