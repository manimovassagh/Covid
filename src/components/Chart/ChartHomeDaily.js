import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    LabelList,
  
} from "recharts";


export default function ChartHomeDaily(props) {
// console.log(props.Cumulative)
    const NewConfirmed=props.Cumulative.NewConfirmed
    const NewDeaths=props.Cumulative.NewDeaths
    const NewRecovered=props.Cumulative.NewRecovered

    const data = [
        {
            status: "New Confirmed",
            Daily: NewConfirmed,
        },
        {
            status: "New Recovered",
            Daily: NewRecovered,
        },
        {
            status: "New Deaths",
            Daily: NewDeaths,
        },
   
    
    ];
    return (
        <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="status" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Daily" fill="#8884d8" />
            <LabelList dataKey="status" position="top" />

        </BarChart>
    );
}
