import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";


export default function ChartHome(props) {
    console.log(props.Cumulative.NewConfirmed)
    const data = [
        {
            name: "Page A",
            Cumulative: 4000,
            Daily: 2400,
        },
        {
            name: "Page B",
            Cumulative: 3000,
            Daily: 1398,
        },
        {
            name: "Page C",
            Cumulative: 2000,
            Daily: 9800,
        },
        {
            name: "Page D",
            Cumulative: 2780,
            Daily: 3908,
        },
        {
            name: "Page E",
            Cumulative: 1890,
            Daily: 4800,
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
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Cumulative" fill="#8884d8" />
            <Bar dataKey="Daily" fill="#82ca9d" />
        </BarChart>
    );
}
