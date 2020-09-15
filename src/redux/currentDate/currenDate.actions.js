import {currentDateTypes} from "./currenDate.types"
import {getDateLocal} from "../utilits"


export const currenDateAction = () => ({
    type: currentDateTypes.CURRENT_DATE,
    payload:  getDateLocal()
})