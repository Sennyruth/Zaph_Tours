import { Link } from "react-router-dom";
import "./Header.css"
const Header = () => {
    return(
        <header>
            <div className="header-section">
                <h1 className="logo">Zaph Tours</h1>
                <div className="navigation">
                    <nav className="nav-items">
                        <ol className="nav-list">
                            <li className="nav-list-items"><Link to="/">Home</Link></li>
                            <li className="nav-list-items"><Link to="/destination">Destination</Link></li>
                            <li className="nav-list-items"><Link to="/trips">Trips</Link></li>
                            <li className="nav-list-items"><Link to="/contacts">Contacts</Link></li>
                        </ol>
                    </nav>
                </div>
            </div>
        </header>
    )
}
export default Header;