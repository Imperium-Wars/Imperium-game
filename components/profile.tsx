import React, { FunctionComponent } from "react";
import styles from "../styles/Profile.module.css";

type ProfileProps = {
  address?: string;
};

const Profile: FunctionComponent<ProfileProps> = ({ address }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.avatarWithCadre}>
        <img src="/troops/Napoleon.png" height={200} width={169.25} />
      </div>
      <p className="h1Profile">Ben.stark</p>
    </div>
  );
};

export default Profile;
