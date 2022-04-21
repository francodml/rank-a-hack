import styles from './styles/navbar.module.scss';
import logo from '../logo.svg';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar(){

    const NavButtonStyle = ({isActive}) =>{
        return `${styles.NavButton} ${isActive ? styles.active : ''}`;
    }

    return (
        <div className={styles.Navbar}>
            <img src={logo} className={styles.Logo} alt="logo" />
            <Link to="/" className={styles.Title}>Rank-a-Hack</Link>
            <div className={styles.VerticalSplit}></div>
            <NavLink to="/" className={NavButtonStyle}>Hackathons</NavLink>
            <NavLink to="devranking" className={NavButtonStyle}>Top Devs</NavLink>

        </div>
    );
}