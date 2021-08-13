import {Row,Col} from "react-bootstrap";

export const TrackDetail = ({children,track,closeTrackDetails}) => {
    return(
        <div className="track-detail" key={track.title}>
            <div className="header-section">
                <span className="oi oi-x" title="x" aria-hidden="true" onClick={closeTrackDetails}/>
                <Row className="me-0 ms-0">
                    <Col className="pe-0 ps-0" sm={12} md={4}>
                        <img alt={track.title} src={track.images.coverart}/>
                    </Col>
                    <Col className="details pe-5 ps-4" sm={12} md={8}>
                        <div>
                            <h3>{track.title}</h3>
                            <h5>{track.subtitle}</h5>
                            <a className="shazamlink" target="_blank" rel="noreferrer" href={track.url}>View On Shazam</a>
                        </div>
                    </Col>
                </Row>
            </div>
            {children}
        </div>
    )
}