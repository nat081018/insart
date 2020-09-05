import {combineReducers} from "redux"
import exchangeReducer from "./exchange/exchange.reducer"

const  rootReducer = combineReducers({
    exchange: exchangeReducer,
})

export default rootReducer