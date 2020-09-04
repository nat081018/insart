import React, {Link } from "react"
import "./header.style.scss"
import { ReactComponent as Logo } from "../../assets/moneyexchange_120800.svg";

const Header = () => (
    <div className="header__wrapper">
        {/* <Link></Link> */}
        <div className="header__logo-wrapper ">
            <p>currency exchange</p>
            < Logo className="header__logo" />
        </div>
      
    </div>
)

export default Header