import { connect } from 'react-redux';
import React from 'react';

class Weather extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main className="weather">
        <h1 className="weather__title">Weather data</h1>
        <ul className="cities-list">
          <li className="city">
            <span className="city__name">Lake Hilmaside</span>
            <span className="city__temperature">78 F</span>
          </li>
          <li className="city">
            <span className="city__name">Lake Minnieberg</span>
            <span className="city__temperature">8 F</span>
          </li>

          <li className="city">
            <span className="city__name">East Gerhardshire</span>
            <span className="city__temperature">23 F</span>
          </li>
        </ul>
      </main>
    )
  }
}

const connector = connect(mapState, mapDispatch);

export default Weather;