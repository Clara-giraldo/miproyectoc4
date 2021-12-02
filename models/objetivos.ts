import { Schema, model } from 'mongoose';
import { Enum_EstadoProyecto, Enum_FaseProyecto, Enum_TipoObjetivo } from '../enums/enums';
import { ObjectiveModel } from '../objectivo';
import { UserModel } from '../usuario/usuario';



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

const objetivoModel = model("Objetivo", objectivoSchema);

export {objetivoModel};
