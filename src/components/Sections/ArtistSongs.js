import React, { useState, useEffect } from 'react';
import { fetchArtistTracks } from '../../services/api';
import {Row,Col} from "react-bootstrap";

export const ArtistSongs = ({track}) => {
    const [relatedSongsLoaded, setRelatedSongsLoaded] = useState(false);
    const [recommendedSongs, setRecommendedSongs] = useState([]);
    
    useEffect(() => {
        const _fetchArtistTracks = async () => {
            setRecommendedSongs(await fetchArtistTracks(track.artists[0].id));
            setRelatedSongsLoaded(true)
        };
        _fetchArtistTracks();
    }, []);

    

    return(
        <div className="related-tracks">
            {relatedSongsLoaded && 
                <Row>
                    <Col xs={12}>
                        <h4>Recommended Tracks</h4>
                    </Col>
                    {recommendedSongs.slice(0,10).map((track,index)=>{
                        return (
                            <Col key={index} sm={12} md={6}>
                                <div className="track" onClick={()=>window.open(track.url,"_blank")}>
                                    <img src={track.images.coverart} alt={track.title}/>
                                    <h6>{track.title}</h6>
                                </div>
                            </Col>
                        )
                
                    })}
                </Row>
            }
            {!relatedSongsLoaded && <h4>Loading Recommended Tracks...</h4>}
        </div>
    )
}