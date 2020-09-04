import exchangeActionsType from "./exchange.types"
import {exchangeFetchInfo} from "./exchange.actions"
import {fetchCurrencyExchangeIifo} from "./utilits"

const  INITIAL_STATE =  {
    exchangeInfo: []
}

const exchangeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case exchangeActionsType.CURRENT_EXCHANGE_INFO: return {
            ...state, 
            exchangeInfo: fetchCurrencyExchangeIifo()
        }
            

        default: return state
    }
}

export default exchangeReducer