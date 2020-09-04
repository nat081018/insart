import exchangeActionsType from "./exchange.types"


export  const  exchangeFetchInfo = (exchanges) => ({
    type: exchangeActionsType.CURRENT_EXCHANGE_INFO,
    payload: exchanges
})