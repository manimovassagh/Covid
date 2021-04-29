import './App.css';
import Status from './components/Status'
import React from 'react';
import axios from 'axios'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      status: []
    }
  }

  componentDidMount() {
    const statusOfCovid = (data) => {
      console.log(data);
      Object.entries(data.Global).forEach(element => {
          console.log(element);

      });
      Object.values(data.Countries).forEach(el => {
          if (el.NewConfirmed > 0) {
              const div = document.createElement('div');
              div.innerHTML = el.Country + ` ${el.NewConfirmed} `
              div.className='text-center p-4  btn-primary'
              document.body.append(div)
          }
      })

  }
  axios.get('https://api.covid19api.com/summary')
      .then(function (response) {
          statusOfCovid(response.data)
      });

  }
  render() {
    return (

      <div>
       just check
      </div>
    )
  }
}

export default App;
