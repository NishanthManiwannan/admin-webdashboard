import "./home.css"

import React from 'react'
import FeatureInfo from "../../featureInfo/FeatureInfo"
import Chart from "../../chart/Chart"

import {data} from "../Home/data";
import RightWidget from "../../widgetRight/RightWidget";
import LeftWidget from "../../widgetLeft/leftWidget";

function Home() {
    
    return (
        <div className="home">
            <FeatureInfo></FeatureInfo>
            <Chart data={data} title={"Active users"} grid dataKey="Active user"></Chart>

            <div className="widget">
                <LeftWidget></LeftWidget>
                <RightWidget></RightWidget>
            </div>
        </div>
    )
}

export default Home
