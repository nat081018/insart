import {combineReducers} from "redux"
import exchangeReducer from "./exchange/exchange.reducer"
import currenDateReducer from "./currentDate/currenDate.reducer"

const  rootReducer = combineReducers({
    exchange: exchangeReducer,
    date: currenDateReducer,
  
})

export default rootReducer