export interface CandidatoResponse {
  isSuccess: boolean;
  data: CandidatoData;
  message: string;
  token: null;
  errors: null;
}

export interface CandidatoData {
  id: number;
  nombre: string;
  apellido: string;
  nacionalidad: string;
  fechaNacimiento: Date;
  genero: string;
  documentoId: number;
  numeroContacto: number;
  lugarDeResidencia: string;
  userFk: number;
  rutasHv: string;
  experienciaLaboral: ExperienciaLaboral[];
  favoritos: Favorito[];
  formacionAcademicas: FormacionAcademica[];
  postulaciones: Postulacion[];
}

export interface ExperienciaLaboral {
  id: number;
  puesto: string;
  establecimiento: string;
  aniosExperiencia: number;
  descripcion: string;
}

export interface Favorito {
  candidatosFk: number;
  ofertasEmpleosFk: number;
  ofertaEmpleo: OfertaEmpleo;
  estadoPostulacion?: string;
}

export interface Postulacion {
  id: number;
  candidatosFk: number;
  ofertasEmpleosFk: number;
  estadoPostulacion: string;
  ofertaEmpleo: OfertaEmpleo;

}

export interface OfertaEmpleo {
  id: number;
  titulo: string;
  descripcion: string;
  salario: number;
  ubicacion: string;
  fechapublicacion: Date;
  aniosexperiencia: number;
  modalidad: string;
  vacantes: number;
  empresaFk: number;
  empresa: null;
}

export interface FormacionAcademica {
  id: number;
  titulo: string;
  institucion: string;
  pais: string;
  fechaInicio: Date;
  fechaFin: Date;
  candidatosFk: number;
}

