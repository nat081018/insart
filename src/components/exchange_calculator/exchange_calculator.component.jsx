import React, { Component} from "react"
import "./exchange_calculator.style.scss"


class ExchangeCalculator extends Component {

     state = {
      currencies: ["UAH", "USD", "EUR", "RUR", "BTC"],
      base: "UAH",
      amount: "",
      convertTo: "USD",
      result: ""
    };

    handleSelect = e => {
      this.setState(
        {
          [e.target.name]: e.target.value,
          result: null
        },
        this.calculate
      );
    };
  
    handleInput = e => {
      this.setState(
        {
          amount: e.target.value,
          result: null,
        },
        this.calculate
      );
    };

    getValue = (array, base, convertTo) => {
        let caseUAH = {
          base_ccy: "UAH",
          buy: 1,
          ccy: "UAH",
          id: "00001",
          sale: 1
        }

      let newArr = [...array, caseUAH ]

      let obj = newArr.filter((arr, i) => 
              arr.ccy === convertTo
        );
        console.log(obj)
   
        return obj;
    }
    
    calculate = () => {
        console.log(this.props.exchangeInfo)
        const exchangeInfo = [...this.props.exchangeInfo]
        const base = this.state.base
        const convertTo = this.state.convertTo
        const amount = this.state.amount;

        const resFromFilter = this.getValue(exchangeInfo, base, convertTo)
        const resFromFilterToCout = resFromFilter[0]
       
        if(amount === isNaN) {
            return
        }else if(resFromFilterToCout.sale === undefined){
          const result = amount
          this.setState({
            result
          })
          return
        }else if(base === "UAH"){
            const result = (amount / resFromFilterToCout.sale).toFixed(2)
            this.setState({
                result
            })
        }else if(base !== "UAH"){
          const result = (amount * resFromFilterToCout.buy).toFixed(2) 
          this.setState({
            result
          })
        }
     
    };
  
    handleSwap = e => {
      const base = this.state.base;
      const convertTo = this.state.convertTo;
      e.preventDefault();
      this.setState(
        {
          convertTo: base,
          base: convertTo,
          result: null
        },
        this.calculate
      );
    };
    render() {
      const { currencies, base, amount, convertTo, result } = this.state;
      return (
        <div className="container">
              <div className="wrapper__inputs">
                <p>
                  {amount} {base} is equevalent to
                </p>
                <h2>
                  {amount === ""
                    ? "0"
                    : result === null
                    ? "Calculating..."
                    : result}{" "}
                  {convertTo}
                </h2>
                <p>As of {amount === "" ? "/ / /" : this.props.currentDate === null ? "" : this.props.currentDate}</p>
                <div className="inputs">
                    <form className="form-inline">
                      <input className="input"
                        type="number"
                        value={amount}
                        onChange={this.handleInput}
                        required
                      />
                      <select
                        name="base"
                        value={base}
                        onChange={this.handleSelect}
                        className="form-control"
                      >
                        {currencies.map(currency => (
                          <option key={currency} value={currency}>
                            {currency}
                          </option>
                        ))}
                      </select>
                    </form>
                    
                    <div className="btn__arrow-wrapper">
                    <p onClick={this.handleSwap} className="swap">
                      &#8595;&#8593;
                    </p>
                    </div>

                    <form className="form-inline">
                      <input
                        disabled={true}
                        value={
                          amount === ""
                            ? "0"
                            : result === null
                            ? "Calculating..."
                            : result
                        }
                        className="input"
                      />
                      <select
                        name="convertTo"
                        value={convertTo}
                        onChange={this.handleSelect}
                        className="form-control"
                      >
                        {currencies.map(currency => (
                          <option key={currency} value={currency}>
                            {currency}
                          </option>
                        ))}
                      </select>
                    </form>
                  </div>
              </div>
        </div>
      );
    }
  }

export default ExchangeCalculator
