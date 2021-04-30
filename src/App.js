import React from "react";
import axios from "axios";

//External Components--------------------------------------------------------------------------
import Global from './components/Status/Global'
import CountriesStatus from './components/CountriesStatus/CountriesStatus'
import AppBar from './components/Header/AppBar'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      covid: [],
      countries: []
    };
  }

// Fetching Data from API with axios---------------------------------------------------------------

  componentDidMount() {
    axios.get("https://api.covid19api.com/summary").then((data) =>
      this.setState({
        covid: data.data.Global,
        countries: data.data.Countries
      })
    );
  }

//function to return Countries data from State and pass it to CountriesStatus Component--------------

  meinDatai() {
    return Object.entries(this.state.countries).map((element, id) => (
      <CountriesStatus element={element} key={id} />
    ))
  }

//main Render Area-----------------------------------------------------------------------------------

  render() {
    return (
      <div>
        <AppBar/>
        <Global Global={this.state.covid} />
        <div>{this.meinDatai()}</div>
      </div>
    );
  }
}
export default App;
