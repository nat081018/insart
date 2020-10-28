import React, {useState} from "react"
import "./currencyExchangeTdsale.style.scss"

import Tooltip from '@material-ui/core/Tooltip';

import PopupForEdit from "../popupForEdit/popupForEdit.component"

import { type } from "os";

type PropsTypes = {
    id: string,
    sale: number, 
    buy: number | undefined 
    
}

// type InjectedProps = {
//     hidden: Boolean,
//     setPopup: () => void,
//   }
//!! нужно ли проверять хук? по идеи они уже валидны в TS ...

const CurrencyExchangeTdSale: React.FC<PropsTypes> = ({sale, id }) => {
    const [popup, setPopup] = useState({hidden: true})
  
    const changeValueInput = (e: React.MouseEvent<HTMLSpanElement>) : void => { 
        console.log("hidden: false")
        setPopup(() => ({
            hidden: false
        }))
    }

    const cancelEditValue = (e: React.MouseEvent<HTMLInputElement>): void => {
        console.log("hidden true")
        e.preventDefault()
        setPopup(() => ({
            hidden: true
        }))
      }
    return(
        <td>
        {
            popup.hidden ? 
            (<Tooltip title="Add" arrow>
            <span  onClick={changeValueInput}  className="sale">{sale}</span>
            </Tooltip>)  :
            <PopupForEdit 
            buy={undefined}
            sale={sale}
            id={id}
            cancelEditValue={cancelEditValue}
            />
        }
    </td>
    )
}

// const mapStateToProps = ({hiddenPopup})  => ({
//   hidden: hiddenPopup.hidden
// })

// const mapStateDispatch = (dispatch) => ({
//     hiddenPopupActions: () => dispatch(hiddenPopupActions())
// })


export default CurrencyExchangeTdSale