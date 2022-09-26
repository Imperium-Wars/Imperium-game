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
  | "Central Europe"
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
    apogee: "1206 - 1368",
    continent: "Asia",
    history:
      "The mongolian empire is the second largest empire in history. The mongol army ruled with an iron fist by Gengis Khan defeated all their enemies by counting on their special abilities in cavalry and archery.",
    isAtWar: false,
    name: "Mongolia",
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
    apogee: "1707 - 1914",
    continent: "Europe",
    history:
      "The British Empire was the largest empires of history and made Great Britain the superpower of the 19th century. Their mastery of oceans and their quick modernization permitted them to conquer lands all around the world from Oceania to America and then to Asia.",
    isAtWar: false,
    name: "Great Britain",
    type: "Plain",
  },
  Greenland: {
    apogee: "793 - 1066",
    continent: "Europe",
    history:
      "The Viking Age was the period during the Middle Ages when Norsemen known as Vikings undertook large-scale raiding, colonizing, conquest, and trading throughout Europe and reached North America. Well known for their ferocity they were also excellent navigators and very good merchants.",
    isAtWar: false,
    name: "Greenland",
    type: "Desert",
  },
  Iceland: {
    apogee: "793 - 1066",
    continent: "Europe",
    history:
      "The Viking Age was the period during the Middle Ages when Norsemen known as Vikings undertook large-scale raiding, colonizing, conquest, and trading throughout Europe and reached North America. Well known for their ferocity they were also excellent navigators and very good merchants.",
    isAtWar: false,
    name: "Iceland",
    type: "Desert",
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
    apogee: "1721 - 1905",
    continent: "Europe",
    history:
      "The conquests of Peter I and Catherine the Great made The Russian Empire the third largest empire of History. Imperial soldier's brutality and mastery of the terrain allowed them to prevail over the most powerful enemies, however imperial power declines after the first Russian Revolution in 1905.",
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
    apogee: "1400 - 1600",
    continent: "Asia",
    history:
      "The Middle East had its hour of glory at the end of the Middle Age thanks to the conquests of Mehmed 2 and Suleiman the Magnificent, after the 16th century the Ottoman Empire did not modernize enough and slowly declined to completely lose its influence after World War I.",
    isAtWar: false,
    name: "Middle East",
    type: "Desert",
  },
  Mongolia: {
    apogee: "1206 - 1368",
    continent: "Asia",
    history:
      "The Mongolian empire is the second largest empire in history. The mongol army ruled with an iron fist by Gengis Khan defeated all their enemies by counting on their special abilities in cavalry and archery.",
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
    continent: "Europe",
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
  "Central Europe": {
    apogee: "1871 – 1918",
    continent: "Europe",
    history:
      "Central Europe led by Prussia and the German Empire were able to lead Europe as one of the most powerful empire after Napoleon's defeat. However the empire was dismantled after the defeat of the first world war.",
    isAtWar: false,
    name: "Central Europe",
    type: "Plain",
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
    apogee: "1721 - 1905",
    continent: "Europe",
    history:
      "The conquests of Peter I and Catherine the Great made The Russian Empire the third largest empire of History. Imperial soldier's brutality and mastery of the terrain allowed them to prevail over the most powerful enemies, however imperial power declines after the first Russian Revolution in 1905.",
    isAtWar: false,
    name: "Russia",
    type: "Mountain",
  },
  Scandinavia: {
    apogee: "793 - 1066",
    continent: "Europe",
    history:
      "The Viking Age was the period during the Middle Ages when Norsemen known as Vikings undertook large-scale raiding, colonizing, conquest, and trading throughout Europe and reached North America. Well known for their ferocity they were also excellent navigators and very good merchants.",
    isAtWar: false,
    name: "Scandinavia",
    type: "Mountain",
  },
  Siberia: {
    apogee: "1721 - 1905",
    continent: "Europe",
    history:
      "The conquests of Peter I and Catherine the Great made The Russian Empire the third largest empire of History. Imperial soldier's brutality and mastery of the terrain allowed them to prevail over the most powerful enemies, however imperial power declines after the first Russian Revolution in 1905.",
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
    apogee: "-27 - 350",
    continent: "Europe",
    history:
      "Southern Europe was covered by glory during the golden age of the Roman Empire and ancient greece. Julius Caesar and his successors could count on one of the best armies of history, Romans warriors were excellent in every aspect of war, their training and equipment were ahead of their time.",
    isAtWar: false,
    name: "Southern Europe",
    type: "Plain",
  },
  Ural: {
    apogee: "1721 - 1905",
    continent: "Europe",
    history:
      "The conquests of Peter I and Catherine the Great made The Russian Empire the third largest empire of History. Imperial soldier's brutality and mastery of the terrain allowed them to prevail over the most powerful enemies, however imperial power declines after the first Russian Revolution in 1905.",
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
    apogee: "1489 - 1815",
    continent: "Europe",
    history:
      "Western Europeans (Including French, Spanish and Portuguese) started their apogee after the discovery of America and the beginning of colonization. Their technical advance and organizational superiority allowed them to conquer the world until the beginning of their decline in 1815 after Napoleon's defeat.",
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
    apogee: "1721 - 1905",
    continent: "Europe",
    history:
      "The conquests of Peter I and Catherine the Great made The Russian Empire the third largest empire of History. Imperial soldier's brutality and mastery of the terrain allowed them to prevail over the most powerful enemies, however imperial power declines after the first Russian Revolution in 1905.",
    isAtWar: false,
    name: "Yakutsk",
    type: "Mountain",
  },
};

export default territoriesData;
