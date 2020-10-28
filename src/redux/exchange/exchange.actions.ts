import ExchangeActionsType from "./exchange.types"
import {newExchangeValue,  newExchangeValueSale} from "../utilits"


export const exchangeFetchStartAction = () => ({
    type: typeof ExchangeActionsType.FETCH_REQUESTED
})


export const exchangeFetchInfoAction = (data: object) => ({
    type: typeof ExchangeActionsType.CURRENT_EXCHANGE_INFO, 
    payload: data
})


interface INewExchange {
    currentID: string,
    newVal: number
}


export const userEnterNewExchange = ({currentID, newVal} : INewExchange) => ({
    type: typeof ExchangeActionsType.USER_ENTER_NEW_EXCHANGE_INFO,
    payload: newExchangeValue(currentID, newVal)
        

})

export const userEnterNewExchangeSale = ({currentID, newVal} : INewExchange)  => ({
    type: typeof ExchangeActionsType.USER_ENTER_NEW_EXCHANGE_INFO_SALE,
    payload: newExchangeValueSale (currentID, newVal)
})

export const exchangeFetchErrorAction = (error: any) => ({
    type: typeof ExchangeActionsType.FETCH_FAILED,
    payload: error.errorMesage
})
