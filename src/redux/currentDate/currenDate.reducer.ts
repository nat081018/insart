import {CurrentDateTypes, CurrentDateInterface} from "./currenDate.types"
import {DateActionTypes} from "./currenDate.actions"


const INITIAL_STATE: CurrentDateInterface = {
    currentDate: ""
}
// ExpenseActionTypes

const currenDateReducer = (state = INITIAL_STATE, action: DateActionTypes) => {
    switch (action.type) {
        case CurrentDateTypes.CURRENT_DATE: return {
            ...state,
            currentDate: action.payload
            
        }
    
        default: return state
    }
}
export default currenDateReducer