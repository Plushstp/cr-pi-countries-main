import React from "react"
import styles from "../Filters/Filters.module.css"
import { useSelector } from "react-redux"

export default function Filters({
    selectedOption,
    handleFilterContinent,
    handleSortByPopulation,
    handleFilterByActivity,
    handleSortByName
  }) {
    const activities = useSelector((state) => state.activities)
    return (
      <div className={styles.filters}>
        <div className={styles.filter}>
          <select id="sortName" className={styles.select} onChange={handleSortByName}>
            <option value=""> Ordenar por Nombre </option>
            <option value="Quitar">Quitar Orden</option>
            <option value="ascendent">A - Z</option>
            <option value="descendent">Z - A</option>
          </select>
        </div>
        <div className={styles.filter}>
          <select id="sortPopul" className={styles.select} value={selectedOption} onChange={handleSortByPopulation}>
            <option value=""> Ordenar por Poblacion </option>
            <option value="Quitar"> Quitar Filtro </option>
            <option value="ascendent">1 - 1500 millones</option>
            <option value="descendent">1500 millones - 1</option>
          </select>
        </div>
        <div className={styles.filter}>
          <select id="filterCont" className={styles.select} value={selectedOption} onChange={handleFilterContinent}>
            <option value=""> Fitrar por </option>
            <option value="Todos">Todos los paises</option>
            <option value="North America">América del Norte</option>
            <option value="South America">América del Sur</option>
            <option value="Europe">Europa</option>
            <option value="Asia">Asia</option>
            <option value="Africa">África</option>
            <option value="Oceania">Oceanía</option>
            <option value="Antarctica">Antártida</option>
          </select>
        </div>
        <div className={styles.filter}>
          <select id="filterActiv" className={styles.select} onChange={handleFilterByActivity}>
            <option value=""> Actividades </option>
            <option value="Quitar"> Quitar Filtro </option>
            {activities.map((activity) => (
              <option key={activity.id} value={activity.name}>
                {activity.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    )
  }