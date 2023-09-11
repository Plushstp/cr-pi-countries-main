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
      <div className={styles.cardActivity}>
        <h2>{name}</h2>
        <p>Dificultad: <b>{difficulty}</b></p>
        <p>Duracion en horas: <b>{duration}</b></p>
        <p>Temporada del año: <b>{seasonName}</b></p>

      </div>
    </>
  );
};

export default Activity;