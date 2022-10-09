type TerritoryType = "Forest" | "Desert" | "Plain" | "Mountain" | "Game";

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
    apogee: "1500 - 1973",
    continent: "Asia",
    history:
      "Afghanistan has gone through a lot of conflicts internally and internationally. Various people fought for the resources that the country can provide. Even during its apogee, it was separated into three people: Mughals, Uzbeks and Safavids.",
    isAtWar: false,
    name: "Afghanistan",
    type: "Mountain",
  },
  Alaska: {
    apogee: "1918 - nowadays",
    continent: "North America",
    history:
      "A part of the Alaskan population are descendants of Russian settlers. Since it’s become a state of the USA in 1867, their living conditions improved, although they suffered from relentless Japanese soldiers attacks during WWII, especially in the islands.",
    isAtWar: false,
    name: "Alaska",
    type: "Mountain",
  },
  Alberta: {
    apogee: "1867 - nowadays",
    continent: "North America",
    history:
      "Canadians have gone through several colonial eras, first with the French, then with the British. In 1867, they became independent and have developed their country a lot ever since, thanks to their strong spirit of freedom.",
    isAtWar: false,
    name: "Alberta",
    type: "Mountain",
  },
  Argentina: {
    apogee: "1880 - 1920",
    continent: "South America",
    history:
      "After the colonization period, Argentinians, along with Uruguayans started a long series of civil wars against the Spanish in 1814. The conflicts lasted until 1853 when Argentinians, after many persevering and rigorous battles against their opponent, finally took over and managed to create one of the greatest economies in the world.",
    isAtWar: false,
    name: "Argentina",
    type: "Mountain",
  },
  Brazil: {
    apogee: "1790 - 1860",
    continent: "South America",
    history:
      "Brazil is inhabited by various different people and resources. Therefore it has gone through several conflicts: colonization, indigenous rebellions, slave rebellions, etc. Portuguese colonists, actually fleeing from Napoleon’s invasion, ended by taking hold of most of Brazil and founded a Kingdom that then became a whole Empire between 1810 and 1860.",
    isAtWar: false,
    name: "Brazil",
    type: "Forest",
  },
  "Central Africa": {
    apogee: "1300 - 1400",
    continent: "Africa",
    history:
      "The nobel Kingdom of Kongo had the biggest and most technologically advanced community. Congolese ruled over a considerable part of Central Africa, they conquered a few aboriginal lands for their resources, although, they regularly had to fight other powerful African people. Their amazing knowledge of their vast jungle allowed them to attack very efficiently.",
    isAtWar: false,
    name: "Central Africa",
    type: "Forest",
  },
  China: {
    apogee: "206 B.C - 220 AD",
    continent: "Asia",
    history:
      "During the apogee of the chinese empire, the Han dynasty ruled over an enormous territory. Back then, the Han army was well known for its huge size for the time (more than 600 000 mens) and its skilful archers.",
    name: "China",
    type: "Forest",
  },
  "Eastern Africa": {
    apogee: "1270 - 1400",
    continent: "Africa",
    history:
      "The Horn region in Africa used to be controlled by a strong Empire that changed hands throughout different eras, mostly held by who we now call Ethiopians and Somalians. These people were robust defenders of their lands and managed to keep their territory safe for hundreds of years from Southern Asian colonists and Northern African armies",
    isAtWar: false,
    name: "Eastern Africa",
    type: "Desert",
  },
  "Eastern Australia": {
    apogee: "1850 - 1890",
    continent: "Oceania",
    history:
      "Australia was born in the blood of its native people (Aborigenes) during the colonization of Captain James Cook. Composed of different tribes, their military power was weak because they were under-armed and not organized. However, they fought valiantly and their memories are honored today",
    isAtWar: false,
    name: "Eastern Australia",
    type: "Desert",
  },
  "Eastern United States": {
    apogee: "1918 - nowadays",
    continent: "North America",
    history:
      "United States was born in blood. European colonists had to fight for their independence against the British empire and to conquer lands previously owned by native Americans. Their vast territory and population permitted them to become the most powerful country on Earth at the beginning of the 20th century when the others were weakened by wars.",
    isAtWar: false,
    name: "Eastern United States",
    type: "Plain",
  },
  Egypt: {
    apogee: "1294 B.C. - 1213 B.C.",
    continent: "Africa",
    history:
      "Egyptians saw their peak of influence under the reign of Seti I to Ramesses II by trading with the whole of the Middle East and Northern Africa and the Greeks. Their great sense of military strategy had let them expand their borders by repelling the Libyans to the west and the Hittites to the north.",
    isAtWar: false,
    name: "Egypt",
    type: "Desert",
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
    continent: "North America",
    history:
      "The Viking Age was the period during the Middle Age when Norsemen known as Vikings undertook large-scale raiding, colonizing, conquest, and trading throughout Europe and reached North America. Well known for their ferocity they were also excellent navigators and very good merchants.",
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
    type: "Plain",
  },
  India: {
    apogee: "400 - 700",
    continent: "Asia",
    history:
      "India had quite an advanced society in the 3rd and 6th century when it was populated by the Guptas. The Gupta dynasty reigned on the North of India and they were great conquerors. At the point where, Samudragupta, their most successful emperor is now called “The Indian Napoelon”.",
    isAtWar: false,
    name: "India",
    type: "Forest",
  },
  Indonesia: {
    apogee: "1489 - 1914",
    continent: "Oceania",
    history: "",
    isAtWar: false,
    name: "Indonesia",
    type: "Forest",
  },
  Irkutsk: {
    apogee: "1206 - 1368",
    continent: "Asia",
    history:
      "The Mongolian empire is the second largest empire in history. The mongol army ruled with an iron fist by Gengis Khan defeated all their enemies by counting on their special abilities in cavalry and archery.",
    isAtWar: false,
    name: "Irkutsk",
    type: "Mountain",
  },
  Japan: {
    apogee: "1489 - 1914",
    continent: "Asia",
    history:
      "Japanese military level has evolved exponentially since the 17th century even if they kept a very strong sense of honor that comes from their Samouraï heritage. The legend of these warriors crossed centuries and territories, to the point where they are still considered today as one of the greatest warriors of all time.",
    isAtWar: false,
    name: "Japan",
    type: "Plain",
  },
  Kamchatka: {
    apogee: "1721 - 1905",
    continent: "Europe",
    history:
      "The conquests of Peter I and Catherine the Great made The Russian Empire the third largest empire of History. Imperial soldier's brutality and mastery of the terrain allowed them to prevail over the most powerful enemies, however imperial power declines after the first Russian Revolution in 1905.",
    isAtWar: false,
    name: "Kamchatka",
    type: "Desert",
  },
  Madagascar: {
    apogee: "1610 - 1700",
    continent: "Africa",
    history:
      "The island's West clan chiefs began to extend their power through trade with their Indian Ocean neighbors, first with Arab, Persian, and Somali traders who connected Madagascar with East Africa, the Middle East, and India, and later with European slave traders. The wealth created in Madagascar through trade created a state system ruled by powerful regional monarchs known as the Maroserana.",
    isAtWar: false,
    name: "Madagascar",
    type: "Forest",
  },
  "Central America": {
    apogee: "1824 - 1840",
    continent: "South America",
    history:
      "The first to land in Central America, was Hernan Cortes, the famous conquistador who founded the city of Veracruz. Spanish settlers destroyed the Aztec empire to create the “new Spain” which would become independent in 1821",
    isAtWar: false,
    name: "Central America",
    type: "Desert",
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
    continent: "Oceania",
    history: "",
    isAtWar: false,
    name: "New Guinea",
    type: "Forest",
  },
  "Northern Africa": {
    apogee: "969 - 1021",
    continent: "Africa",
    history:
      "Northern Africa as we know it today was built at the beginning of the 7th century from the military victories of the glorious Umayyads that took over Spain and kept it for more than 500 years. Those fierce warriors were feared all along Europe for their special ability for cavalry.",
    isAtWar: false,
    name: "Northern Africa",
    type: "Desert",
  },
  "Northern Canada": {
    apogee: "1867 - nowadays",
    continent: "North America",
    history:
      "Canadians have gone through several colonial eras, first with the French, then with the British. In 1867, they became independent and have developed their country a lot ever since, thanks to their strong spirit of freedom.",
    isAtWar: false,
    name: "Northern Canada",
    type: "Desert",
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
    apogee: "1867 - nowadays",
    continent: "North America",
    history:
      "Canadians have gone through several colonial eras, first with the French, then with the British. In 1867, they became independent and have developed their country a lot ever since, thanks to their strong spirit of freedom.",
    isAtWar: false,
    name: "Ontario",
    type: "Plain",
  },
  Peru: {
    apogee: "1438 - 1532",
    continent: "South America",
    history:
      "Peru is home to the Inca people who at the time had founded the largest and most advanced empire and dynasty before the discovery of America. However after the arrival of the Europeans, they were decimated by diseases and by the settlers who were better trained and more equipped.",
    isAtWar: false,
    name: "Peru",
    type: "Mountain",
  },
  Quebec: {
    apogee: "1867 - nowadays",
    continent: "North America",
    history:
      "Quebecois descend from French settlers. They pleaded allegiance to the French kingdom in 1663 to become a royal province of France called New France. A lot of them, didn’t and still don’t consider themselves as Canadians.",
    isAtWar: false,
    name: "Quebec",
    type: "Plain",
  },
  Russia: {
    apogee: "1721 - 1905",
    continent: "Europe",
    history:
      "The conquests of Peter I and Catherine the Great made The Russian Empire the third largest empire of History. Imperial soldier's brutality and mastery of the terrain allowed them to prevail over the most powerful enemies, however imperial power declines after the first Russian Revolution in 1905.",
    isAtWar: false,
    name: "Russia",
    type: "Plain",
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
    type: "Desert",
  },
  "South Africa": {
    apogee: "1800 - 1838",
    continent: "Africa",
    history:
      "There was an inter-African conflict during the Ndwandwe-Zulu War and the Mfecane with the triumph of the Zulu. The Boers and Zulus confronted each other at the Battle of Italeni and the Battle of Blood River in 1838, resulting in the defeat of the Zulu, although the Zulu state continued to survive until the conclusion of the Anglo-Zulu War in 1879.",
    isAtWar: false,
    name: "South Africa",
    type: "Forest",
  },
  "Southeast Asia": {
    apogee: "1980 - nowadays",
    continent: "Asia",
    history:
      "Southeast Asia is composed of a lot of different countries and people (Vietnam Thailand …), and each country has its own history of great warriors and conquest. In the modern era, only a few of them managed to be victorious against the big military forces of Europeans, Chinese, or Japanese.",
    isAtWar: false,
    name: "Southeast Asia",
    type: "Forest",
  },
  "Southern Europe": {
    apogee: "27 B.C - 350 AD",
    continent: "Europe",
    history:
      "Southern Europe was covered by glory during the golden age of the Roman Empire and ancient Greece. Julius Caesar and his successors could count on one of the best army of history. Romans warriors were excellent in every aspect of war, their training and equipment were ahead of their time.",
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
    type: "Desert",
  },
  Venezuela: {
    apogee: "1811 - 1945",
    continent: "South America",
    history:
      "Venezuelans are descendants of Spanish colonists. Inspired by the French Revolution, they fought for their independence and established the Republic of Venezuela in 1811. Later on, inequalities rose up in the second half of the 20th century, and escalated in the 21st century to a result of 94% poverty.",
    isAtWar: false,
    name: "Venezuela",
    type: "Forest",
  },
  "Western Australia": {
    apogee: "1850 - 1890",
    continent: "Oceania",
    history:
      "Australia was born in the blood of its native people (Aborigenes) during the colonization of Captain James Cook. Composed of different tribes, their military power was weak because they were under-armed and not organized. However, they fought valiantly and their memories are honored today",
    isAtWar: false,
    name: "Western Australia",
    type: "Desert",
  },
  "Western Europe": {
    apogee: "1489 - 1815",
    continent: "Europe",
    history:
      "Western Europeans (Including French, Spanish and Portuguese) started their apogee after the discovery of America and the beginning of colonization. Their technical advance and organizational superiority allowed them to conquer the world until the beginning of their decline after decolonization.",
    isAtWar: false,
    name: "Western Europe",
    type: "Plain",
  },
  "Western United States": {
    apogee: "1918 - nowadays",
    continent: "North America",
    history:
      "United States were born in blood. European colonists had to fight for their independence against the british empire and to conquer lands previously owned by native americans. Their vast territory and population permitted them to become the most powerful country on Earth in the beginning of the 20th century when the others were weakened by wars.",
    isAtWar: false,
    name: "Western United States",
    type: "Desert",
  },
  Yakutsk: {
    apogee: "1721 - 1905",
    continent: "Europe",
    history:
      "The conquests of Peter I and Catherine the Great made The Russian Empire the third largest empire of History. Imperial soldier's brutality and mastery of the terrain allowed them to prevail over the most powerful enemies, however imperial power declines after the first Russian Revolution in 1905.",
    isAtWar: false,
    name: "Yakutsk",
    type: "Forest",
  },
};

export default territoriesData;
