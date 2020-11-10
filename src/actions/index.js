export const setFavorite = payload => ({
    type: 'SET_FAVORITE',
    payload,
});

export const deleteFavorite = payload => ({
        type: 'DELETE_FAVORITE',
        payload,
});

export const logoutRequest = payload => ({
    type: 'LOGOUT_REQUEST', 
    payload,
})

export const loginRequest = payload =>({
    type: 'LOGIN_REQUEST',
    payload,
});

export const registerRequest = payload => ({
    type: 'REGISTER_REQUEST',
    payload,
})

export const getVideosSource = payload =>({
    type: 'GET_VIDEOS_SOURCE',
    payload,
});

export const lookingResults = payload => ({
    type: 'LOOKING_RESULTS',
    payload,
});