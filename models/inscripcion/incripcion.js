import mongoose from 'mongoose';
// import { Enum_EstadoInscripcion } from '../enums/enums.js';
import { ModeloProyecto } from '../proyectos/proyectos.js';
import { ModeloUsuario } from '../usuarios/usuarios.js'

const { Schema, model } = mongoose;
// interface Inscription {
//   estado: Enum_EstadoInscripcion;
//   fechaIngreso: Date;
//   fechaEgreso: Date;
//   proyecto: Schema.Types.ObjectId;
//   estudiante: Schema.Types.ObjectId;
// }

const inscriptionSchema = new Schema({
  estado: {
    type: String,
    enum: ['ACEPTADO', 'RECHAZADO', 'PENDIENTE'],
    default: 'PENDIENTE',
    required: true,
  },
  fechaIngreso: {
    type: Date,
    required: false,
  },
  fechaEgreso: {
    type: Date,
    required: false,
  },
  proyecto: {
    type: Schema.Types.ObjectId,
    ref: ModeloProyecto,
    required: true,
  },
  estudiante: {
    type: Schema.Types.ObjectId,
    ref: ModeloUsuario,
    required: true,
  },
});

const ModeloInscripcion = model('Inscripcion', inscriptionSchema);

export { ModeloInscripcion };