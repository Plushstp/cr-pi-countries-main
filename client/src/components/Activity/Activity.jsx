import React from "react";
import styles from "./Activity.module.css";


const Activity = ({ name, duration, difficulty, season }) => {
  const seasonName =
  season === 'Winter'
    ? 'Invierno'
    : season === 'Autumn'
    ? 'Otoño'
    : season === 'Spring'
    ? 'Primavera'
    : season === 'Summer'
    ? 'Verano'
    : '';
    return (
      <>
      <div className={styles.activityContent}>
        <h3>{name}</h3>
        <h5>Dificultad: {difficulty}</h5>
        <h5>Duracion en horas: {duration}</h5>
        <h5>Temporada del año: {seasonName}</h5>
      </div>
    </>
  );
};

export default Activity;