import {Row,Col} from "react-bootstrap";

export const ArtistDetail = ({children,artist,close}) => {
    return(
        <div className="artist-detail" key={artist.subtitle}>
            <div className="header-section">
                <span className="oi oi-x" title="x" aria-hidden="true" onClick={close}/>
                <Row className="me-0 ms-0">
                    <Col className="pe-0 ps-0" sm={12} md={2}>
                        <img alt={artist.subtitle} src={artist.images.background}/>
                    </Col>
                    <Col className="details pe-5 ps-4" sm={12} md={8}>
                        <div>
                            <h3>{artist.subtitle}</h3>
                        </div>
                    </Col>
                </Row>
            </div>
            {children}
        </div>
    )
}