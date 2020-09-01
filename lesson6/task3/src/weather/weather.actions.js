import { getWetherData } from './weather.gateway';

export const WEATHER_DATA_RECEIVED = 'WEATHER_DATA_RECEIVED';

const weatherDataReceived = (weatherData) => {
  return {
    type: WEATHER_DATA_RECEIVED,
    payload: {
      weatherData,
    }
  }
}


export const fetchWeatherData = () => {
  return function (dispatch) {
    getWetherData()
      .then((weatherData) => {
        dispatch(weatherDataReceived(weatherData))
      })
  }
}
