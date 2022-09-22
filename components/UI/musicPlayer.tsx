import React, { FunctionComponent, useState } from "react";
import styles from "../../styles/musicPlayer.module.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import MusicOffIcon from "@mui/icons-material/MusicOff";

type MusicPlayerProps = {
  music?: HTMLAudioElement;
};

const MusicPlayer: FunctionComponent<MusicPlayerProps> = ({ music }) => {
  const [isMusicOn, setMusicOn] = useState(false);
  const [isMusicOnHover, setIsMusicOnHover] = useState(false);

  function setMusicOnFunction(): void {
    setMusicOn(true);
    music?.play();
  }

  function setMusicOffFunction(): void {
    setMusicOn(false);
    music?.pause();
  }

  return isMusicOn ? (
    <div
      className={styles.musicPlayerOn}
      onClick={setMusicOffFunction}
      onMouseEnter={() => setIsMusicOnHover(true)}
      onMouseLeave={() => setIsMusicOnHover(false)}
    >
      {isMusicOnHover ? (
        <p className={styles.musicTitle}>Valse Sentimentale | Tchaikovsky</p>
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
