export interface Usuario {
  id: number;
  nombre: string;
  nacionalidad: string;
  perfilUrl: string;
  fechaDeNacimiento: string;
  genero: string;
  documento: string;
  numeroDeContacto: string;
  email: string;
  lugarDeResidenciaActual: string;
  formacionAcademica: FormacionAcademica[];
  experiencia: Experiencia[];
  postulaciones?: Postulaciones[];
  favoritos?: favoritos[];
}

export interface FormacionAcademica {
  formacionAcademicaId: number;
  titulo: string;
  institucion: string;
  pais: string;
  fechaDeInicio: string;
  fechaDeFinalizacion: string;
}

export interface Experiencia {
  experienciaId: number;
  puesto: string;
  establecimiento: string;
  aniosDeExperiencia: number;
  funcion: string;
}

export interface Postulaciones {
  postulacionesId: number;
  puesto: string;
  establecimiento: string;
  descripcion: string;
  fechaDePostulacion: Date;
  estado: string;
}

export interface favoritos {
  favoritosId: number;
  puesto: string;
  estado: string;
  titulo: string;
  descripcion: string;
  salario: number;
  ubicacion: string;
  fecha: Date;
  empresa: string;
  remoto: boolean;
  aniosDeExperiencia: number;


}

