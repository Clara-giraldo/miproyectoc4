import { gql } from 'apollo-server-express';
import { tiposAvance } from '../models/avances/tipos';
import { tiposEnums } from '../models/enums/tipos';
import { tiposProyectos } from '../models/proyecto/tipos';

import { tiposUsuarios } from '../models/usuarios/tipos';

const tiposGlobales = gql`
  scalar Date
`;

export const tipos = [tiposGlobales, tiposEnums, tiposUsuarios, tiposProyectos, tiposAvance];