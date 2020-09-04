import React,  { Component } from "react"
import "./currency_exchange_table.style.scss"

import CurrencyExchange from "../currency_exchange/currency_exchange.component"
import PopupForEdit from "../popupForEdit/popupForEdit.component"


class CurrencyExchangeTable extends Component {
    constructor(props) { 
        super(props)

        this.state =  {
            currencies: ["UAH", "USD", "EUR", "RUR", "BTC"],
            optionValue: "UAH",
            amount: "",
            convertTo: "USD",
            result: "",

            base_ccy: "",
            buy: "",
            ccy: "",
            sale: "",
            date: "",
            exchangeInfo: []
        }  
    } 

    changeValue = () => {

    }

    getDateLocal =  () => { 
        const date = new Date()
        const getMonths = () => {
      
        let month = date.getMonth() + 1; // месяц 1-12
        if (month < 10) month = '0' + month;
        return month
        }
        const currentDate  = `${date.getDate()}/${getMonths()}/${date.getFullYear()}`
        this.setState((state) => {return {date: currentDate}})
      }
      
      fetchCurrencyExchangeIifo = async () => {
        try {
            // const response = []
        fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
         .then((response) => response.json())
         .then((res) => {
             console.log(res) 
            return this.setState({exchangeInfo: res})
        }) 
    
        }catch(error){
            console.log(error)
        }
    }

    handleSelectOptionValue = e => {
        this.setState({
            optionValue: e.target.value
          },
        console.log(this.optionValue)
        )};

      handleSelectConvertTo = e => {
          this.setState({
            convertTo: e.target.value
          })
      }

    handleInput = (e) => {
        e.preventDefault()
        this.setState({
            amount: e.target.value,
            result: null
        })
    }

    calculate = () => {
        const amount = this.state.amount;
        const optionValue = this.state.optionValue
        if (amount === isNaN) {
          return;
        }else {
       
            const result = this.state.exchangeInfo.filter(({ccy, buy, sale, base_ccy })=> {
                if(optionValue === ccy){
                    const res =  (amount * buy).toFixed(4)
                    this.setState({
                        result: res
                    })
                }
            })
        }   
    };
  


      componentDidMount () {
          this.getDateLocal()
          this.fetchCurrencyExchangeIifo()
          this.calculate()
      }
      
      handleSwap = (e) => {
        e.preventDefault()
        const optionValue = this.state.optionValue;
        const convertTo = this.state.convertTo;
        this.setState({
            convertTo: optionValue,
            optionValue: convertTo,
            result: null,

        },
        this.calculate
        )

      }
    
    

render () { 
    const {
        date, 
        exchangeInfo, 
        amount, 
        result , 
        currencies, 
        convertTo, 
        optionValue} = this.state

        return (

            <div className="exchenge_table">
                <PopupForEdit/>
                <table>
                <caption>Currency exchange table</caption>
                    <tbody>
                        <tr>
                        <th>Date: {date}</th>
                            <th>Bay</th>
                            <th>Sell</th>
                        </tr>
                        {
                            exchangeInfo.map(({base_ccy, ccy, buy, sale }, index) => ( 
                            <CurrencyExchange 
                            key={index}
                            base_ccy={base_ccy}
                            ccy={ccy}
                            buy={buy}
                            sale={sale}
                            changeValue={this.changeValue}
                            />
                            ))
                        }      
                    </tbody>
                </table>
            <div>
            <h5>
                {amount} {optionValue} is equevalent to
            </h5>
              <h2>
                {amount === ""
                  ? "0"
                  : result === null
                  ? "Calculating..."
                  : result}{" "}
                {convertTo}
              </h2>
              <p>As of {amount === "" ? "/ / /" : date === null ? "" : date}</p>
            </div>
            <div className="converter__wrapper">
                <form  onSubmit={this.handleSubmit}>
                    <div>
                        <input 
                        type="number"
                        value={amount}
                        onChange={this.handleInput}
                        />
                        <select 
                        name="base"
                        value={optionValue}
                        onChange={this.handleSelectOptionValue}
                        >
                            {
                               currencies.map((currenceEx) => 
                               <option key={currenceEx} value={currenceEx}>{currenceEx}</option>)
                            }
                        </select>
                    </div>
                </form>
                <div className="btn__arrows">
                  <span onClick={this.handleSwap} className="swap">
                    &#8595;&#8593;
                  </span>
                </div>
                <form>
                    <div>
                        <input
                             disabled={true}
                             value={
                                amount === "" 
                                ? 
                                "0" :
                                result == null
                                ? "Calculating..."
                                : result 
                             }
                        />
                        <select 
                         name="convertTo"
                         value={convertTo} 
                         onChange={this.handleSelectConvertTo}
                        >
                            {
                                 currencies.map((currenceEx) => 
                                <option key={currenceEx} value={currenceEx}>{currenceEx}</option>)
                            }
                        </select>
                    </div>
                </form> 
            </div>
            </div>
        )
    }
}



export default CurrencyExchangeTable