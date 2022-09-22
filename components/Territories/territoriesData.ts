type TerritoryType = "Forest" | "Rainforest" | "Desert" | "Plain" | "Mountain";

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
  | "Northwest Territory"
  | "Venezuela"
  | "Peru"
  | "Scandinavia"
  | "Greenland"
  | "Island"
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
  | "North Africa"
  | "South Africa"
  | "Central Africa"
  | "East Africa"
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
  | "Ukraine"
  | "Brazil";

export type TerritoryData = {
  name: TerritoryKey;
  type: TerritoryType;
  apogee: string;
  history: string;
  continent: Continent;
  isAtWar?: boolean;
};

type TerritoriesData = {
  [territory: string]: TerritoryData;
};

const territoriesData: TerritoriesData = {
  China: {
    name: "China",
    continent: "Asia",
    type: "Forest",
    apogee: "2010 - Nowadays",
    history:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  "Western Europe": {
    name: "Western Europe",
    continent: "Europe",
    type: "Plain",
    apogee: "1489 - 1914",
    isAtWar: false,
    history:
      "Western Europeans started their apogee after the discovery of America and the beginning of colonization. Their technical advance and organizational superiority allowed them to conquer the world until the beginning of their decline in 1914",
  },
};

export default territoriesData;
