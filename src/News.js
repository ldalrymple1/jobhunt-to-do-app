import React from 'react'
import axios from 'axios'

class News extends React.Component {
  constructor() {
    super()

    this.state = {
      headlines: []

    }




  }

  componentDidMount(){
    // this.getWeather()
    this.getHeadlines()
  }

  getHeadlines() {
    axios.get(`https://newsapi.org/v2/top-headlines?country=gb&apiKey=${process.env.NEWS_API_KEY}`)
      .then(res => this.setState({ headlines: res.data.articles }))
      .catch(err => console.log(err))
  }
  
  // getWeather(){
  //   axios.get(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&APPID=${process.env.WEATHER_KEY}`)
  //     .then(res => console.log(res.data))
  //     .catch(err => console.log(err))

  // }
  





  render() {
    console.log(this.state.headlines)
    const headlines = this.state.headlines

    return (
      <>
      <h3 className="headlines-title">Top Headlines</h3>
      
      <div className="headlines">
        {headlines.map((elem, i) => (
          <div className="card" key={i}>
            <h3 >{elem.title}</h3>
            <img src={elem.urlToImage} alt={elem.title} className="news-image" />
            <a href={elem.url}><p>For more info</p></a>
          </div>
        ))}

      </div>
      </>
    )
  }
}

export default News