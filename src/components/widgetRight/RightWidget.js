import React from 'react'
import "./rightwidget.css"

function RightWidget() {

    const Button = ({type}) => {
        return <button className={"tablkeButton " + type}>{type}</button>
    }
    
    return (
        <div className='widgetLg'>
            <div className="widgetTitle">Latest Transaction</div>
            <table className="widgetTable">
                <tr className="tableRaw">
                    <th className="tableHeader">Customer</th>
                    <th className="tableHeader">Date</th>
                    <th className="tableHeader">Amount</th>
                    <th className="tableHeader">Status</th>
                </tr>
                <tr className="tableRaw">
                    <td className="tableUser">
                        <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="tableimg" />
                        <span className="userName">devid</span>
                    </td>
                    <td className="tableDate">2 june 2020</td>
                    <td className="tableAmount">122 $</td>
                    <td className="tableStats">
                        <Button type="Approved"></Button>
                    </td>
                </tr>
                <tr className="tableRaw">
                    <td className="tableUser">
                        <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="tableimg" />
                        <span className="userName">devid</span>
                    </td>
                    <td className="tableDate">2 june 2020</td>
                    <td className="tableAmount">122 $</td>
                    <td className="tableStats">
                        <Button type="Declined"></Button>
                    </td>
                </tr><tr className="tableRaw">
                    <td className="tableUser">
                        <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="tableimg" />
                        <span className="userName">devid</span>
                    </td>
                    <td className="tableDate">2 june 2020</td>
                    <td className="tableAmount">122 $</td>
                    <td className="tableStats">
                        <Button type="Pending"></Button>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default RightWidget
