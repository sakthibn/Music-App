export const playPreviewAction = (paylod) => {
    return{
        type: 'PLAY_PREVIEW',
        payload: paylod
    }
}

export const closePlayerAction = () => {
    return{
        type: 'CLOSE_PLAYER',
        payload: null
    }
}

export const updateLyricsAction = (lyrics) => {
    return{
        type: 'UPDATE_LYRICS',
        payload: lyrics
    }
}
