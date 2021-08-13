import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import {ArtistCard,TrackCard} from "../../components/index"
import {Carousel} from "../../components/index"
import { /*fetchChartList,*/fetchChartTracks } from '../../services/api';
import Loader from "../../assets/img/loading.gif";
const _ = require('lodash/array');

export const Home = () => {

    //const [listData, setListData] = useState({countries : [], genres : []})
    const [dataLoaded, setDataLoaded] = useState(false)
    const [tracksData, setTracksData] = useState([])
    const [artistsData, setArtistsData] = useState([])
    const [slidesPerPage, setSlidesPerPage] = useState({tracks : 0, artists : 0})

    useEffect(() => {
        // const fetchList = async () => {
        //     setListData(await fetchChartList());
        // };
        const fetchTracks = async () => {
            let tracks = await fetchChartTracks()
            let artists = _.uniqBy(tracks,"subtitle")
            setTracksData(tracks);
            setArtistsData(artists);
            setDataLoaded(true);
        };
        // fetchList();
        fetchTracks();
        const breakpointRefreshValue = () => {
            if (window.screen.width < 576) {
                // do something for small screens
                setSlidesPerPage({tracks : 2, artists : 2})
            }
            else if (window.screen.width < 768) {
                // do something for medium screens
                setSlidesPerPage({tracks : 3, artists : 4})
            }
            else if (window.screen.width < 992 ) {
                // do something for big screens
                setSlidesPerPage({tracks : 4, artists : 6})
            }
            else  {
                // do something for huge screens
                setSlidesPerPage({tracks : 5, artists : 7})
            }
        };
        breakpointRefreshValue();
        window.addEventListener("resize",breakpointRefreshValue)
        return ()=>{
            window.removeEventListener("resize",breakpointRefreshValue)

        }
    }, []);

    if(dataLoaded){
        return(
            <div>
                <Row className="mb-5">
                <Carousel key={slidesPerPage.tracks} title="Top Tracks" href="/tracks" itemPerPage={slidesPerPage.tracks} slideCount={tracksData.length}>
                    <React.Fragment>
                        {tracksData.map((track,index)=>{
                            return (
                                <TrackCard track={track} key={index}/>
                            )
                    
                        })}
                    </React.Fragment>
                </Carousel>
                </Row>
                <Row className="mb-5">
                <Carousel key={slidesPerPage.tracks} title="Top Artists" href="/artists" itemPerPage={slidesPerPage.artists} slideCount={artistsData.length}>
                    <React.Fragment>
                    {artistsData.map((artist,index)=>{
                        return (
                            <ArtistCard artist={artist} key={index}/>
                        )
                    })}
                    </React.Fragment>
                </Carousel>
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