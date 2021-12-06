import mongoose from 'mongoose';
import { ModeloProyecto } from '../proyectos/proyectos.js';
import { ModeloUsuario } from '../usuarios/usuarios.js';

const { Schema, model } = mongoose;

// interface Avance {
//   fecha: Date;
//   descripcion: string;
//   observaciones: [string];
//   proyecto: Schema.Types.ObjectId;
//   creadoPor: Schema.Types.ObjectId;
// }

const avanceSchema = new Schema({
  fecha: {
    type: Date,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  observaciones: [
    {
      type: String,
    },
  ],
  proyecto: {
    type: Schema.Types.ObjectId,
    ref: ModeloProyecto,
    required: true,
  },
  creadoPor: {
    type: Schema.Types.ObjectId,
    ref: ModeloUsuario,
    required: true,
  },
});

const ModeloAvance = model('Avance', avanceSchema);

export { ModeloAvance };