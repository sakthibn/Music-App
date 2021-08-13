import React, { useState, useEffect } from 'react';
import { Row,Col } from 'react-bootstrap';
import Loader from "../../assets/img/loading.gif";
import { fetchChartTracks } from '../../services/api';
import {TrackCard} from "../../components/index"

export const Tracks = () => {

    const [dataLoaded, setDataLoaded] = useState(false)
    const [tracksData, setTracksData] = useState([])
    
    useEffect(() => {
        
        const fetchTracks = async () => {
            setTracksData(await fetchChartTracks());
            setDataLoaded(true);

        };
        fetchTracks();
    }, []);

    if(dataLoaded){
        return(
            <div className="page-view">
                <h3>Tracks</h3>
                <Row>
                    {tracksData.map((track,index)=>{
                        return (
                            <Col key={index} xs={6} ms={4} lg={3}>
                                <TrackCard track={track} key={index}/>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        )
    } else {
        return(
            <Row className="justify-content-center">
                <img className="loader" src={Loader} alt="loader"/>
            </Row>
        )
    }
}