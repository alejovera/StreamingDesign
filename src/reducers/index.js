import { lookingResult } from "../actions"

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_FAVORITE':
            return {
                ...state,
                myList: [...state.myList, action.payload]
            }
        case 'DELETE_FAVORITE':
            return{
                ...state,                
                myList: state.myList.filter(items => items.id !== action.payload)
            }
        case 'LOGIN_REQUEST':
            return{
                ...state,
                user: action.payload,
            }
        case 'LOGOUT_REQUEST':
            return{
                ...state,
                user: action.payload,
            }            
        case 'REGISTER_REQUEST':
            return{
                ...state,
                user: action.payload,
            }
        case 'GET_VIDEOS_SOURCE':
            return{
                ...state,
                playing: state.trends.find(item => item.id === Number(action.payload))
                || state.original.find(item => item.id === Number(action.payload))
                || []
            }
        case 'LOOKING_RESULTS':
            if(action.payload === "") return { ...state, looking: []};

            const listas = [...state.trends, ...state.originals];

            return {
                ...state,
                looking: listas.filter(item => item.title.toLowerCase().includes(action.payload.toLowerCase()))
            };
        
        default: return state;
    }    
}


export default reducer;