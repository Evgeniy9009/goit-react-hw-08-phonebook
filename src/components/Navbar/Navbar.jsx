import { Link, NavLink } from 'react-router-dom';

import NavbarMenu from "./NavbarMenu/NavbarMenu";
import NavbarAuth from './NavbarAuth/NavbarAuth';

import styles from "./navbar.module.css";
import NavbarUser from './NavbarUser/NavbarUser';
import useAuth from '../../shared/hooks/useAuth';

const getClassName = ({isActive}) => {
    return isActive ? `${styles.link} ${styles.active}` : styles.link;
}

const Navbar = () => {
    const isLogin = useAuth()
    return (
        <nav className={styles.navbar}>
            <div className="container">
                <div className={styles.row}>
                    <NavLink className={getClassName} to="/">Logo</NavLink>
                    { isLogin && <NavbarMenu />}
                    { isLogin ? <NavbarUser/>  : <NavbarAuth/>}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;