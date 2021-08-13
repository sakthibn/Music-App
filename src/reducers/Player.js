const PlayerReducer = (state = {}, action) => {
    switch (action.type) {
        case "PLAY_PREVIEW" : {
            return {...state, show: true, trackDetails : action.payload}
        }
        case "CLOSE_PLAYER" : {
            return {...state, show: false, trackDetails : null}
        }
        case "UPDATE_LYRICS" : {
            return {...state, trackDetails : {...state.trackDetails, lyricsLoaded : action.payload.lyricsLoaded, lyrics : action.payload.lyrics}}
        }
        default:
            return state
    }
}

export default PlayerReducer