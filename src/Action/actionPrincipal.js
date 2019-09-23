import * as actions from './actionTypes';

//Guardar resultado en Storage.

export const diplayResult = dispatch => result =>{
    dispatch({
        type: actions.VIEW_RESULT,
        payload: result
    })
}