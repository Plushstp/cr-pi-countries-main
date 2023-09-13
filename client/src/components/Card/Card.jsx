import React from "react"
import styles from "./Card.module.css"
import { Link } from "react-router-dom"

const Card = ({
    id,
    name,
    flag,
    continent,
    capital,
    subregion,
    area,
    population
  }) => {
    return (
      <Link to={`/detail/${id}`}>
        <div className={styles.card}>
          <img
            src={flag}
            loading="loading"
            alt={name}
            className={styles.cardImage}
          />
          <div className={styles.cardContent}>
            <h3>{name}</h3>
            <h5>Continent: {continent}</h5>
            <h5>Population: {population}</h5>

          </div>
        </div>
      </Link>
    )
  }
  
  export default Card

  /* No piden que se muestre, solo para agregar para pruebas
              <h5>Capital: {capital}</h5>
              <h5>Subregion: {subregion}</h5>
            <h5>Area: {area}</h5>
            <h5>Population: {population}</h5>*/