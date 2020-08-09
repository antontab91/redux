import React from 'react';
import { ThemeContext } from './themes-context.js';

class ThemedButton extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.context)
    this.context;
    return (
      // <button className="btn">
      //   {this.props.children}
      // </button>
      <button style={{
        backgroundColor: this.context.background,
        color: this.context.fontColor,
      }}
        {...this.props} className="btn">

      </button>
    )
  }
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton;