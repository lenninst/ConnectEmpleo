import { Empresa } from "../../core/interfaces/ofertas.interface";
export const mockEmpresas: Empresa[] = [
  {
    id: "1",
    nombre: "Tech Solutions",
    logo: "https://example.com/logo1.png",
    sitioWeb: "https://techsolutions.com",
    tipo: "Tecnología",
    ubicacion: "San Francisco, EE.UU.",
    descripcion: "Líderes en desarrollo de software y soluciones tecnológicas.",
    empleados: 500,
    fechaDeFundacion: new Date("2005-09-15"),
    ofertaEmpleo: [
      {
        id: "101",
        titulo: "Ingeniero de Software Senior",
        descripcion: "Buscamos un ingeniero con experiencia en desarrollo de aplicaciones web.",
        salario: 90000,
        ubicacion: "San Francisco, EE.UU.",
        fechaPublicacion: new Date("2024-06-01"),
        empresa: "Tech Solutions",
        modalidad: 'presencial',
        vacantes: 3,
        aniosDeExperiencia: 5,
        postulantesId: [201, 202, 203]
      },
      {
        id: "102",
        titulo: "Diseñador UX/UI",
        descripcion: "Se necesita diseñador con habilidades en UX/UI para proyectos innovadores.",
        salario: 75000,
        ubicacion: "San Francisco, EE.UU.",
        fechaPublicacion: new Date("2024-06-05"),
        empresa: "Tech Solutions",
        modalidad: 'remoto',
        vacantes: 2,
        aniosDeExperiencia: 3,
        postulantesId: [204, 205]
      },
      {
        id: "103",
        titulo: "Desarrollador Full Stack",
        descripcion: "Buscamos desarrollador con experiencia en tecnologías front-end y back-end.",
        salario: 85000,
        ubicacion: "San Francisco, EE.UU.",
        fechaPublicacion: new Date("2024-06-10"),
        empresa: "Tech Solutions",
        modalidad: 'hibrido',
        vacantes: 4,
        aniosDeExperiencia: 4,
        postulantesId: [206, 207, 208]
      }
    ]
  },
  {
    id: "2",
    nombre: "Green Energy Corp",
    logo: "https://example.com/logo2.png",
    sitioWeb: "https://greenenergycorp.com",
    tipo: "Energía",
    ubicacion: "Berlín, Alemania",
    descripcion: "Líderes en tecnologías renovables y soluciones energéticas sostenibles.",
    empleados: 400,
    fechaDeFundacion: new Date("2010-04-22"),
    ofertaEmpleo: [
      {
        id: "104",
        titulo: "Ingeniero de Energías Renovables",
        descripcion: "Se busca ingeniero con experiencia en proyectos de energías limpias.",
        salario: 80000,
        ubicacion: "Berlín, Alemania",
        fechaPublicacion: new Date("2024-06-03"),
        empresa: "Green Energy Corp",
        modalidad: 'remoto',
        vacantes: 4,
        aniosDeExperiencia: 4,
        postulantesId: [209, 210, 211]
      },
      {
        id: "105",
        titulo: "Analista de Datos Ambientales",
        descripcion: "Buscamos analista con experiencia en análisis de datos relacionados con medio ambiente.",
        salario: 70000,
        ubicacion: "Berlín, Alemania",
        fechaPublicacion: new Date("2024-06-07"),
        empresa: "Green Energy Corp",
        modalidad: 'remoto',
        vacantes: 3,
        aniosDeExperiencia: 3,
        postulantesId: [212, 213]
      },
      {
        id: "106",
        titulo: "Técnico de Instalación de Paneles Solares",
        descripcion: "Se necesita técnico con experiencia en instalación y mantenimiento de paneles solares para proyectos residenciales y comerciales. El trabajo incluye la instalación, configuración y puesta en marcha de sistemas solares fotovoltaicos, así como el mantenimiento preventivo y correctivo de equipos y componentes. También se requiere capacidad para realizar diagnósticos avanzados de rendimiento, seguimiento y reparación de fallas, y cumplimiento riguroso de normativas de seguridad y calidad.",
        salario: 60000,
        ubicacion: "Berlín, Alemania",
        fechaPublicacion: new Date("2024-06-12"),
        empresa: "Green Energy Corp",
        modalidad: 'presencial',
        vacantes: 2,
        aniosDeExperiencia: 0,
        postulantesId: [214]
      }
    ]
  }
];


