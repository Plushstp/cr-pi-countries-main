import React from "react";
import { Link } from "react-router-dom";
import styles from "./Landing.module.css";
import worldMap from "../../videos/worldMap.mp4";

export default function LandingPage() {
  return (
    <div className={styles.landingPage}>
      <div className={styles.videoWrapper}>
        <video className={styles.videoBackground} autoPlay muted loop>
          <source src={worldMap} type="video/mp4" />
        </video>
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Bienvenido a Paises del Mundo</h1>
        <h2 className={styles.title}>Tu próximo destino esta arquí</h2>
        <Link to="/home">
          <button className={styles.landingButton}>INICIAR VIAJE</button>
        </Link>
      </div>
    </div>
  );
}