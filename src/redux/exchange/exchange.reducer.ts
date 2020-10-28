import ExchangeActionsType from "./exchange.types"

interface IInitial__state {
    exchangeInfo: [],
    isFetching: boolean,
    errorMesage: any
}

const  INITIAL_STATE: IInitial__state =  {
    exchangeInfo: [],
    isFetching: false,
    errorMesage: undefined
}

const exchangeReducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case ExchangeActionsType.FETCH_REQUESTED: return{
            ...state,
            isFetching: true
        }
        case ExchangeActionsType.CURRENT_EXCHANGE_INFO: return {
            ...state, 
            isFetching: false,
            exchangeInfo: action.payload
        }
        case ExchangeActionsType.FETCH_FAILED: return {
            ...state, 
            isFetching: false,
            errorMesage: action.payload
        }
        case ExchangeActionsType.USER_ENTER_NEW_EXCHANGE_INFO: return {
            ...state,
            isFetching: false,
        
            exchangeInfo: state.exchangeInfo.map((item: any) => {
                if(item.id ===  action.payload._id) { 
                    return {
                        ...item,
                        buy: action.payload.newVal
                    } 
                } 
                return item
                })
            }
            case ExchangeActionsType.USER_ENTER_NEW_EXCHANGE_INFO_SALE: return {
                ...state,
                isFetching: false,
            
                exchangeInfo: state.exchangeInfo.map((item: any) => {
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