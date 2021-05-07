import React from "react";

//import React Chart Library Source https://recharts.org/------------------
import {BarChart} from "recharts";
import {Bar} from "recharts";
import {XAxis} from "recharts";
import {YAxis} from "recharts";
import {CartesianGrid} from "recharts";
import {Tooltip} from "recharts";
import {Legend} from "recharts";
import {LabelList} from "recharts";


//Cumulative Chart component------------------------------------------------

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
