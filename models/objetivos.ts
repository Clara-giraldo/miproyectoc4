import mongoose from 'mongoose';
import { Schema, model } from 'mongoose';
import {Enum_TipoObjetivo } from './enums/enums';





interface Objetivo{
    descripcion: string;
    tipo: Enum_TipoObjetivo;
    proyecto: Schema.Types.ObjectId;
    }

const objectivoSchema = new Schema<Objetivo>({
    descripcion: {
        type: String,
        required: true, 
    },
    tipo: {
        type: String,
        enum: Enum_TipoObjetivo,
        required: true,
    },
      
});

const modeloObjetivo = model("Objetivo", objectivoSchema);

export {modeloObjetivo};
