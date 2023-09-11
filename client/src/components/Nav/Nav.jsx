import React, { useState } from "react"
import { useLocation } from "react-router-dom"
import { NavLink } from "react-router-dom"
import styles from "../Nav/Nav.module.css"
import searchIcon from "../../img/searchIcon.png"
import { useDispatch, useSelector } from "react-redux"
import { getCountryByName } from "../../redux/actions"

export default function Nav() {
  const dispatch = useDispatch()
  const location = useLocation()
  const [name, setName] = useState("")

  const handleSearchChange = (e) => {
    e.preventDefault()
    setName(e.target.value)
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (name.length === 0) return alert('Debe colocar un Pais');
    dispatch(getCountryByName(name))
    setName('')
  }

  if (location.pathname === "/") {
    return null
  }

  return (
    <nav className={styles.navbar}>
      <div> 
        <NavLink to="/home" className={({ isActive }) => isActive ? styles.activeClassHome : { color: "#93a8b4" }}> Home </NavLink>
        <NavLink to="/form" className={({ isActive }) => isActive ? styles.activeClassForm : { color: "#93a8b4" }}> Form </NavLink>
        <NavLink to="/activities" className={({ isActive }) => isActive ? styles.activeClassActivities : { color: "#93a8b4" }}> Activities </NavLink>
      </div>

      <div className={styles.flexNav}>
        <form onSubmit={handleSearchSubmit} className={styles.searchForm}>
          <div className={styles.searchInputContainer}>
            <img src={searchIcon} className={styles.searchIcon} />
            <input
              type="text"
              value={name}
              onChange={handleSearchChange}
              placeholder="Buscar País..."
              className={styles.inputSearch}
            />
          </div>
          <button type="submit" className={styles.searchButton}>
            Search
          </button>
        </form>
      </div>
    </nav>
  )
}