import React from "react";
import "./AppHeader.scss"
import Logo from "../../Core/Assets/Images/logo.png"
import RightIcon from "../../Core/Assets/Images/icon.png"

const AppHeader = () => {
    return (
        <>
            <div className="app-header">
                <div className="app-header__container">
                    <div className="app-header__left-section">
                        <img src={Logo} height="60px" alt="logo" />
                    </div>
                    <div className="app-header__middle-section">

                    </div>
                    <div className="app-header__right-section">
                        <img src={RightIcon} height="100px" alt="icon" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default AppHeader