import { useHistory, Link } from "react-router-dom";
import { useState } from "react";
import "../styles/Navbar.scss"

export function Navbar({ searchText, setSearchText }) {
    const history = useHistory();
    const [closeBurger, setBurgerState] = useState(true);

    const handleChange = (e) => {
        history.push("/search")
        setSearchText(e.target.value)
    }
    return (
        <nav className="navbar-container">
            <div className="nav-bar">
                <Link className="navbar-brand" to="/">Movie Browser</Link>
                <div className={closeBurger ? "navbar" : "navbar-mobile"}>
                    <form className="nav-search">
                        <input className="search-input" type="text" placeholder="Search"
                            value={searchText}
                            onChange={handleChange} 
                            />
                        {/* <button className="search-submit-button" type="submit">Search</button> */}
                    </form>
                    <div className="nav-links">
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/about">About</Link>
                    </div>
                    <div className="burger-button"
                        onClick={() => setBurgerState(!closeBurger)}>
                        <div className={closeBurger ? "opened-bar-1" : "closed-bar-1"}></div>
                        <div className={closeBurger ? "opened-bar-2" : "closed-bar-2"}></div>
                        <div className={closeBurger ? "opened-bar-3" : "closed-bar-3"}></div>
                    </div>
                </div>
            </div>
        </nav>
    )
}