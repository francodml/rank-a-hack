import logo from '../logo.svg';
import './navbar.css';

export default function Navbar(){
    return (
        <div className='Header'>
            <img src={logo} className="Header-Logo" alt="logo" />
            <a href='/' className="Header-Title">Rank-a-Hack</a>
            <div className='VerticalSplit'></div>
        </div>
    );
}