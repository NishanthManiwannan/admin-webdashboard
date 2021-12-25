import React from 'react'
import "./Sidebar.css"
import { Home, AttachMoney, AccountBox, Message, Timeline, InsertDriveFile, LocalMall, Feedback, SingleBed, Mail, AccountBalanceWallet } from '@material-ui/icons'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">
                        Dashboard
                    </h3>

                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <Home className='sidebarIcon'></Home>Home
                        </li>
                    </ul>

                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <Timeline className='sidebarIcon'></Timeline>Analytics
                        </li>
                    </ul>

                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <AttachMoney className='sidebarIcon'></AttachMoney>Sales
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">
                        Quick Menu
                    </h3>

                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <AccountBox className='sidebarIcon'></AccountBox>User
                        </li>
                    </ul>

                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <SingleBed className='sidebarIcon'></SingleBed>Product
                        </li>
                    </ul>

                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <AccountBalanceWallet className='sidebarIcon'></AccountBalanceWallet>Transaction
                        </li>
                    </ul>

                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <InsertDriveFile className='sidebarIcon'></InsertDriveFile>Report
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">
                        Message
                    </h3>

                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <Mail className='sidebarIcon'></Mail>Mail
                        </li>
                    </ul>

                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <Feedback className='sidebarIcon'></Feedback>Feedback
                        </li>
                    </ul>

                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <Message className='sidebarIcon'></Message>Message
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">
                        Staff
                    </h3>

                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <LocalMall className='sidebarIcon'></LocalMall>Manage
                        </li>
                    </ul>

                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <Timeline className='sidebarIcon'></Timeline>Analytics
                        </li>
                    </ul>

                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <InsertDriveFile className='sidebarIcon'></InsertDriveFile>Report
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Sidebar
