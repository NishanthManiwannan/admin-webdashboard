import React from 'react'
import "./Navbar.css"
import { NotificationsNone, Settings, Language } from '@material-ui/icons';

function Navbar() {
    return (
        <div className="topbar">
            <div className="topbarwrapper">
                <div className="topleft">
                    <span className="logo">
                        MN DBoard
                    </span>
                </div>
                <div className="topright">
                    <div className="topbarIconContainer">
                        <NotificationsNone></NotificationsNone>
                        <span className="topiconBag">2</span>
                    </div>

                    <div className="topbarIconContainer">
                        <Language></Language>
                        <span className="topiconBag">2</span>
                    </div>

                    <div className="topbarIconContainer">
                        <Settings></Settings>
                    </div>
                    
                    <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}

export default Navbar
