import exchangeActionsType from "./exchange.types"
import {exchangeFetchInfoAction} from "./exchange.actions"

import {fetchCurrencyExchangeIifo} from "./exchange.saga"

const  INITIAL_STATE =  {
    exchangeInfo: [],
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
        case exchangeActionsType.USER_ENTER_NEW_EXCHANGE_INFO: return {
            ...state,
            isFetching: false,
        
            exchangeInfo: state.exchangeInfo.map((item) => {
                if(item.id ===  action.payload._id) { 
                    return {
                        ...item,
                        buy: action.payload.newVal
                    } 
                } 
                return item
                })
            }
            case exchangeActionsType.USER_ENTER_NEW_EXCHANGE_INFO_SALE: return {
                ...state,
                isFetching: false,
            
                exchangeInfo: state.exchangeInfo.map((item) => {
                    if(item.id ===  action.payload._id) { 
                        return {
                            ...item,
                            sale: action.payload.newVal
                        } 
                    } 
                    return item
                    })
                }    

        default: return state
    }
}

export default exchangeReducer