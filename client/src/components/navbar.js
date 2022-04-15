import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import './styles/navbar.css';

export default function Navbar(){
    return (
        <div className='Header'>
            <img src={logo} className="Header-Logo" alt="logo" />
            <Link to="/" className="Header-Title">Rank-a-Hack</Link>
            <div className='VerticalSplit'></div>
        </div>
    );
}