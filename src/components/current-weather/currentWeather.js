import "./current-weather.css"

export default function CurrentWeather() {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">Name of city</p>
          <p className="description">Current weather</p>
        </div>

        <img alt="weather" className="weather-icon" src={require('../../icons/01d.png')} ></img>
      </div>
      <div className="bottom">
        <p className="temperature">14°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label top">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value"> °C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">13 m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">20 %</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">1032 hPa</span>
          </div>

        </div>

      </div>

    </div>
  )
}
//FINISHED AT 28;19