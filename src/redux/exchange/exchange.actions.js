import exchangeActionsType from "./exchange.types"

export const exchangeFetchStartAction = () => ({
    type: exchangeActionsType.FETCH_REQUESTED
})


export  const  exchangeFetchInfoAction = (data) => ({
    type: exchangeActionsType.CURRENT_EXCHANGE_INFO,
    payload: data
    
})

export const exchangeFetchErrorAction = (error) => ({
    type: exchangeActionsType.FETCH_FAILED,
    payload: error.errorMesage
})
