import { gql } from 'apollo-server-express';
import { tiposEnums } from '../models/enums/tipos';
import { tiposUsuario } from '../models/usuarios/tipos';
import { tiposProyecto } from '../models/proyectos/tipos';
import { tiposAvance } from '../models/avances/tipos';

const tiposGlobales = gql`
  scalar Date
`;

export const tipos = [tiposGlobales, tiposEnums, tiposUsuario, tiposProyecto, tiposAvance];
