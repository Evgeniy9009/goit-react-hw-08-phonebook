import { NavLink } from "react-router-dom"
import styles from "./navbar-auth.module.css";



const getClassName = ({isActive}) => {
    return isActive ? `${styles.link} ${styles.active}` : styles.link;
}

export default function NavbarAuth() {
  return (
    <div >
        <NavLink className={getClassName} to="/register">Register</NavLink>
        <NavLink className={getClassName} to="/login">Login</NavLink>
    </div>
  )
}