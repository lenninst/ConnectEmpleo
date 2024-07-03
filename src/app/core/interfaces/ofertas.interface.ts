
export interface Empresa {
  id: string;
  nombre: string;
  logo: string;
  sitioWeb: string;
  tipo: string;
  ubicacion: string;
  descripcion: string;
  empleados: number;
  fechaDeFundacion: Date;
  ofertaEmpleo: OfertaEmpleo[];
}

export interface OfertaEmpleo {
  id: string;
  titulo: string;
  descripcion: string;
  salario: number;
  ubicacion: string;
  fechaPublicacion: Date;
  aniosDeExperiencia: number;
  empresa: string;
  modalidad: string;
  vacantes: number;
  postulantesId: number[] | null;
}

