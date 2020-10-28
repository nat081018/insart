import React,  {FC, useEffect, useState } from "react"
import "./currency_exchange_table.style.scss"
import {connect, ConnectedProps } from "react-redux"

import { Reducer } from 'redux'
import { InferableComponentEnhancerWithProps } from 'react-redux';


import {currenDateAction } from "../../redux/currentDate/currenDate.actions"
import {exchangeFetchStartAction } from "../../redux/exchange/exchange.actions"

import CurrencyExchange from "../currency_exchange/currency_exchange.component"
import  ExchangeCalculator from "../exchange_calculator/exchange_calculator.component"
import  Error from "../error/error.component"

//
import {CurrentDateInterface} from "../../redux/currentDate/currenDate.types"
import {AppState} from "../../redux/store"
import {AppActions} from "../../redux/currentDate/currenDate.actions"


// type ConnectedProps<T> = T extends InferableComponentEnhancerWithProps<infer Props, infer _> ? Props : never;

interface  TableState  {
    currentDate?: any,
    date?: any,
    exchange?: any,
    exchangeInfo?: any,
    base_ccy?: string, 
    ccy?: string, 
    buy?: number, 
    sale?: number, 
    id?: string | number, // валидная запись как в interface and type 
    item?: any,
    currenDateAction?: any , 
    exchangeFetchStartAction?: any
 }

 interface TableProps {}

 interface LinkStateProps {
  currentDate: CurrentDateInterface;
}

 type Props = TableState & LinkStateProps & TableProps

 const mapStateToProps = (
  state: AppState,
  ownProps: TableProps 
): LinkStateProps => ({
  currentDate: state.date.currentDate
});

const connector = connect(mapStateToProps) 

// type PropsFromRedux = ConnectedProps<typeof connector>; 

const  CurrencyExchangeTable: React.FC<Props> = (props) => {
  console.log(props)
  
    // console.log(props.currentDate)

    const [serverErrorCount, setServerError] = useState({hidden: false})
    
//  start  create counter, store  in localStorage 

    const  reset_counter = () => {
        localStorage.removeItem('on_load_counter');
        console.log("server error ")
      }
      
    const counterApiRequest = () => {
        let count: any = localStorage.getItem('on_load_counter');
       
      if (count === null) {
        count = 0;
      }
       
      count++;
      
      if (count === 5) {
        reset_counter()
        console.log("server error")
        setServerError({
            hidden: true
        })
        return count === 0
      }
       
      localStorage.setItem("on_load_counter",count);
       console.log(count)
      
      }

      useEffect(() => {
        counterApiRequest()
    }, []) 
    
// end 
    useEffect(() => {
        currenDateAction()
    }, []) 
 

    useEffect(() => {
        exchangeFetchStartAction()
    }, []) 
    
    return (
            <div className="exchenge_table">
                {
                    serverErrorCount.hidden ? <div><Error /></div> : (
                        <>
                        <table>
                        <caption>Currency exchange table</caption>
                            <tbody>
                                <tr>
                                <th className="th__width">Date: {props.currentDate}</th>
                                    <th className="th__width">Buy</th>
                                    <th className="th__width">Sell</th>
                                </tr>
                                {
                                    // exchangeInfo.map(({base_ccy, ccy, buy, sale, id }) => ( 
                                    // <CurrencyExchange 
                                    // key={`${ccy}${base_ccy}`}
                                    // base_ccy={base_ccy}
                                    // ccy={ccy}
                                    // buy={buy}
                                    // sale={sale}
                                    // id={id}
                                    // />
                                    // ))




                                    // exchangeInfo.map(item => ( 
                                    //     <CurrencyExchange 
                                    //     key={`${item.ccy}${item.base_ccy}`}
                                    //     base_ccy={item.base_ccy}
                                    //     ccy={item.ccy}
                                    //     buy={item.buy}
                                    //     sale={item.sale}
                                    //     id={item.id}
                                    //     />
                                    //     ))
                                }      
                            </tbody>
                        </table>
                          <div>
                          <ExchangeCalculator
                          // currentDate={}
                        //   exchangeInfo={exchangeInfo}
                          />
                      </div>
                      </>
                    )
                }
            </div>
        )
    
}

// const  mapStateToProps = (state: any) => ({
//     exchangeInfo:  state.exchange.exchangeInfo,
//     currentDate: state.date.currentDate,
// })

// const mapDispatchToProps = (dispatch: any) => ({
//     exchangeFetchStartAction:  () => dispatch(exchangeFetchStartAction()),
//     currenDateAction: () => dispatch(currenDateAction())
//   });

export default connector(CurrencyExchangeTable)

