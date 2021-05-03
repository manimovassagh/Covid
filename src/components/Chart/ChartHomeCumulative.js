import React from "react";
import {BarChart} from "recharts";
import {Bar} from "recharts";
import {XAxis} from "recharts";
import {YAxis} from "recharts";
import {CartesianGrid} from "recharts";
import {Tooltip} from "recharts";
import {Legend} from "recharts";
import {LabelList} from "recharts";



export default function ChartHomeCumulative(props) {
// console.log(props.Cumulative)
    const TotalConfirmed=props.Cumulative.TotalConfirmed
    const TotalDeaths=props.Cumulative.TotalDeaths
    const TotalRecovered=props.Cumulative.TotalRecovered

    const data = [
        {
            status: "Total Confirmed",
            Cumulative: TotalConfirmed,
        },
        {
            status: "Total Recovered",
            Cumulative: TotalRecovered,
        },
        {
            status: "Total Deaths",
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
            <XAxis dataKey="status" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Cumulative" fill="#8884d8" />
            <LabelList dataKey="status" position="top" />

        </BarChart>
    );
}
