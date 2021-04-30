
import React, { useState, useEffect } from 'react'
import axios from 'axios';

// 'https://api.covid19api.com/summary'
//https://jsonplaceholder.typicode.com/posts



function Status() {
    const [status, setStatus] = useState([])
    const [dummi] = useState(1)

    useEffect(() => {
        console.log('hello world')
        axios.get('https://api.covid19api.com/summary')
            .then(res => {
                setStatus(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }, [dummi])


    return (
        <div>
            {status.Countries.foreach(el=>{
                console.log(el)
            })}
        </div>
    )
}

export default Status
