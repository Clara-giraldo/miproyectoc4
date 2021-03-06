import { gql } from 'apollo-server-express';
import { tiposEnums } from '../models/enums/tipos.js';
import { tiposUsuario } from '../models/usuarios/tipos.js';
import { tiposProyecto } from '../models/proyectos/tipos.js';
import { tiposAvance } from '../models/avances/tipos.js';
import {tiposInscripcion} from '../models/inscripcion/tipos.js'

const tiposGlobales = gql`
  scalar Date
`;

export const tipos = [tiposGlobales, tiposEnums, tiposUsuario, tiposProyecto, tiposAvance,tiposInscripcion];
