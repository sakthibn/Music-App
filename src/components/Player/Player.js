import React, { useState } from 'react';
import { Row,Col, Container } from 'react-bootstrap';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import {closePlayerAction} from "../../actions/Player";
import {Modal} from "react-bootstrap";
import {TrackDetail} from "../index";

export const Player = () => {

    const player = useSelector(state => state.player)
    const [show, setShow] = useState(false);

    const dispatch = useDispatch();
    const closePlayer = () =>{
        dispatch(closePlayerAction())
    }

    const showLyrics = async () => {
        setShow(true)
    }

    const closeLyrics = () => {
        setShow(false)
    }
    return(
        <div className="player-wrap">
            <Container>
                <Row className="align-items-center">
                    <Col sm md="3">
                    <img src={player.trackDetails.images.coverart} alt={player.trackDetails.title}/>
                    <div className="preview-details">
                        <h6>Now Previewing</h6>
                        <h5>{player.trackDetails.title}</h5>   
                        <p className="mb-0">{player.trackDetails.subtitle}</p>   
                    </div>
                    </Col>
                    <Col sm md="6">
                        <AudioPlayer
                            autoPlay
                            src={player.trackDetails.previewUri}
                            //onPlay={e => console.log("onPlay")}
                            // other props here
                        />
                    </Col>
                    <Col className="text-center" sm md="3">
                        {player.trackDetails.lyricsLoaded && <button className="btn btn-light" onClick={showLyrics}>View Lyrics</button>}
                        <span className="oi oi-x mt-2 float-end" title="x" aria-hidden="true" onClick={closePlayer}/>

                    </Col>
                </Row>
            </Container>
            <Modal size="lg" show={show} fullscreen={"sm-down"} onHide={closeLyrics}>
                <TrackDetail closeTrackDetails={closeLyrics} track={player.trackDetails}>
                    <div className="lyrics-wrap">
                        <Row>
                            <Col xs={12}>
                                <h4>Lyrics</h4>
                            </Col>
                            <Col xs={12}>
                                {player.trackDetails.lyricsLoaded && player.trackDetails.lyrics.map((para,index) => {
                                    return(
                                        <p key={index}>{para}</p>
                                    )
                                })}
                            </Col>
                         </Row>
                    </div>
                </TrackDetail>
            </Modal>
        </div>
    )
}