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


export default function ChartHomeCumulative(props) {
console.log(props.Cumulative)
    const NewConfirmed=props.Cumulative.NewConfirmed
    const TotalConfirmed=props.Cumulative.TotalConfirmed
    const NewDeaths=props.Cumulative.NewDeaths
    const TotalDeaths=props.Cumulative.TotalDeaths
    const NewRecovered=props.Cumulative.NewRecovered
    const TotalRecovered=props.Cumulative.TotalRecovered

    const data = [
        {
            name: "Total Confirmed",
            Cumulative: TotalConfirmed,
        },
        {
            name: "Total Recovered",
            Cumulative: TotalRecovered,
        },
        {
            name: "Total Deaths",
            Cumulative: TotalDeaths,
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
           
        </BarChart>
    );
}
