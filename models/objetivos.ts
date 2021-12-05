import { Schema, model } from 'mongoose';
import { Enum_TipoObjetivo } from './enums/enums';
import { ModeloProyectos } from './proyectos/proyectos';

interface Objective {
  descripcion: string;
  tipo: Enum_TipoObjetivo;
}

const objectiveSchema = new Schema<Objective>({
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

const ModeloObjetivos = model('Objetivo', objectiveSchema);

export { ModeloObjetivos };
