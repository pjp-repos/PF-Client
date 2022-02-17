import React from 'react';
import {AreaChart, Area, XAxis, YAxis,LineChart,Line,
	CartesianGrid, Tooltip,ResponsiveContainer} from 'recharts';
import { DivGraphic,TooltipDiv } from './GraphicsElements';

const Graphics = () => {
    const [dataBinance,setDataBinance] = React.useState([]);
    console.log(dataBinance);
    React.useEffect(() => {
        fetch("https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=100").
        then(res => res.json())
        .then(data => {
            let array = data.map(a => {
                return {
                    date: new Date(a[0]).toISOString().split('T')[0],
                    value: parseFloat(a[1])
                }
            });
            setDataBinance(array);
        });
    },[]);

	return (
        <DivGraphic>
             { dataBinance.length > 0 && <ResponsiveContainer  width = "100%" height="100%">
        <LineChart data = {dataBinance}>
            <CartesianGrid opacity={0.1} vertical = {false}/>
            <Line type = "linear" dataKey = "value" stroke="#efb810" />
            <XAxis dataKey="date" axisLine = {false} tickLine = {false}/>
            <YAxis dataKey="value" axisLine = {false} tickLine = {false} tickCount = {8}/>
            <Tooltip content={<PersonalTooltip />}/>
        </LineChart>
    </ResponsiveContainer> 
    }
    </DivGraphic>
       
	);
}

function PersonalTooltip({active,payload,label}){
    if(active){
        return (
            <TooltipDiv>
                <p>Price: {payload[0].value}</p>
                <p>Date: {label}</p>
            </TooltipDiv>
        )

    }
    return null;
}

export default Graphics;
