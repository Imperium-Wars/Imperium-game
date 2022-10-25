import type { NextPage } from "next";
import Map from "../components/mapFiver";
import styles from "../styles/map.module.css";
import Territory from "../components/Territories/territory";
import MobileTerritory from "../components/Territories/mobileTerritory";
import { useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { TerritoryKey } from "../components/Territories/territoriesData";
import TerritoriesData from "../components/Territories/territoriesData";
import ScreenRotationIcon from "@mui/icons-material/ScreenRotation";
import MusicPlayer from "../components/UI/musicPlayer";
import { useAccount } from "@starknet-react/core";
import { useRouter } from "next/router";

export type Music = {
  song?: HTMLAudioElement;
  songName: string;
};

const Explore: NextPage = () => {
  const isScreenSmall = useMediaQuery("(max-width:1024px)");
  const isScreenMobilePortrait = useMediaQuery("(max-width:500px)");
  const [territory, setTerritory] = useState<TerritoryKey>("China");
  const [territoryModal, setTerritoryModal] = useState(false);
  const [music, setMusic] = useState<Music | undefined>(undefined);

  useEffect(() => {
    setMusic({
      song: new Audio(
        "https://imperium-game.vercel.app/music/ValseSentimentale.mp3"
      ),
      songName: "Valse Sentimentale | Tchaikovsky",
    }); // only call client
  }, []);

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
        {isScreenMobilePortrait ? (
          <div id="info">
            <h1>Rotate the screen of your device</h1>
            <ScreenRotationIcon
              color="primary"
              sx={{ width: "8rem", height: "8rem", color: "blanchedalmond" }}
            />
          </div>
        ) : (
          <Map onClick={onClick} />
        )}
      </div>
      <MusicPlayer music={music} />
    </div>
  );
};

export default Explore;
