import {currentDateTypes} from "./currenDate.types"

const INITIAL_STATE = {
    currentDate: '' 
}


const currenDateReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case currentDateTypes.CURRENT_DATE: return {
            ...state,
            currentDate: action.payload
            
        }
    
        default: return state
    }
}

export default currenDateReducer