import React from 'react';
import {XAxis, YAxis,LineChart,Line,
	CartesianGrid, Tooltip,ResponsiveContainer} from 'recharts';
import { DivGraphic,TooltipDiv } from './GraphicsElements';

const EmptyData = [{
    date:"Date",
    value:0
}];

const Graphics = ({data}) => {
    
	return (
        <DivGraphic>
            <ResponsiveContainer  width = "100%" height="100%">
               <LineChart data = {data.length > 0 ? data : EmptyData }>
                  <CartesianGrid opacity={0.1} vertical = {false}/>
                  <Line type = "linear" dataKey = "value" stroke="#efb810" />
                  <XAxis dataKey="date" axisLine = {false} tickLine = {false}/>
                  <YAxis dataKey="value" axisLine = {false} tickLine = {false} tickCount = {8}/>
                  <Tooltip content={<PersonalTooltip />}/>
               </LineChart>
           </ResponsiveContainer> 
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
