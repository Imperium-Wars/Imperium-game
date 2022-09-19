type TerritoryType = "Forest" | "Rainforest" | "Desert" | "Plain" | "Mountain";

type Continent =
  | "Asia"
  | "South America"
  | "Oceania"
  | "Europe"
  | "North America"
  | "Africa";

type territoryState = "peace" | "war";

export type TerritoryKey = "China" | "Western Europe";

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
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  "Western Europe": {
    name: "Western Europe",
    continent: "Europe",
    type: "Plain",
    apogee: "1489 - 1914",
    isAtWar: false,
    history:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
};

export default territoriesData;
