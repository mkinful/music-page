import './navbar.css';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <div className="main-nav">
            <div className="nav-logo">

            </div>

            <div className="navbar">
                <div className="navlist-item"><Link className="nav-links" to='/'>Home</Link></div>
                <div className="navlist-item"><Link className="nav-links" to='/music'>Music</Link></div>
                <div className="navlist-item"><Link className="nav-links" to='/about'>About</Link></div>
            </div>
        </div>
    )
}

