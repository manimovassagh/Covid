import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { GridToolbarContainer, GridToolbarExport, } from '@material-ui/data-grid';
import Grid from '@material-ui/core/Grid';


function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

export default function DataGridDemo(props) {

  //Grab fetched Data and Save it to Array to work easier
  const CountriesData = Object.entries(props)
  const ArryCountriesdata = CountriesData[0][1]
  // console.log(ArryCountriesdata)
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'Country', headerName: 'Country', width: 200 },
    { field: 'NewConfirmed', headerName: 'New Confirmed', width: 200 },
    { field: 'NewDeaths', headerName: 'New Deaths', width: 200 },
    { field: 'NewRecovered', headerName: 'New Recovered', width: 200 },
    { field: 'TotalConfirmed', headerName: 'Total Confirmed', width: 200 },
    { field: 'TotalDeaths', headerName: 'Total Deaths', width: 200 },
    { field: 'TotalRecovered', headerName: 'Total Recovered', width: 200 },

  ];
  const rows = []
  const setDataInArray = () => {
    let IdCounter = 0
    for (const countires of ArryCountriesdata) {
      IdCounter++
      rows.push({
        id: IdCounter,
        Country: countires.Country,
        NewConfirmed: countires.NewConfirmed,
        NewDeaths: countires.NewDeaths,
        NewRecovered: countires.NewRecovered,
        TotalConfirmed: countires.TotalConfirmed,
        TotalDeaths: countires.TotalDeaths,
        TotalRecovered: countires.TotalRecovered,
      })
    }
  }
  setDataInArray()

  return (
    <Grid container direction="row" justify="center"  >
      <div style={{ height: 650, width: '100%' }}>
        <DataGrid align="center" rows={rows} columns={columns} pageSize={10}
          components={{
            Toolbar: CustomToolbar,
          }} />
      </div>
    </Grid>
  );
}
