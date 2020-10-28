import { all, call } from 'redux-saga/effects';
import {exchangeSaga} from "./exchange/exchange.saga"

export default function* rootSaga() {
    yield all([
      call(exchangeSaga)

    ])
  }