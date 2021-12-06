import { resolversProyecto } from '../models/proyectos/resolvers.js';
import { resolversUsuario } from '../models/usuarios/resolvers.js';
import { resolversAvance } from '../models/avances/resolvers.js';
import {resolverInscripciones} from '../models/inscripcion/resolvers.js'





export const resolvers = [resolversUsuario, resolversProyecto, resolversAvance, resolverInscripciones];
