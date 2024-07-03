import { Usuario } from "../../core/interfaces/User.interface";

export const mockUser: Usuario = {
  id: 1,
  nombre: "Juan Pérez",
  perfilUrl: "https://api.dicebear.com/8.x/adventurer/svg?seed=Abby",
  nacionalidad: "Argentina",
  fechaDeNacimiento: "1990-05-14",
  genero: "Masculino",
  documento: "DNI 12345678",
  numeroDeContacto: "+54 9 11 1234 5678",
  email: "juan.perez@example.com",
  lugarDeResidenciaActual: "Buenos Aires, Argentina",
  formacionAcademica: [
    {
      formacionAcademicaId: 1,
      titulo: "Ingeniería Informática",
      institucion: "Universidad de Buenos Aires",
      pais: "Argentina",
      fechaDeInicio: "06/03/2010",
      fechaDeFinalizacion: "10/12/2015",
    },
    {
      formacionAcademicaId: 2,
      titulo: "Maestría en Ciencia de Datos",
      institucion: "Universidad Nacional de La Plata",
      pais: "Argentina",
      fechaDeInicio: "15/03/2016",
      fechaDeFinalizacion: "20/12/2018",
    }
  ],
  experiencia: [
    {
      experienciaId: 1,
      puesto: "Desarrollador de Software",
      establecimiento: "Tech Solutions S.A.",
      aniosDeExperiencia: 3,
      funcion: "Desarrollo y mantenimiento de aplicaciones web."
    },
    {
      experienciaId: 2,
      puesto: "Analista de Datos",
      establecimiento: "Data Insights LLC",
      aniosDeExperiencia: 2,
      funcion: "Análisis de datos y creación de informes."
    }
  ],
  postulaciones: [
    {
      postulacionesId: 1,
      puesto: "Desarrollador de software",
      establecimiento: "Tech Solutions S.A.",
      fechaDePostulacion: new Date('2022-01-15'), // Se debe cambiar
      estado: "pendiente",
      descripcion: "Buscamos un desarrollador con experiencia en Java y Spring Boot."
    },
    {
      postulacionesId: 2,
      puesto: "Analista de datos",
      establecimiento: "Data Insights LLC",
      fechaDePostulacion: new Date('2022-02-01'),
      descripcion: "Buscamos un analista de datos con experiencia en Python y SQL.",
      estado: "aceptado"
    }
    // ...más postulaciones...
  ],
  favoritos: [
    {
      favoritosId: 1,
      puesto: "Senior Software Engineer",
      estado: "pendiente",
      titulo: "Senior Software Engineer",
      descripcion: "Buscamos un desarrollador con experiencia en Java y Spring Boot.",
      salario: 100000,
      ubicacion: "Buenos Aires, Argentina",
      fecha: new Date('2022-02-15'),
      empresa: "Gotitas del saber",
      remoto: false,
      aniosDeExperiencia: 5,
    },
    {
      favoritosId: 2,
      puesto: "Data Scientist",
      estado: "aceptado",
      titulo: "Se necesita experto con experiencia",
      descripcion: "es postulante necesita tener mucho tiempo libre sin familia deseable y no tendra vacaciones",
      salario: 1239492134,
      ubicacion: "Madagascar",
      fecha: new Date('2022-02-15'),
      empresa: "Mercado Libre",
      remoto: true,
      aniosDeExperiencia: 7,
    },
    {
      favoritosId: 3,
      puesto: "Project Manager",
      empresa: "IMB",
      estado: "rechazado",
      titulo: "Project Manager",
      descripcion: "Buscamos un líder con experiencia en gestión de proyectos.",
      salario: 150000,
      ubicacion: "Buenos Aires, Argentina",
      fecha: new Date('2022-02-20'),
      remoto: false,
      aniosDeExperiencia: 10,
    }
  ],
};

