import React, { useState } from 'react';
import axios from 'axios';


function Fetchserver() {
    // Declare a new state variable, which we'll call "count"
    const [data,setData] = useState(0);
  const gteData = axios.get('./localhost:80',(req,res)=>{
      console.log(req,res)
  })
    return (
      <div>
        <p>You clicked {data} times</p>
        <button onClick={() => gteData()}>
          Click me
        </button>
      </div>
    );
  }
  export default Fetchserver