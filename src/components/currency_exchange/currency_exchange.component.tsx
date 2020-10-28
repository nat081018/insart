import React from "react"
import "./currency_exchange.style.scss"

import CurrencyExchangeTdSale  from "../currencyExchangeTdsale/currencyExchangeTdsale.component"
import CurrencyExchangeTdbuy from "../currencyExchangeTdbuy/currencyExchangeTdbuy.component"

type PropsTypes = {
    base_ccy: string,
    ccy: string, 
    buy?: any, 
    sale?: any,
    id: string
}

const CurrencyExchange: React.FC<PropsTypes> = ({base_ccy, ccy, buy, sale, id}) => {  
    console.log(base_ccy)
    
    return(
    <>
        <tr className="th__width">
            <td>{`${ccy}/${base_ccy}`}</td>
            <CurrencyExchangeTdbuy 
            sale={undefined}
            buy={buy}
            id={id}
            />
            <CurrencyExchangeTdSale 
            buy={undefined}
            sale={sale}
            id={id}
            />
        </tr>
    </>
)
};

export default CurrencyExchange