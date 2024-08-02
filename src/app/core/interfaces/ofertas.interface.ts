
export interface OfertasEmpleoResponse {
    isSuccess: boolean;
    data:      Ofertas[];
    message:   string;
    token:     null;
    errors:    null;
}

export interface Ofertas {
    id:               number;
    titulo:           string;
    descripcion:      string;
    salario:          number;
    ubicacion:        string;
    fechapublicacion: Date;
    aniosexperiencia: number;
    modalidad:        Modalidad;
    vacantes:         number;
    empresaFk:        number;
    empresa:          Empresa;
}

export interface Empresa {
    nombre:              string;
    logo:                string;
    sitioweb:            string;
    tipo:                string;
    descripcion:         string;
    cantidadempleados:   number;
    fechafundacion:      Date;
    userFk:              number;
    ofertasEmpleosCount: number;
    user:                null;
}

export enum Modalidad {
    Híbrido = "Híbrido",
    Presencial = "Presencial",
    Remoto = "Remoto",
}

