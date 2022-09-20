import type { NextPage } from "next";
import Map from "../components/mapFiver";
import styles from "../styles/map.module.css";
import Territory from "../components/Territories/territory";
import MobileTerritory from "../components/Territories/mobileTerritory";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import { TerritoryKey } from "../components/Territories/territoriesData";
import TerritoriesData from "../components/Territories/territoriesData";

const Explore: NextPage = () => {
  const isScreenSmall = useMediaQuery("(max-width:1024px)");
  const [territory, setTerritory] = useState<TerritoryKey>("China");
  const [territoryModal, setTerritoryModal] = useState(false);

  function onClick(e: any) {
    setTerritory(e.target.id);
    if (isScreenSmall) {
      setTerritoryModal(true);
    }
  }

  return (
    <div className={styles.mapPage}>
      {isScreenSmall ? (
        <MobileTerritory
          onClose={() => setTerritoryModal(false)}
          isOpen={territoryModal}
          territory={TerritoriesData[territory]}
        />
      ) : (
        <Territory territory={TerritoriesData[territory]} />
      )}
      <div className={styles.mapContainer}>
        <Map onClick={onClick} />
      </div>
    </div>
  );
};

export default Explore;
