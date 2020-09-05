import exchangeActionsType from "./exchange.types"
import {exchangeFetchInfoAction} from "./exchange.actions"
import {fetchCurrencyExchangeIifo} from "./exchange.saga"

const  INITIAL_STATE =  {
    exchangeInfo: null,
    isFetching: false,
    errorMesage: undefined
}

const exchangeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case exchangeActionsType.FETCH_REQUESTED: return{
            ...state,
            isFetching: true
        }
        case exchangeActionsType.CURRENT_EXCHANGE_INFO: return {
            ...state, 
            isFetching: false,
            exchangeInfo: action.payload
        }
        case exchangeActionsType.FETCH_FAILED: return {
            ...state, 
            isFetching: false,
            errorMesage: action.payload
        }

        default: return state
    }
}

export default exchangeReducer