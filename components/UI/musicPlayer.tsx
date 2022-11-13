import React, { FunctionComponent, useEffect, useState } from "react";
import styles from "../../styles/musicPlayer.module.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import MusicOffIcon from "@mui/icons-material/MusicOff";
import { Music } from "../pages/explore";

type MusicPlayerProps = {
  music?: Music;
};

const MusicPlayer: FunctionComponent<MusicPlayerProps> = ({ music }) => {
  const [isMusicOn, setMusicOn] = useState(false);
  const [isMusicOnHover, setIsMusicOnHover] = useState(false);

  function setMusicOnFunction(): void {
    setMusicOn(true);
    music?.song?.play();
  }

  function setMusicOffFunction(): void {
    setMusicOn(false);
    music?.song?.pause();
  }

  return isMusicOn ? (
    <div
      className={styles.musicPlayerOn}
      onMouseEnter={() => setIsMusicOnHover(true)}
      onMouseLeave={() => setIsMusicOnHover(false)}
      onClick={setMusicOffFunction}
    >
      {isMusicOnHover ? (
        <p className={styles.musicTitle}>{music?.songName}</p>
      ) : null}
      <MusicNoteIcon sx={{ color: "blanchedalmond" }} />
    </div>
  ) : (
    <div className={styles.musicPlayerOff} onClick={setMusicOnFunction}>
      <MusicOffIcon sx={{ color: "#c8aa6d" }} />
    </div>
  );
};

export default MusicPlayer;
