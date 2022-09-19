import type { NextPage } from "next";
import Map from "../components/mapFiver";
import styles from "../styles/map.module.css";
import Territory from "../components/Territories/territory";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import { TerritoryKey } from "../components/Territories/territoriesData";
import TerritoriesData from "../components/Territories/territoriesData";

const Explore: NextPage = () => {
  const matches = useMediaQuery("(max-width:1024px)");
  const [territory, setTerritory] = useState<TerritoryKey>("China");

  function onClick(e: any) {
    setTerritory(e.target.id);
  }

  return (
    <div className={styles.mapPage}>
      {matches ? null : <Territory territory={TerritoriesData[territory]} />}
      <div className={styles.mapContainer}>
        <Map onClick={onClick} />
      </div>
    </div>
  );
};

export default Explore;
