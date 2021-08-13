import {Modal} from "react-bootstrap";
import { useDispatch } from 'react-redux'
import React, { useState } from 'react';
import { playPreviewAction, updateLyricsAction} from '../../actions/Player';
import {TrackDetail,ArtistSongs} from "../index";
import {fetchTrackDetails} from "../../services/api";

export const TrackCard = ({track}) => {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();

    const showTrackDetail = () => {
        setShow(true)
    }

    const closeTrackDetails = () => {
        setShow(false)
    }

    const playPreview =()=>{
        if(track.hub.actions.filter(x => x.type === "uri").length > 0){
            const showTrackDetail = async () => {
                let trackDetails = await fetchTrackDetails(track.key);
                dispatch(updateLyricsAction({lyricsLoaded : true, lyrics : trackDetails.sections.filter(x => x.type === "LYRICS")[0].text}))
            }
            showTrackDetail()
            let obj = {
                title : track.title,
                subtitle : track.subtitle,
                images : track.images,
                key:track.key,
                lyricsLoaded : false,
                previewUri : track.hub.actions.filter(x => x.type === "uri")[0].uri
            }
            dispatch(playPreviewAction(obj))
            
            
        } else {
            alert("Preview not available")
        }
    }

    return(
        <React.Fragment>
            <div className="track-card flexcard">
                <img src={track.images.coverart} alt={track.title}/>
                <div className="play-overlay">
                    <span className="oi oi-play-circle" title="play-circle" aria-hidden="true" onClick={playPreview}/>
                </div>
                <div onClick={showTrackDetail} className="details">
                    <h5>{track.title}</h5>
                </div>
            </div>
            <Modal key="track" size="lg" show={show} fullscreen={"sm-down"} onHide={closeTrackDetails}>
                <TrackDetail closeTrackDetails={closeTrackDetails} track={track}>
                   <ArtistSongs track={track}/>
                </TrackDetail>
            </Modal>
        </React.Fragment>
        
    )
}