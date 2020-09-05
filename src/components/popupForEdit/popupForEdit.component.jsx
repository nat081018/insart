import React, {Component} from "react"
import "./popupForEdit.style.scss" 

 class PopupForEdit  extends Component {
    constructor() {
        super()
        this.state = {
            newValue: ""
        }
    } 

    handleSubmit = () =>  {
        console.log("submit")
    }
    
    newValueChange = (e) => {
        this.setState({
            newValue: e.target.value
        })
    }
render() {
    return(
        <div className="popup__forEdit">
            <form  onSubmit={this.handleSubmit}>
                <span>please a new value</span>
                <input 
                onChange={this.newValueChange}
                value={this.newValue}
                type="number"/>
                <button type="button" className="popup__forEdit-btn btn__save" >save</button>
                <button type="button" className="popup__forEdit-btn btn__cancel">cancel</button>
            </form>   
        </div>
    )
}

 }

export default PopupForEdit