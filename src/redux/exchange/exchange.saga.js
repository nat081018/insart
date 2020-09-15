import { call, put,  takeLatest, all } from 'redux-saga/effects'
import { exchangeFetchInfoAction} from "./exchange.actions"
import exchangeActionsType from "./exchange.types"
import {fetchCurrencyExchange} from "../utilits"


function* getApiData(action) {
    try {
      // do api call
      const data = yield call(fetchCurrencyExchange);
      yield put(exchangeFetchInfoAction(data));
    } catch (error) {
      yield put(exchangeFetchInfoAction.FETCH_FAILED, error)
    }
  }


export function* watcherFetchExchangeStart ()  {
    yield takeLatest(exchangeActionsType.FETCH_REQUESTED, getApiData)
}    

export function* exchangeSaga () {
    yield all([
        call(watcherFetchExchangeStart)
    ])
}