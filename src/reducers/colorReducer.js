import { SET_APP_DEV, SET_NEW_COLOR } from "../actions/types"

const initialState = {
    app_color:'white',
    app_developer: 'Microsoft'
}

const colorReducer = (state = initialState,action) =>{

    const newState = {...state}

    switch(action.type){

            case SET_NEW_COLOR:
                console.log('SET_NEW_COLOR called')
                return{
                    ...newState,
                    app_color:action.payload
                }
            case SET_APP_DEV:
                return{
                    ...newState,
                    app_developer:action.payload
                }
            default:
                return newState;
    }
}
export default colorReducer;