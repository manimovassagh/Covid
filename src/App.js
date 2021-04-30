import React from "react";
import axios from "axios";
import Global from './components/Status/Global'
import CountriesStatus from './components/CountriesStatus/CountriesStatus'
import HideAppBar from './components/Header/AppBar'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      covid: [],
      countries: []
    };
  }

  componentDidMount() {
    axios.get("https://api.covid19api.com/summary").then((data) =>
      this.setState({
        covid: data.data.Global,
        countries: data.data.Countries
      })
    );
  }

  meinDatai() {
    return Object.entries(this.state.countries).map((element, id) => (
      <CountriesStatus element={element} key={id} />
    ))
  }

  render() {
    return (
      <div>
<HideAppBar/>
        <Global Global={this.state.covid} />
        <div>{this.meinDatai()}</div>
      </div>
    );
  }
}
export default App;
