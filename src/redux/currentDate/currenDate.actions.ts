
import {CurrentDateTypes, CurrentDateInterface} from "./currenDate.types"

import {getDateLocal} from "../utilits"

const date: any =  getDateLocal()
console.log(date)

export interface currenDateActionInterface {
    type: typeof CurrentDateTypes.CURRENT_DATE,
    payload: any
}

export type DateActionTypes = currenDateActionInterface

export type AppActions = DateActionTypes;

// actions

export const currenDateAction = () : AppActions => ({
    type: CurrentDateTypes.CURRENT_DATE,
    payload: date
})
