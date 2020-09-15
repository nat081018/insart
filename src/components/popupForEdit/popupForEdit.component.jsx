import React, {useState} from "react"
import "./popupForEdit.style.scss" 

import {connect} from "react-redux"
import {userEnterNewExchange, userEnterNewExchangeSale} from "../../redux/exchange/exchange.actions"


const PopupForEdit = ({
  userEnterNewExchangeSale,
  userEnterNewExchange,
  cancelEditValue,
  sale, 
  buy, 
  id, 
  }) => {

    const [hiddenSaveBtn, setHiddenSaveBtn] = useState({hidden: false }) 

    let minBuy =  () => {
      let res
      if(sale === undefined){
        console.log("значение buy")
        res =  parseFloat((buy - (buy * 0.10))).toFixed(2) 
      }else{
        console.log("значения sale")
        res = parseFloat((sale - (sale * 0.10))).toFixed(2) 
      }

      return res
    }

    let maxBuy =  () => {
      let res
      if(sale === undefined){
        console.log("значение buy")
        res =  parseFloat((buy + (buy * 0.10))).toFixed(2) 
      }else{
        console.log("значения sale")
        res =  parseFloat((sale + (sale * 0.10))).toFixed(2) 
      }

      return res
    }

   

    const [value, setValue] = useState("");

    const [minVal, setMin] = useState({min : minBuy()})
    const [maxVal, setMax] = useState({max : maxBuy()})
    console.log(minVal)
    console.log(maxVal)


    const  onChangeVal = event => {
      setValue(event.target.value);
      
      if(value <= maxVal.max && value >= minVal.min){
        setHiddenSaveBtn({
               hidden: false
             })
      }else{
        // alert(`Значение должно быть в диапазоне 
        // от ${minVal.min} до ${maxVal.max}`)
        setHiddenSaveBtn({
          hidden: true
        })
      }
      
    }

const reset = () => {
  setHiddenSaveBtn({
    hidden: false
  })  
  setValue("")
}

const clearFiald = (e) => {
  e.preventDefault();
  reset()
}

const handleSubmit = async (e) => {
  e.preventDefault();
  if(buy !== undefined){
    userEnterNewExchange(id, value)
    
   }else if(sale !== undefined) {
    
    userEnterNewExchangeSale(id, value)
   }
 
 
  console.log(`Submitting ${value}`);
  reset()
 
}


    return(
        <div className="popup__forEdit">
            <form onSubmit={handleSubmit}>
            { 
              hiddenSaveBtn.hidden ? 
              "" :
              <input type="submit" value="save"/> 
            }
              <input  type="reset" value="clear" onClick={clearFiald} className="popup__forEdit-btn btn__cancel"/>
              <input onClick={cancelEditValue} type="button" value="X" className="popup__forEdit-btn btn__cancel" />
              <input 
                id='newValue'
                min={minVal.min} 
                max={maxVal.max}
                onChange={onChangeVal}
                name="newvalue"
                type="number"
                placeholder="enter only number"
                value={value}
                step="0.01"
                required
                // pattern="[0-9]*"
                />
            </form>   
        </div>
    )
}

const mapStateDispatchToProps = (dispatch) => ({
  userEnterNewExchange: (id, value) => dispatch( userEnterNewExchange(id, value)),
  userEnterNewExchangeSale: (id, value) => dispatch(userEnterNewExchangeSale(id, value ))
})


export default connect(null,  mapStateDispatchToProps)(PopupForEdit)



