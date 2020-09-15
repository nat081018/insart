import React, {useState} from "react"
import "./currencyExchangeTdsale.style.scss"

import Tooltip from '@material-ui/core/Tooltip';

import PopupForEdit from "../popupForEdit/popupForEdit.component"






const CurrencyExchangeTdSale = ({sale, id }) => {
    const [popup, setPopup] = useState({hidden: true})
  

    const changeValueInput = (e) => { 
        console.log("hidden: false")
        setPopup(() => ({
            hidden: false
        }))
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
            <span  onClick={changeValueInput}  className="sale">{sale}</span>
            </Tooltip>)  :
            <PopupForEdit 
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