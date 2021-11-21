import { Schema, model } from "mongoose";
import { Enum_FaseProyecto, Enum_EstadoProyecto } from "./enums";
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
    objetivos: Schema.Types.ObjectId;
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
    // lider:{
    //     type: String,
    //     required: true,
    // }

    lider:{
        type: Schema.Types.ObjectId,
        required: true,
        ref: UserModel,
    },
    objetivos:[
        {
        type: Schema.Types.ObjectId,
        ref: objetivoModel,
    },
],

});

const ProjectModel = model('Proyecto', projectSchema);

export { ProjectModel };