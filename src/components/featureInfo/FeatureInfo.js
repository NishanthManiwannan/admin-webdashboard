import React from 'react'
import "./featureInfo.css"
import {ExpandMore, ExpandLess} from '@material-ui/icons'


function FeatureInfo() {
    return (
        <div className='feature'>
            <div className="featuerItems">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">

                    <span className="featuredMoney">2.452$</span>
                    <span className="featuredMoneyRate">-11.5% <ExpandMore className='featureIcon negative'></ExpandMore></span>

                </div>

                <span className="featureSub">
                    Compare to last month
                </span>
            </div>

            <div className="featuerItems">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">

                    <span className="featuredMoney">2.452$</span>
                    <span className="featuredMoneyRate">+11.5% <ExpandLess className='featureIcon'></ExpandLess></span>

                </div>

                <span className="featureSub">
                    Compare to last month
                </span>
            </div>

            <div className="featuerItems">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">

                    <span className="featuredMoney">2.452$</span>
                    <span className="featuredMoneyRate">-11.5% <ExpandMore className='featureIcon negative'></ExpandMore></span>

                </div>

                <span className="featureSub">
                    Compare to last month
                </span>
            </div>
        </div>
    )
}

export default FeatureInfo
