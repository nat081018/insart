import exchangeActionsType from "./exchange.types"
import {newExchangeValue,  newExchangeValueSale} from "../utilits"

export const exchangeFetchStartAction = () => ({
    type: exchangeActionsType.FETCH_REQUESTED
})


export const exchangeFetchInfoAction = (data) => ({
    type: exchangeActionsType.CURRENT_EXCHANGE_INFO, 
    payload: data
})


export const userEnterNewExchange = (currentID, newVal) => ({
    type: exchangeActionsType.USER_ENTER_NEW_EXCHANGE_INFO,
    payload: newExchangeValue(currentID, newVal)
        

})

export const userEnterNewExchangeSale = (currentID, newVal) => ({
    type: exchangeActionsType.USER_ENTER_NEW_EXCHANGE_INFO_SALE,
    payload: newExchangeValueSale(currentID, newVal)
        

})


export const exchangeFetchErrorAction = (error) => ({
    type: exchangeActionsType.FETCH_FAILED,
    payload: error.errorMesage
})
