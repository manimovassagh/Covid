import React from 'react'
// this is a Global Fetched Data Components
// Properties called NewConfirmed,NewDeaths,NewRecovered,TotalConfirmed,TotalDeaths

export default function Global(props) {
    return (
        <div>
        NewConfirmed   {props.Global.NewConfirmed} <br/>
        NewDeaths {props.Global.NewDeaths} <br/>
        NewRecovered  {props.Global.NewRecovered} <br/>
        TotalConfirmed {props.Global.TotalConfirmed} <br/>
        TotalDeaths {props.Global.TotalDeaths} <br/>
        </div>
    )
}
