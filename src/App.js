import React from "react";
import axios from "axios";
import Global from './components/Status/Global'


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

  render() {
    return (
      <div>
        <Global Global={this.state.covid}/>
          <div>
       {Object.entries(this.state.countries).map((element,id) => (
         <div key={id}>
           {element[1].Country} New Confirmed{element[1].NewConfirmed}
           Total Confirmed{element[1].TotalConfirmed}
           Total Death{element[1].TotalDeaths} Total Recovered
           {element[1].TotalRecovered}
         </div>
       ))}
     </div>
    
   </div>
    );
  }
}
export default App;
