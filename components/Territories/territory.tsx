import React, { FunctionComponent } from "react";
import styles from "../../styles/territory.module.css";
import { TerritoryData } from "./territoriesData";
import TerritoryContent from "./territoryContent";

type TerritoryProps = {
  territory: TerritoryData;
};

const Territory: FunctionComponent<TerritoryProps> = ({ territory }) => {
  return (
    <div
      className={styles.territory}
      style={{
        backgroundImage: territory?.isAtWar
          ? `url(/territories/${territory.name.replace(" ", "")}War.webp)`
          : `url(/territories/${territory.name.replace(" ", "")}Peace.webp)`,
      }}
    >
      <div className={styles.blackFilter}></div>
      <div className={styles.territoryContainer}>
        <h1 className={styles.countryName}>{territory.name}</h1>
        <div className={styles.territoryContent}>
          <TerritoryContent title="Continent" text={territory.continent} />
          <TerritoryContent title="Territory type" text={territory.type} />
          <TerritoryContent title="Territory apogee" text={territory.apogee} />
          <TerritoryContent title="History" text={territory.history} />
        </div>
      </div>
    </div>
  );
};

export default Territory;
