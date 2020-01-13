import React from 'react'
import axios from 'axios'

class Weather extends React.Component {
  constructor() {
    super() 
    this.state = {
      forecast: []

    }
    

  }

  componentDidMount(){
    this.getWeather()
  }
  
  getWeather(){
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&APPID=${process.env.WEATHER_KEY}`)
      .then(res => this.setState({ forecast: res.data.weather }))
      .catch(err => console.log(err))

  }
 
  


  render(){
    const forecast = this.state.forecast
    // console.log(forecast)
    return (
      <>
        <h2>London's Weather Forecast Today</h2>
          {forecast.map((elem, i) => (
            <div key={i}>
              <p >{elem.description}</p>
              {elem.main === 'Clouds' ? <img className="weather-icon" src="./assets/cloudy.png" /> : elem.main === 'Rain' ? <img className="weather-icon" src="./assets/rain.png" /> : elem.main === 'Drizzle' ? <img className="weather-icon" src="./assets/rain.png" /> : elem.main === 'Snow' ? <img className="weather-icon" src="./assets/snow.png" /> : elem.main === 'Clear' ? <img className="weather-icon" src="./assets/clear.png" /> : <img src={elem.icon} />} 
            </div>
          ))}
      </>

    
      
    )
  }
}

export default Weather