import React, {useState} from "react"
import "./currencyExchangeTdbuy.style.scss"

import Tooltip from '@material-ui/core/Tooltip';

import PopupForEdit from "../popupForEdit/popupForEdit.component"


const CurrencyExchangeTdbuy = ({buy, id}) => {
    const [popup, setPopup] = useState({hidden: true})

    const changeValue = (e) => {
        // e.preventDefault()
        console.log("it works")
        setPopup(() => ({
            hidden: false
        }))
        console.log(popup.hidden)
    }

    const cancelEditValue = (e) => {
        console.log("hidden true")
        e.preventDefault()
        setPopup(() => ({
            hidden: true
        }))
    }

    return(
        <td >
        {
            popup.hidden ? 
            (<Tooltip title="Add" arrow>
            <span onClick={changeValue}  className="buy">{buy}</span>
            </Tooltip>) : 
            <PopupForEdit
            buy={buy}
            id={id}
            cancelEditValue={cancelEditValue} 
            />
        }
    </td>
    )
}
export default CurrencyExchangeTdbuy
