
import "./Header.css"
const Header = () => {
    return(
        <header>
            <div className="header-section">
                <h1 className="logo">Zaph Tours</h1>
                <div className="navigation">
                    <nav className="nav-items">
                        <ol className="nav-list">
                            <li className="nav-list-items"><a href="">Home</a></li>
                            <li className="nav-list-items"><a href="">Destination</a></li>
                            <li className="nav-list-items"><a href="">Trip Types</a></li>
                            <li className="nav-list-items"><a href="">Contacts</a></li>
                        </ol>
                    </nav>
                </div>
            </div>
        </header>
    )
}
export default Header;