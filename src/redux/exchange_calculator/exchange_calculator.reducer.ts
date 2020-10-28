import {ExchangeCalculatorTypes} from "./exchange_calculator.types"
import {exchangeCalculatorActions} from "./exchange_calculator.actions"

interface IInitial__state {
    currencies: any[],
    optionValue: string,
    amount: string,
    convertTo: string,
    result: string,
}

const INITIAL_STATE:  IInitial__state = {
    currencies: ["UAH", "USD", "EUR", "RUR", "BTC"],
    optionValue: "UAH",
    amount: "",
    convertTo: "USD",
    result: "",
}


 export const exchangeCalculatorReducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case ExchangeCalculatorTypes.CALCULATOR_RESULT: return {
            ...state
        }
            
        default:
            break;
    }
} 