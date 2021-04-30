import React from 'react'
//before adding material ui

export default function CountriesStatus(props) {
    // console.log(props)
    return (
        <div key={props.id}>
            {props.element[1].Country} New Confirmed{props.element[1].NewConfirmed}
         Total Confirmed{props.element[1].TotalConfirmed}
         Total Death{props.element[1].TotalDeaths} Total Recovered
            {props.element[1].TotalRecovered}
        </div>
    )

}
