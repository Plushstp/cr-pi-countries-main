import React from "react"
import { useLocation } from "react-router-dom"
import { NavLink } from "react-router-dom"
import styles from "../Nav/Nav.module.css"

export default function Nav() {

  const location = useLocation()
  
  if (location.pathname === "/") {
    return null
  }

  return (
    <nav className={styles.navbar}>
      <div> 
        <NavLink to="/home" className={({ isActive }) => isActive ? styles.activeClassHome : { color: "#93a8b4" }}> Home </NavLink>
        <NavLink to="/form" className={({ isActive }) => isActive ? styles.activeClassForm : { color: "#93a8b4" }}> Form </NavLink>

      </div>
    </nav>
  )
}

/* No pide componentes Activities, tampoco me gusta como queda

        <NavLink to="/activities" className={({ isActive }) => isActive ? styles.activeClassActivities : { color: "#93a8b4" }}> Activities </NavLink>
    
*/
