import React from 'react'
import { connect } from 'react-redux';
import { fetchWeatherData } from './weather.actions';
import { useEffect } from 'react';

const Weather = ({ state, fetchWeatherData }) => {
  useEffect(() => {
    fetchWeatherData()
  }, []);

  console.log(state);

  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <ul className="cities-list">
        {state.map(({ id, name, temperature }) => {
          return (
            <li key={id} className="city">
              <span className="city__name">{name}</span>
              <span className="city__temperature">{`${temperature} F`}</span>
            </li>
          )
        })}


      </ul>
    </main>
  )
}

const mapState = state => {
  return {
    state: state.weather.weatherData,
  }
}

const mapDispatch = {
  fetchWeatherData,
}

const connector = connect(mapState, mapDispatch);
const connectedWeather = connector(Weather);


export default connectedWeather;