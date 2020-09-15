import React,  {useEffect } from "react"
import "./currency_exchange_table.style.scss"
import {connect} from "react-redux"

import {currenDateAction } from "../../redux/currentDate/currenDate.actions"
import {exchangeFetchStartAction } from "../../redux/exchange/exchange.actions"

import CurrencyExchange from "../currency_exchange/currency_exchange.component"

import  ExchangeCalculator from "../exchange_calculator/exchange_calculator.component"


const  CurrencyExchangeTable = ({ currentDate, exchangeInfo, currenDateAction , exchangeFetchStartAction}) => {
    console.log(currentDate)

    useEffect(() => {
        currenDateAction()
    }, []) 
    console.log(exchangeInfo) // true

    useEffect(() => {
        exchangeFetchStartAction()
    }, []) 
    
    return (
            <div className="exchenge_table">
                <table>
                <caption>Currency exchange table</caption>
                    <tbody>
                        <tr>
                        <th className="th__width">Date: {currentDate}</th>
                            <th className="th__width">Buy</th>
                            <th className="th__width">Sell</th>
                        </tr>
                        {
                            exchangeInfo.map(({base_ccy, ccy, buy, sale, id },) => ( 
                            <CurrencyExchange 
                            key={`${ccy}${base_ccy}`}
                            base_ccy={base_ccy}
                            ccy={ccy}
                            buy={buy}
                            sale={sale}
                            id={id}
                            />
                            ))
                        }      
                    </tbody>
                </table>
            <div>
                <ExchangeCalculator
                currentDate={currentDate}
                exchangeInfo={exchangeInfo}
                />
            </div>
            </div>
        )
    
}

const  mapStateToProps = (state) => ({
    exchangeInfo: state.exchange.exchangeInfo,
    currentDate: state.date.currentDate
})

const mapDispatchToProps = dispatch => ({
    exchangeFetchStartAction:  () => dispatch(exchangeFetchStartAction()),
    currenDateAction: () => dispatch(currenDateAction())
  });

export default connect(mapStateToProps,  mapDispatchToProps)(CurrencyExchangeTable)

