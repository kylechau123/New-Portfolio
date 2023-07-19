import Navigation from "./Navigation";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="header">
                <h1><NavLink to="/" className="logo">Lavell Juan</NavLink></h1>
                <Navigation />
            </div>
        </header>
    )
}

export default Header;