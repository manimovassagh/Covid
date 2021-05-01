import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BottomNavigation from "./components/navigation/Navigate"
import Grid from '@material-ui/core/Grid';
//External Components--------------------------------------------------------------------------

import CountriesStatus from './components/CountriesStatus/CountriesStatus'
import AppBar from './components/Header/AppBar'
import CumulativeTable from './components/FrontTable/FrontTable'
import ChartHomeCumulative from './components/Chart/ChartHomeCumulative'
import ChartHomeDaily from './components/Chart/ChartHomeDaily'


//Class Base Root Component with State definition
//There are Two Parameters in state Covid for Global Data and countries for Specific Country Status
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
      <Router>
        <div>
          <AppBar />
          <BottomNavigation />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <CumulativeTable Cumulative={this.state.covid} />
                <Grid container justify="center" >
                  <Grid >
                    <ChartHomeCumulative Cumulative={this.state.covid} />
                  </Grid>
                  <Grid ></Grid>
                  <ChartHomeDaily Cumulative={this.state.covid} />
                </Grid>
              </Route>
              <Route path="/country">
                <div>{this.meinDatai()}</div>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
