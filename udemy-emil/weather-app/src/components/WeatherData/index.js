import React from 'react'
import PropTypes from 'prop-types'
import WeatherExtraInfo from './WeatherExtraInfo'
import WeatherTemperature from './WeatherTemperature'
import { CLOUDY } from '../../constants/weathers'

const WeatherData = () => (
  <div>
    <WeatherTemperature
      temperature={20}
      weatherState={CLOUDY}
    />
    <WeatherExtraInfo
      humidity={80}
      wind={"10 m/seg"}
    />
  </div>
)

WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string.isRequired,
  humidity: PropTypes.number,
  wind: PropTypes.number,
}

export default WeatherData
