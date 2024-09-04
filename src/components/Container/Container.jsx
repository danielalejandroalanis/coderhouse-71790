import React from "react";
import styles from "./Container.module.css";

//Un map es un objeto
const obj = {
  id: 1,
};

const isSecondary = false;
const primaryColor = true;
//CSS in JS -- Estilos en Javascript
const myStylesPrimary = {
  backgroundColor: primaryColor ? "red" : "blue",
  fontSize: "1rem",
  fontWeight: "bold",
  color: "blue",
  display: "flex",
};

const myStylesSecondary = {
  backgroundColor: primaryColor ? "blue" : "red",
  fontSize: "1rem",
  fontWeight: "light",
  color: "red",
  display: "inline",
};

//CSS Modules
//isSecondary ? styles.secondary : styles.primary
const Container = ({ buttonLabel, label }) => {
  return (
    // <div style={isSecondary ? myStylesSecondary : myStylesPrimary}>
    <div className={isSecondary ? styles.secondary : styles.primary}>
      <span>{label}</span>
    </div>
  );
};

export default Container;
