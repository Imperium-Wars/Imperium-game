type TerritoryType =
  | "Forest"
  | "Rainforest"
  | "Desert"
  | "Plain"
  | "Mountain"
  | "Game";

type Continent =
  | "Asia"
  | "South America"
  | "Oceania"
  | "Europe"
  | "North America"
  | "Africa";

export type TerritoryKey =
  | "China"
  | "Western Europe"
  | "Argentina"
  | "Great Britain"
  | "Argentina"
  | "Japan"
  | "Eastern United States"
  | "Alaska"
  | "Alberta"
  | "Ontario"
  | "Quebec"
  | "Northern Canada"
  | "Venezuela"
  | "Peru"
  | "Scandinavia"
  | "Greenland"
  | "Iceland"
  | "Northern Europe"
  | "Southern Europe"
  | "Ural"
  | "Eykar"
  | "Kamchatka"
  | "Yakutsk"
  | "India"
  | "Siberia"
  | "India"
  | "Southeast Asia"
  | "China"
  | "Afghanistan"
  | "Middle East"
  | "Egypt"
  | "Northern Africa"
  | "South Africa"
  | "Central Africa"
  | "Eastern Africa"
  | "Central America"
  | "Western United States"
  | "Irkutsk"
  | "Mongolia"
  | "New Zeland"
  | "Mongolia"
  | "New Guinea"
  | "Western Australia"
  | "Eastern Australia"
  | "Indonesia"
  | "Madagascar"
  | "Russia"
  | "Brazil";

export type TerritoryData = {
  name: TerritoryKey;
  type?: TerritoryType;
  apogee?: string;
  history: string;
  continent?: Continent;
  isAtWar?: boolean;
};

type TerritoriesData = {
  [territory: string]: TerritoryData;
};

const territoriesData: TerritoriesData = {
  Afghanistan: {
    apogee: "1489 - 1914",
    continent: "Asia",
    history:
      "Western Europeans started their apogee after the discovery of America and the beginning of colonization. Their technical advance and organizational superiority allowed them to conquer the world until the beginning of their decline in 1914.",
    isAtWar: false,
    name: "Afghanistan",
    type: "Mountain",
  },
  Alaska: {
    apogee: "1489 - 1914",
    continent: "Asia",
    history:
      "Western Europeans started their apogee after the discovery of America and the beginning of colonization. Their technical advance and organizational superiority allowed them to conquer the world until the beginning of their decline in 1914.",
    isAtWar: false,
    name: "Alaska",
    type: "Mountain",
  },
  Alberta: {
    apogee: "1489 - 1914",
    continent: "Asia",
    history:
      "Western Europeans started their apogee after the discovery of America and the beginning of colonization. Their technical advance and organizational superiority allowed them to conquer the world until the beginning of their decline in 1914.",
    isAtWar: false,
    name: "Alberta",
    type: "Mountain",
  },
  Argentina: {
    apogee: "1489 - 1914",
    continent: "Asia",
    history:
      "Western Europeans started their apogee after the discovery of America and the beginning of colonization. Their technical advance and organizational superiority allowed them to conquer the world until the beginning of their decline in 1914.",
    isAtWar: false,
    name: "Argentina",
    type: "Mountain",
  },
  Brazil: {
    apogee: "1489 - 1914",
    continent: "Asia",
    history:
      "Western Europeans started their apogee after the discovery of America and the beginning of colonization. Their technical advance and organizational superiority allowed them to conquer the world until the beginning of their decline in 1914.",
    isAtWar: false,
    name: "Brazil",
    type: "Mountain",
  },
  "Central Africa": {
    apogee: "1489 - 1914",
    continent: "Asia",
    history:
      "Western Europeans started their apogee after the discovery of America and the beginning of colonization. Their technical advance and organizational superiority allowed them to conquer the world until the beginning of their decline in 1914.",
    isAtWar: false,
    name: "Central Africa",
    type: "Mountain",
  },
  China: {
    apogee: "2010 - Nowadays",
    continent: "Asia",
    history:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    name: "China",
    type: "Forest",
  },
  "Eastern Africa": {
    apogee: "1489 - 1914",
    continent: "Asia",
    history:
      "Western Europeans started their apogee after the discovery of America and the beginning of colonization. Their technical advance and organizational superiority allowed them to conquer the world until the beginning of their decline in 1914.",
    isAtWar: false,
    name: "Eastern Africa",
    type: "Mountain",
  },
  "Eastern Australia": {
    apogee: "1489 - 1914",
    continent: "Asia",
    history:
      "Western Europeans started their apogee after the discovery of America and the beginning of colonization. Their technical advance and organizational superiority allowed them to conquer the world until the beginning of their decline in 1914.",
    isAtWar: false,
    name: "Eastern Australia",
    type: "Mountain",
  },
  "Eastern United States": {
    apogee: "1489 - 1914",
    continent: "Asia",
    history:
      "Western Europeans started their apogee after the discovery of America and the beginning of colonization. Their technical advance and organizational superiority allowed them to conquer the world until the beginning of their decline in 1914.",
    isAtWar: false,
    name: "Eastern United States",
    type: "Mountain",
  },
  Egypt: {
    apogee: "1489 - 1914",
    continent: "Asia",
    history:
      "Western Europeans started their apogee after the discovery of America and the beginning of colonization. Their technical advance and organizational superiority allowed them to conquer the world until the beginning of their decline in 1914.",
    isAtWar: false,
    name: "Egypt",
    type: "Mountain",
  },
  Eykar: {
    history:
      "Eykar is a fantasy universe where history has yet to be written. An open source smartcontract dictates the rules of this world: how fast time passes, how you can move, how you can form an army, and so on.",
    isAtWar: false,
    name: "Eykar",
    type: "Game",
  },
  "Great Britain": {
    apogee: "1489 - 1914",
    continent: "Asia",
    history:
      "Western Europeans started their apogee after the discovery of America and the beginning of colonization. Their technical advance and organizational superiority allowed them to conquer the world until the beginning of their decline in 1914.",
    isAtWar: false,
    name: "Great Britain",
    type: "Mountain",
  },
  Greenland: {
    apogee: "1489 - 1914",
    continent: "Asia",
    history:
      "Western Europeans started their apogee after the discovery of America and the beginning of colonization. Their technical advance and organizational superiority allowed them to conquer the world until the beginning of their decline in 1914.",
    isAtWar: false,
    name: "Greenland",
    type: "Mountain",
  },
  Iceland: {
    apogee: "1489 - 1914",
    continent: "Asia",
    history:
      "Western Europeans started their apogee after the discovery of America and the beginning of colonization. Their technical advance and organizational superiority allowed them to conquer the world until the beginning of their decline in 1914.",
    isAtWar: false,
    name: "Iceland",
    type: "Mountain",
  },
  India: {
    apogee: "1489 - 1914",
    continent: "Asia",
    history:
      "Western Europeans started their apogee after the discovery of America and the beginning of colonization. Their technical advance and organizational superiority allowed them to conquer the world until the beginning of their decline in 1914.",
    isAtWar: false,
    name: "India",
    type: "Mountain",
  },
  Indonesia: {
    apogee: "1489 - 1914",
    continent: "Asia",
    history:
      "Western Europeans started their apogee after the discovery of America and the beginning of colonization. Their technical advance and organizational superiority allowed them to conquer the world until the beginning of their decline in 1914.",
    isAtWar: false,
    name: "Indonesia",
    type: "Mountain",
  },
  Irkutsk: {
    apogee: "1489 - 1914",
    continent: "Asia",
    history:
      "Western Europeans started their apogee after the discovery of America and the beginning of colonization. Their technical advance and organizational superiority allowed them to conquer the world until the beginning of their decline in 1914.",
    isAtWar: false,
    name: "Irkutsk",
    type: "Mountain",
  },
  Japan: {
    apogee: "1489 - 1914",
    continent: "Asia",
    history:
      "Western Europeans started their apogee after the discovery of America and the beginning of colonization. Their technical advance and organizational superiority allowed them to conquer the world until the beginning of their decline in 1914.",
    isAtWar: false,
    name: "Japan",
    type: "Mountain",
  },
  Kamchatka: {
    apogee: "1489 - 1914",
    continent: "Asia",
    history:
      "Western Europeans started their apogee after the discovery of America and the beginning of colonization. Their technical advance and organizational superiority allowed them to conquer the world until the beginning of their decline in 1914.",
    isAtWar: false,
    name: "Kamchatka",
    type: "Mountain",
  },
  Madagascar: {
    apogee: "1489 - 1914",
    continent: "Asia",
    history:
      "Western Europeans started their apogee after the discovery of America and the beginning of colonization. Their technical advance and organizational superiority allowed them to conquer the world until the beginning of their decline in 1914.",
    isAtWar: false,
    name: "Madagascar",
    type: "Mountain",
  },
  "Central America": {
    apogee: "1489 - 1914",
    continent: "Asia",
    history:
      "Western Europeans started their apogee after the discovery of America and the beginning of colonization. Their technical advance and organizational superiority allowed them to conquer the world until the beginning of their decline in 1914.",
    isAtWar: false,
    name: "Central America",
    type: "Mountain",
  },
  "Middle East": {
    apogee: "1489 - 1914",
    continent: "Asia",
    history:
      "Western Europeans started their apogee after the discovery of America and the beginning of colonization. Their technical advance and organizational superiority allowed them to conquer the world until the beginning of their decline in 1914.",
    isAtWar: false,
    name: "Middle East",
    type: "Mountain",
  },
  Mongolia: {
    apogee: "1489 - 1914",
    continent: "Asia",
    history:
      "Western Europeans started their apogee after the discovery of America and the beginning of colonization. Their technical advance and organizational superiority allowed them to conquer the world until the beginning of their decline in 1914.",
    isAtWar: false,
    name: "Mongolia",
    type: "Mountain",
  },
  "New Guinea": {
    apogee: "1489 - 1914",
    continent: "Asia",
    history:
      "Western Europeans started their apogee after the discovery of America and the beginning of colonization. Their technical advance and organizational superiority allowed them to conquer the world until the beginning of their decline in 1914.",
    isAtWar: false,
    name: "New Guinea",
    type: "Mountain",
  },
  "Northern Africa": {
    apogee: "1489 - 1914",
    continent: "Asia",
    history:
      "Western Europeans started their apogee after the discovery of America and the beginning of colonization. Their technical advance and organizational superiority allowed them to conquer the world until the beginning of their decline in 1914.",
    isAtWar: false,
    name: "Northern Africa",
    type: "Mountain",
  },
  "Northern Canada": {
    apogee: "1489 - 1914",
    continent: "Asia",
    history:
      "Western Europeans started their apogee after the discovery of America and the beginning of colonization. Their technical advance and organizational superiority allowed them to conquer the world until the beginning of their decline in 1914.",
    isAtWar: false,
    name: "Northern Canada",
    type: "Mountain",
  },
  "Northern Europe": {
    apogee: "1489 - 1914",
    continent: "Asia",
    history:
      "Western Europeans started their apogee after the discovery of America and the beginning of colonization. Their technical advance and organizational superiority allowed them to conquer the world until the beginning of their decline in 1914.",
    isAtWar: false,
    name: "Northern Europe",
    type: "Mountain",
  },
  Ontario: {
    apogee: "1489 - 1914",
    continent: "Asia",
    history:
      "Western Europeans started their apogee after the discovery of America and the beginning of colonization. Their technical advance and organizational superiority allowed them to conquer the world until the beginning of their decline in 1914.",
    isAtWar: false,
    name: "Ontario",
    type: "Mountain",
  },
  Peru: {
    apogee: "1489 - 1914",
    continent: "Asia",
    history:
      "Western Europeans started their apogee after the discovery of America and the beginning of colonization. Their technical advance and organizational superiority allowed them to conquer the world until the beginning of their decline in 1914.",
    isAtWar: false,
    name: "Peru",
    type: "Mountain",
  },
  Quebec: {
    apogee: "1489 - 1914",
    continent: "Asia",
    history:
      "Western Europeans started their apogee after the discovery of America and the beginning of colonization. Their technical advance and organizational superiority allowed them to conquer the world until the beginning of their decline in 1914.",
    isAtWar: false,
    name: "Quebec",
    type: "Mountain",
  },
  Russia: {
    apogee: "1489 - 1914",
    continent: "Asia",
    history:
      "Western Europeans started their apogee after the discovery of America and the beginning of colonization. Their technical advance and organizational superiority allowed them to conquer the world until the beginning of their decline in 1914.",
    isAtWar: false,
    name: "Russia",
    type: "Mountain",
  },
  Scandinavia: {
    apogee: "1489 - 1914",
    continent: "Asia",
    history:
      "Western Europeans started their apogee after the discovery of America and the beginning of colonization. Their technical advance and organizational superiority allowed them to conquer the world until the beginning of their decline in 1914.",
    isAtWar: false,
    name: "Scandinavia",
    type: "Mountain",
  },
  Siberia: {
    apogee: "1489 - 1914",
    continent: "Asia",
    history:
      "Western Europeans started their apogee after the discovery of America and the beginning of colonization. Their technical advance and organizational superiority allowed them to conquer the world until the beginning of their decline in 1914.",
    isAtWar: false,
    name: "Siberia",
    type: "Mountain",
  },
  "South Africa": {
    apogee: "1489 - 1914",
    continent: "Asia",
    history:
      "Western Europeans started their apogee after the discovery of America and the beginning of colonization. Their technical advance and organizational superiority allowed them to conquer the world until the beginning of their decline in 1914.",
    isAtWar: false,
    name: "South Africa",
    type: "Mountain",
  },
  "Southeast Asia": {
    apogee: "1489 - 1914",
    continent: "Asia",
    history:
      "Western Europeans started their apogee after the discovery of America and the beginning of colonization. Their technical advance and organizational superiority allowed them to conquer the world until the beginning of their decline in 1914.",
    isAtWar: false,
    name: "Southeast Asia",
    type: "Mountain",
  },
  "Southern Europe": {
    apogee: "-27 - 476",
    continent: "Asia",
    history: "Southern Europe ",
    isAtWar: false,
    name: "Southern Europe",
    type: "Mountain",
  },
  Ural: {
    apogee: "1489 - 1914",
    continent: "Asia",
    history:
      "Western Europeans started their apogee after the discovery of America and the beginning of colonization. Their technical advance and organizational superiority allowed them to conquer the world until the beginning of their decline in 1914.",
    isAtWar: false,
    name: "Ural",
    type: "Mountain",
  },
  Venezuela: {
    apogee: "1489 - 1914",
    continent: "Asia",
    history:
      "Western Europeans started their apogee after the discovery of America and the beginning of colonization. Their technical advance and organizational superiority allowed them to conquer the world until the beginning of their decline in 1914.",
    isAtWar: false,
    name: "Venezuela",
    type: "Mountain",
  },
  "Western Australia": {
    apogee: "1489 - 1914",
    continent: "Asia",
    history:
      "Western Europeans started their apogee after the discovery of America and the beginning of colonization. Their technical advance and organizational superiority allowed them to conquer the world until the beginning of their decline in 1914.",
    isAtWar: false,
    name: "Western Australia",
    type: "Mountain",
  },
  "Western Europe": {
    apogee: "1489 - 1914",
    continent: "Europe",
    history:
      "Western Europeans started their apogee after the discovery of America and the beginning of colonization. Their technical advance and organizational superiority allowed them to conquer the world until the beginning of their decline in 1914.",
    isAtWar: false,
    name: "Western Europe",
    type: "Plain",
  },
  "Western United States": {
    apogee: "1489 - 1914",
    continent: "Asia",
    history:
      "Western Europeans started their apogee after the discovery of America and the beginning of colonization. Their technical advance and organizational superiority allowed them to conquer the world until the beginning of their decline in 1914.",
    isAtWar: false,
    name: "Western United States",
    type: "Mountain",
  },
  Yakutsk: {
    apogee: "1489 - 1914",
    continent: "Asia",
    history:
      "Western Europeans started their apogee after the discovery of America and the beginning of colonization. Their technical advance and organizational superiority allowed them to conquer the world until the beginning of their decline in 1914.",
    isAtWar: false,
    name: "Yakutsk",
    type: "Mountain",
  },
};

export default territoriesData;
