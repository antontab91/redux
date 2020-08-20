import React from 'react';
import { connect } from 'react-redux';

const Options = ({ title, options, moveOption }) => {
  return (
    <div className="options">
      <div className="options__title">{title}</div>
      <ul className="options__list">
        {options.map((option) => {
          return <li key={option.id}>
            <button className="options__list-item">{option.name}</button>
          </li>
        })}
      </ul>
    </div >
  )
}

const mapState = state => {
  return {
    options: state.options.optionsList,
  }
}



const connector = connect(mapState);
const connectedOptions = connector(Options)

export default connectedOptions;