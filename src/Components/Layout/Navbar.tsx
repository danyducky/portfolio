import './Navbar.scss'
import {NavLink} from "react-router-dom";
import Theme from "../Common/Theme/Theme";

function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar__logo'>
                D.
            </div>

            <div className='navbar__tabs'>
                <Theme.ToggleButton/>

                <NavLink to='/'>Main</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/projects'>Projects</NavLink>
                <NavLink to='/resume'>Resume</NavLink>
            </div>
        </div>
    )
}

export default Navbar;