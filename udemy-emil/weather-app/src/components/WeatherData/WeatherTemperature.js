import React from 'react'
import WeatherIcons from 'react-weathericons'
import {
  CLOUD,
  CLOUDY,
  RAIN,
  SNOW,
  SUN,
  FOG,
  WINDY,
} from '../../constants/weathers'

const icons = {
  [CLOUD]: "cloud",
  [CLOUDY]: "cloudy",
  [RAIN]: "rain",
  [SNOW]: "snow",
  [SUN]: "day-sunny",
  [FOG]: "day-fog",
  [WINDY]: "windy",
}

const getWeatherIcon = weatherState => {
  const icon = icons[weatherState]

  if (icon) {
    return <WeatherIcons name={weatherState} size="2x"/>
  } else {
    return <WeatherIcons name="day-sunny" size="2x"/>
  }
}

const WeatherTemperature = ({temperature, weatherState}) => (
  <div>
    {getWeatherIcon(weatherState)}
    <span>{`${temperature}C°`}</span>
  </div>
)

export default WeatherTemperature
