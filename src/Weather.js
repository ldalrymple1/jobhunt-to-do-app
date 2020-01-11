import React from 'react'
import axios from 'axios'

class Weather extends React.Component {
  constructor() {
    super() 
    this.state = {

    }
    

  }

  // componentDidMount(){
  //   this.getWeather()
  // }
  
  // getWeather(){
  //   axios.get('https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&APPID=77c46935206c00f15be9ac7c5feffd1f')
  //     .then(res => console.log(res.data))
  //     .catch(err => console.log(err))

  // }
 


  render(){
    return (
      <h2>Weather</h2>
    )
  }
}

export default Weather