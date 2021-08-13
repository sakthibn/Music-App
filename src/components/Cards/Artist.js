import {ArtistDetail} from "../index";
import {Modal} from "react-bootstrap";
import React, { useState } from 'react';
import {ArtistSongs} from "../index";

export const ArtistCard = ({artist}) => {
    const [show, setShow] = useState(false);
   

    const showDetail = () => {
        setShow(true)
    }

    const closeDetails = () => {
        setShow(false)
    }

    return(
        <div className="artist-card flexcard">
            <img onClick={showDetail} src={artist.share.avatar} alt={artist.subtitle}/>
            <div onClick={showDetail} className="details">
                <h5>{artist.subtitle}</h5>
            </div>
            <Modal size="lg" show={show} fullscreen={"sm-down"} onHide={closeDetails}>
                <ArtistDetail close={closeDetails} artist={artist}>
                   <ArtistSongs track={artist}/>
                </ArtistDetail>
            </Modal>
        </div>
    )
}