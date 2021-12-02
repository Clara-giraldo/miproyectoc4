import { gql } from "apollo-server-core";

const tiposAvance = gql`
type Avamce{
    _id: ID!
    fecha:Date!
    descripcion:String!
    Observaciones:[String]
    proyecto:proyecto!
    creadoPor:usuario!
}

type Query{
    Avanves: [Avance]
}

type Mutation{
    crarAvance(
    fecha:Date!
    descripcion:String!
    proyecto:String!
    creadoPor:String!
    ):Avance
}


`;

export {tiposAvance};
