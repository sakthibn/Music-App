import Nav from 'react-bootstrap/Nav'
import { useLocation } from "react-router-dom";

export const Header = () => {
    let location = useLocation()
    return(
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="/">Music App</a>
                <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link className={location.pathname.toLowerCase() === "/" ? "active" : ""}  href="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className={location.pathname.toLowerCase() === "/tracks" ? "active" : ""} eventKey="tracks" href="/tracks">Tracks</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className={location.pathname.toLowerCase() === "/artists" ? "active" : ""} eventKey="artists" href="/artists">Artists</Nav.Link>
                    </Nav.Item>
                </Nav>
                
            </div>
            </nav>
        </header>
    )
}