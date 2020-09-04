import React  from "react"
import "./currency_exchange.style.scss"

import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
    root: {
      width: 500,
    },
  });


const CurrencyExchange = ({base_ccy, ccy, buy, sale, changeValue }) => {  
    const classes = useStyles();

    return(
    <>
        <tr>
            <td>{`${ccy}/${base_ccy}`}</td>
                <td onClick={changeValue}>
                    <Tooltip title="Add" arrow>
                        <span  className={classes.root}>{buy}</span>
                    </Tooltip>
                </td>
                <td onClick={changeValue}>
                    <Tooltip title="Add" arrow>
                        <span className={classes.root}>{sale}</span>
                    </Tooltip>
                </td>     
        </tr>
    </>
)
}

export default CurrencyExchange