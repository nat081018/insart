import { call, put,  takeLatest, all } from 'redux-saga/effects'
import { exchangeFetchInfoAction} from "./exchange.actions"
import exchangeActionsType from "./exchange.types"
import {fetchCurrencyExchange} from "./utilits"


function* getApiData(action) {
    try {
      // do api call
      const data = yield call(fetchCurrencyExchange);
      yield put(exchangeFetchInfoAction(data));
    } catch (e) {
      console.log(e);
    }
  }

export function*  fetchCurrencyExchangeIifo(action)  {
    try { 
    const data = yield call(fetchCurrencyExchange)
    yield console.log(data)
    yield put(exchangeFetchInfoAction(data))
     
    }catch(error){
        yield put(exchangeActionsType.FETCH_FAILED, error)
     }
    }

export function* watcherFetchExchangeStart ()  {
    yield takeLatest(exchangeActionsType.CURRENT_EXCHANGE_INFO, getApiData)
}    

export function* exchangeSaga () {
    yield all([
        call(watcherFetchExchangeStart )
    ])
}