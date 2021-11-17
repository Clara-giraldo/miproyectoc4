import {connect} from 'mongoose';

const conectarBD = async ()=> {
    return await connect (
        'mongodb+srv://admin:<password>@gestionproyectos.r0dlt.mongodb.net/Gestionproyectos?retryWrites=true&w=majority'
    )
    .then(() => {
        console.log('Conexion exitosa');
    })
    .catch((e) => {
        console.error('Error conectando a la base', e)
    })
};

export default conectarBD;