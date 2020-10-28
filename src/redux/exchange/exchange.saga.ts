import { call, put,  takeLatest, all } from 'redux-saga/effects'
import { exchangeFetchInfoAction} from "./exchange.actions"
import ExchangeActionsType from "./exchange.types"
import {fetchCurrencyExchange} from "../utilits"


function* getApiData(action :any) {
    try {
      //  api call
      const data = yield call(fetchCurrencyExchange);
      yield console.log(data)
      yield put(exchangeFetchInfoAction(data));
    } catch (error) {
      yield put(error)
    }
  }


export function* watcherFetchExchangeStart ()  {
    yield takeLatest(ExchangeActionsType.FETCH_REQUESTED, getApiData)
}    

export function* exchangeSaga () {
    yield all([
        call(watcherFetchExchangeStart)
    ])
}