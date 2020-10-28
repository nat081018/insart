import React from "react"
import "./header.style.scss"
import { ReactComponent as Logo } from "../../assets/moneyexchange_120800.svg";

const Header: React.FC = () => (
    <div className="header__wrapper">
        <div className="header__logo-wrapper ">
            <h1>currency exchange</h1>
            < Logo className="header__logo" />
        </div>
      
    </div>
)

export default Header