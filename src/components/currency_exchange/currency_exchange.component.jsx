import React from "react"
import "./currency_exchange.style.scss"

import CurrencyExchangeTdSale  from "../currencyExchangeTdsale/currencyExchangeTdsale.component"
import CurrencyExchangeTdbuy from "../currencyExchangeTdbuy/currencyExchangeTdbuy.component"


const CurrencyExchange = ({base_ccy, ccy, buy, sale, id}) => {  
    
    return(
    <>
        <tr className="th__width">
            <td>{`${ccy}/${base_ccy}`}</td>
            <CurrencyExchangeTdbuy 
            buy={buy}
            id={id}
            className="th__width"
            />
            <CurrencyExchangeTdSale 
            sale={sale}
            id={id}
            className="th__width"
            />
        </tr>
    </>
)
};

export default CurrencyExchange