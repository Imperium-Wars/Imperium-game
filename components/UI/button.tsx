import React, { FunctionComponent } from "react";
import styles from "../../styles/buttonComponent.module.css";

type ButtonProps = {
  onClick: () => void;
  children: string;
};

const Button: FunctionComponent<ButtonProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
