import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';


export default function DataGridDemo(props) {

    //Grab fetched Data and Save it to Array to work easier
    const CountriesData = Object.entries(props)
    const ArryCountriesdata = CountriesData[0][1]
    // console.log(ArryCountriesdata)
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'Country', headerName: 'Country', width: 130 },
        { field: 'NewConfirmed', headerName: 'New Confirmed', width: 130 },
        { field: 'NewDeaths', headerName: 'New Deaths', width: 130 },
        { field: 'NewRecovered', headerName: 'New Recovered', width: 200 },
        { field: 'TotalConfirmed', headerName: 'TotalC onfirmed', width: 200 },
        { field: 'TotalDeaths', headerName: 'Total Deaths', width: 200 },
        { field: 'TotalRecovered', headerName: 'TotalRecovered', width: 200 },

    ];

    const dataBank = []
    let IdCounter = 0
    for (const countires of ArryCountriesdata) {
        IdCounter++
        dataBank.push({ id: IdCounter, Country: countires.Country, NewConfirmed: countires.NewConfirmed })

    }
    const rows = [

        { id: 1, Country: 'Iran', NewConfirmed: 44, NewDeaths: 49, NewRecovered: 58, TotalConfirmed: 22, TotalDeaths: 36, TotalRecovered: 44, },
        { id: 2, Country: 'Iran', NewConfirmed: 44, NewDeaths: 49, NewRecovered: 58, TotalConfirmed: 22, TotalDeaths: 36, TotalRecovered: 44, },
        { id: 3, Country: 'Iran', NewConfirmed: 44, NewDeaths: 49, NewRecovered: 58, TotalConfirmed: 22, TotalDeaths: 36, TotalRecovered: 44, },
        { id: 4, Country: 'Iran', NewConfirmed: 44, NewDeaths: 49, NewRecovered: 58, TotalConfirmed: 22, TotalDeaths: 36, TotalRecovered: 44, },
        { id: 5, Country: 'Iran', NewConfirmed: 44, NewDeaths: 49, NewRecovered: 58, TotalConfirmed: 22, TotalDeaths: 36, TotalRecovered: 44, },
        { id: 6, Country: 'Iran', NewConfirmed: 44, NewDeaths: 49, NewRecovered: 58, TotalConfirmed: 22, TotalDeaths: 36, TotalRecovered: 44, },

    ];
    console.log(dataBank)




    return (


        <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} pageSize={5} />
        </div>
    );
}
