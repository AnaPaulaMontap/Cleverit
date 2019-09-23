import * as actions from '../Action/actionTypes'

export default (
    state = {
        result: ""
    }, 
    action
)=> {
    switch (action.type){
     case actions.VIEW_RESULT:
     return {
         ...state,
         result: action.payload.result,
     }
        default:
        return {...state}
    }
} 