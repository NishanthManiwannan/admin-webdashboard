import React from 'react'
import "./leftwidget.css"
import {Visibility} from '@material-ui/icons'

function LeftWidget() {
    return (
        <div className='widgetSm'>
            <span className='widgetSmTitle'>New joins</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widImg" />
                    <div className="widgetSmUser">
                        <span className='widgetUserName'>Marvel shoi</span>
                        <span className="widgetUserPosition">Software Engineer</span>
                    </div>
                    <button className="widgetbutn">
                        <Visibility  className='icon'></Visibility>
                         Display
                    </button>
                </li>

                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widImg" />
                    <div className="widgetSmUser">
                        <span className='widgetUserName'>Marvel shoi</span>
                        <span className="widgetUserPosition">Software Engineer</span>
                    </div>
                    <button className="widgetbutn">
                        <Visibility className='icon'></Visibility>
                        Display
                    </button>
                </li>
            </ul>

            
        </div>
    )
}

export default LeftWidget
