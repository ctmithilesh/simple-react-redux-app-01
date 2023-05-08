import { SET_NEW_COLOR } from "./types"

export const setNewColor = (dispatch,data) =>{

        dispatch({
            type:SET_NEW_COLOR,
            payload: data
        })
}