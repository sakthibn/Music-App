import React, { useState, useEffect } from 'react';
import { Row,Col } from 'react-bootstrap';
import { fetchChartTracks } from '../../services/api';
import {ArtistCard} from "../../components/index";
import Loader from "../../assets/img/loading.gif";
const _ = require('lodash/array');

export const Artists = () => {

    const [dataLoaded, setDataLoaded] = useState(false)
    const [artistsData, setArtistsData] = useState([])
    
    useEffect(() => {
        
        const fetchTracks = async () => {
            let tracks = await fetchChartTracks()
            let artists = _.uniqBy(tracks,"subtitle")
            setArtistsData(artists);
            setDataLoaded(true)
        };
        fetchTracks();
    }, []);
    if(dataLoaded){
        return(
            <div className="page-view">
                <h3>Artists</h3>
                <Row>
                    {artistsData.map((artist,index)=>{
                        return (
                            <Col key={index} xs={6} md={3} lg={4}>
                                <ArtistCard artist={artist} key={index}/>
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