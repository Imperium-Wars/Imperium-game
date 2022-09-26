import React, { FunctionComponent } from "react";
import styles from "../../styles/territories.module.css";
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
          ? `url(/territories/war/${territory.name.replace(/\s/g, "")}.webp)`
          : `url(/territories/peace/${territory.name.replace(/\s/g, "")}.webp)`,
      }}
    >
      <div className={styles.blackFilter}></div>
      <div className={styles.territoryContainer}>
        <h1 className={styles.countryName}>{territory.name}</h1>
        <div className={styles.territoryContent}>
          {territory.continent ? (
            <TerritoryContent title="Continent" text={territory.continent} />
          ) : null}
          {territory.type ? (
            <TerritoryContent title="Territory type" text={territory.type} />
          ) : null}
          {territory.apogee ? (
            <TerritoryContent
              title="Territory apogee"
              text={territory.apogee}
            />
          ) : null}
          <TerritoryContent title="History" text={territory.history} />
        </div>
      </div>
    </div>
  );
};

export default Territory;
