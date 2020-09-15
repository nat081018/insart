import {exchangeCalculatorTypes} from "./exchange_calculator.types"
import {exchangeCalculatorActions} from "./exchange_calculator.actions"

const INITIAL_STATE = {
    currencies: ["UAH", "USD", "EUR", "RUR", "BTC"],
    optionValue: "UAH",
    amount: "",
    convertTo: "USD",
    result: "",
}


const exchangeCalculatorReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case exchangeCalculatorTypes.CALCULATOR_RESULT: return {
            ...state
        }
            
            break;
    
        default:
            break;
    }
} 