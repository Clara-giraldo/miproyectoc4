import { Schema, model } from "mongoose";
import { Enum_FaseProyecto, Enum_EstadoProyecto, Enum_TipoObjetivo } from "./enums";
import { objetivoModel } from "./objetivos";
import { UserModel } from "./user";


interface Proyecto{
    nombre: string;
    presupuesto: number;
    fechaInicio: Date;
    fechaFin: Date;
    estado: Enum_EstadoProyecto;
    fase: Enum_FaseProyecto;
    lider: Schema.Types.ObjectId;
    objetivos: [{descricion: string, tipo: Enum_TipoObjetivo}];
}

const projectSchema = new Schema<Proyecto>({
    nombre: {
        type : String,
        require: true,
        unique : true,
    },
    presupuesto: {
        type: Number,
        require: true,
    },
    fechaInicio: {
        type:Date,
        require:true,
    },
    fechaFin: {
        type:Date,
        require:true,
    },
    estado: {
        type: String,
        enum: Enum_EstadoProyecto,
        default: Enum_EstadoProyecto.INACTIVO,
    },
    fase:{
        type: String,
        enum: Enum_FaseProyecto,
        default: Enum_FaseProyecto.NULO,
    },
    
    lider:{
        type: Schema.Types.ObjectId,
        required: true,
        ref: UserModel,
    },
   objetivos: [
       {
           descripcion: {
               type: String,
               required: true,
            },
            tipo: {
                type: String,
                enum: Enum_TipoObjetivo,
                required: true
            },
       }]
    
});

const ProjectModel = model('Proyecto', projectSchema);

export { ProjectModel };