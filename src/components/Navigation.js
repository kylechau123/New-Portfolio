import { NavLink } from "react-router-dom";


const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/">About</NavLink></li>
                <li><NavLink to="/projects">Portfolio</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/resume">Resume</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navigation;