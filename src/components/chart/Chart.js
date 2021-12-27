import React from 'react'
import "./chart.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Chart({title, data, dataKey, grid}) {

    return (
        <div className='chart'>
        <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke='blue'></XAxis>
                    <Line type="monotone" dataKey={dataKey} activeDot={{ r: 8 }}></Line>
                    {/* <YAxis stroke='blue'></YAxis> */}
                    <Tooltip></Tooltip>
                    { grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray={"5 5"}></CartesianGrid>}
                    <Legend></Legend>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart
