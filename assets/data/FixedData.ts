import { OptionModel } from "@/models/models";

export const subjectOptions: OptionModel[] = [
  {
    key: "animales",
    value: "Animales",
  },
  {
    key: "alimentos",
    value: "Frutas / Verduras",
  },
  {
    key: "lugares",
    value: "Lugares",
  },
];

const plainAlphabet = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(65 + i)
);

export const alphabet = [
  ...plainAlphabet.slice(0, 14),
  "Ñ",
  ...plainAlphabet.slice(14),
];

export type HiddenLetter = {
  letter: string,
  hidden: boolean
}

export enum GAME_STATUS { FAILED, SUCCESS, NONE }

export const FAILURES_ALLOWED = 10;

export const gameData = {
  animales: [
    "Abeja",
    "Águila",
    "Alacran",
    "Alce",
    "Almeja",
    "Anaconda",
    "Antilope",
    "Araña",
    "Ardilla",
    "Armadillo",
    "Avestruz",
    "Ballena",
    "Buho",
    "Burro",
    "Caballo",
    "Caiman",
    "Canguro",
    "Cebra",
    "Cerdo",
    "Chimpance",
    "Ciervo",
    "Cisne",
    "Cocodrilo",
    "Colibri",
    "Conejo",
    "Cotorra",
    "Coyote",
    "Delfin",
    "Dromedario",
    "Elefante",
    "Escarabajo",
    "Escorpion",
    "Foca",
    "Gacela",
    "Gallo",
    "Gato",
    "Gaviota",
    "Guepardo",
    "Halcon",
    "Hiena",
    "Hipopotamo",
    "Hormiga",
    "Huron",
    "Iguana",
    "Jabali",
    "Jaguar",
    "Jirafa",
    "Koala",
    "Leon",
    "Leopardo",
    "Lince",
    "Lobo",
    "Lorito",
    "Loro",
    "Luciernaga",
    "Mariposa",
    "Murcielago",
    "Nutria",
    "Oso",
    "Oveja",
    "Pantera",
    "Pato",
    "Pavo",
    "Pez",
    "Perdiz",
    "Perro",
    "Pescado",
    "Puma",
    "Rana",
    "Rata",
    "Rinoceronte",
    "Salamandra",
    "Salmon",
    "Serpiente",
    "Tigre",
    "Tortuga",
    "Topo",
    "Torbellino",
    "Trucha",
    "Vaca",
    "Venado",
    "Vibora",
    "Zorro",
    "Albatros",
    "Almeja",
    "Anguila",
    "Ardilla",
    "Armadillo",
    "Avispa",
    "Babuino",
    "Balsa",
    "Bufalo",
    "Caballito de mar",
    "Cabra",
    "Cacatua",
    "Camaleon",
    "Caracol",
    "Castor",
    "Cebra",
    "Ciempies",
    "Codorniz",
    "Colibri",
    "Cuervo",
    "Cucaracha",
    "Delfin",
    "Dragon de Komodo",
    "Dromedario",
    "Elefante",
    "Erizo",
    "Escarabajo",
    "Flamenco",
    "Gamba",
    "Garza",
    "Gavilan",
    "Gecko",
    "Gerbo",
    "Gorgojo",
    "Gorila",
    "Grillo",
    "Grulla",
    "Halibut",
    "Hamster",
    "Hiena",
    "Hormiga",
    "Huron",
    "Ibis",
    "Impala",
    "Jabali",
    "Jirafa",
    "Kakapo",
    "Kiwi",
    "Langosta",
    "Lemur",
    "Lince",
    "Lombriz",
    "Manati",
    "Mariposa",
    "Marlin",
    "Mastin",
    "Medusa",
    "Meerkat",
    "Murcielago",
    "Narval",
    "Nutria",
    "Ocelote",
    "Orangutan",
    "Orca",
    "Ornitorrinco",
    "Oso",
    "Oveja",
    "Paloma",
    "Panda",
    "Pangolin",
    "Pato",
    "Pavo",
    "Pegaso",
    "Pelicano",
    "Puerco espin",
    "Pulpo",
    "Queso",
    "Quetzal",
    "Quokka",
    "Raton",
    "Raya",
    "Robalo",
    "Salamandra",
    "Salmon",
    "Sapo",
    "Sardina",
    "Serval",
    "Suricata",
    "Tapir",
    "Tarantula",
    "Tejon",
    "Tiburon",
    "Tilapia",
    "Tortola",
    "Trucha",
    "Tucan",
    "Urraca",
    "Vaca",
    "Yaco",
    "Zorrillo",
  ],
  lugares: [
    "Tokio",
    "Nueva York",
    "Londres",
    "Paris",
    "Pekin",
    "Los Ángeles",
    "Roma",
    "Madrid",
    "Moscu",
    "Sao Paulo",
    "Seul",
    "Estambul",
    "Ciudad de Mexico",
    "Shanghai",
    "Buenos Aires",
    "El Cairo",
    "Bangkok",
    "Kolkata",
    "Lagos",
    "Lima",
    "Chicago",
    "Bogota",
    "Teheran",
    "Manila",
    "Yakarta",
    "Lahore",
    "Osaka",
    "Dhaka",
    "Berlin",
    "Viena",
    "Atenas",
    "Nairobi",
    "Budapest",
    "Kiev",
    "Hong Kong",
    "Bagdad",
    "Santiago",
    "Damasco",
    "Riad",
    "Copenhague",
    "Brasilia",
    "Dublin",
    "Helsinki",
    "Nueva Delhi",
    "Bruselas",
    "Ámsterdam",
    "Oslo",
    "Varsovia",
    "Estocolmo",
    "Berna",
    "Johannesburgo",
    "Auckland",
    "Sidney",
    "Melbourne",
    "Toronto",
    "Vancouver",
    "Montreal",
    "Kioto",
    "Cairo",
    "Sevilla",
    "Valencia",
    "Barcelona",
    "Milan",
    "Genova",
    "Napoles",
    "Florencia",
    "Venecia",
    "Pisa",
    "Munich",
    "Francfort",
    "Colonia",
    "Hamburgo",
    "Dubai",
    "Abu Dhabi",
    "Doha",
    "Rio de Janeiro",
    "Salvador",
    "Recife",
    "Porto Alegre",
    "Brasilia",
    "Curitiba",
    "Florianopolis",
    "Fortaleza",
    "Belen",
    "Beirut",
    "Aman",
    "Casablanca",
    "Tanger",
    "El Cairo",
    "Aswan",
    "Alejandria",
    "Luxor",
    "Cartago",
    "Tunez",
    "Sousse",
    "Kairuan",
    "Monastir",
    "Gafsa",
  ],
  alimentos: [
    "Manzana",
    "Platano",
    "Naranja",
    "Fresa",
    "Uva",
    "Sandia",
    "Melon",
    "Pera",
    "Kiwi",
    "Mango",
    "Piña",
    "Limon",
    "Cereza",
    "Coco",
    "Papaya",
    "Mandarina",
    "Pomelo",
    "Ciruela",
    "Melocoton",
    "Albaricoque",
    "Higo",
    "Guayaba",
    "Granada",
    "Fruta de la pasion",
    "Lima",
    "Frambuesa",
    "Arandano",
    "Moras",
    "Arandano rojo",
    "Kiwi",
    "Nispero",
    "Caqui",
    "Grosella",
    "Pitahaya",
    "Tamarindo",
    "Nectarina",
    "Pepino",
    "Tomate",
    "Zanahoria",
    "Pimiento",
    "Lechuga",
    "Esparrago",
    "Brocoli",
    "Coliflor",
    "Calabacin",
    "Calabaza",
    "Berenjena",
    "Cebolla",
    "Ajo",
    "Champiñon",
    "Patata",
    "Boniato",
    "Rabano",
    "Remolacha",
    "Espinaca",
    "Acelga",
    "Apio",
    "Puerro",
    "Judia verde",
    "Habas",
    "Guisante",
    "Maiz",
    "Berenjena",
    "Alcachofa",
    "Albahaca",
    "Cilantro",
    "Perejil",
    "Romero",
    "Tomillo",
    "Oregano",
    "Cebollino",
    "Menta",
    "Eneldo",
    "Hinojo",
    "Rucula",
    "Berro",
    "Escarola",
    "Radicio",
    "Chirivia",
    "Ñame",
    "Yuca",
    "Jicama",
    "Kale",
    "Rabano picante",
    "Boniato",
    "Achicoria",
    "Col rizada",
    "Pepino de mar",
    "Alga nori",
    "Alga kombu",
    "Alga wakame",
    "Alga dulse",
    "Alga espirulina",
    "Alga chlorella",
    "Tamarindo",
    "Gingko biloba",
    "Moringa",
    "Noni",
  ],
};
