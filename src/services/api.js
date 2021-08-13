import axios from 'axios';
const url = 'https://shazam.p.rapidapi.com';
const rapidAPIKey = "fe51f4bce7mshe456c1c9c1d01f6p1d548ejsn0680534d4115"
const rapidAPIHost = "shazam.p.rapidapi.com"
const headers = {
    'x-rapidapi-key': rapidAPIKey,
    'x-rapidapi-host': rapidAPIHost
}
export const fetchChartList = async () => {
    let endPoint = `${url}/charts/list`;
    try {
        const { data : {countries, global : {genres}} } = await axios.get(endPoint,{headers : headers});
        return {countries,genres} ;
    } catch (error) {
        return error;
    }
};

export const fetchChartTracks = async (startFrom) => {
    let endPoint = `${url}/charts/track`;
    let  params = {
        locale: 'en-US',
        pageSize: '20', 
        startFrom: startFrom
    }
    try {
        const { data : {tracks} } = await axios.get(endPoint,{headers : headers,params : params});
        return tracks ;
    } catch (error) {
        return error;
    }
}

export const fetchArtistTracks = async (key) => {
    let endPoint = `${url}/songs/list-artist-top-tracks`;
    let  params = {
        id: key, locale: 'en-US'
    }
    try {
        const { data : {tracks} } = await axios.get(endPoint,{headers : headers,params : params});
        return tracks ;
    } catch (error) {
        return error;
    }
}

export const fetchTrackDetails = async (key) => {
    let endPoint = `${url}/songs/get-details`;
    let  params = {
        key: key, locale: 'en-US'
    }
    try {
        const { data } = await axios.get(endPoint,{headers : headers,params : params});
        return data ;
    } catch (error) {
        return error;
    }
}