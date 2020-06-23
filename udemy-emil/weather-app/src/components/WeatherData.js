import React from 'react'
import WeatherExtraInfo from './WeatherExtraInfo'
import WeatherTemperature from './WeatherTemperature'

const WeatherData = () => (
  <div>
    <WeatherTemperature
      temperature={20}
      weatherState={'fog'}
    />
    <WeatherExtraInfo
      humidity={80}
      wind={"10 m/seg"}
    />
  </div>
)
export default WeatherData