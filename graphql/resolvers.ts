import { resolversAvance } from "../models/avances/resolvers"
import { resolversProyecto } from "../models/proyecto/resolvers"
import { resolversUsuario } from "../models/usuarios/resolvers"


export const resolvers = [resolversUsuario, resolversProyecto,resolversAvance];
    
    