import React from 'react';

class ThemedButton extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      // <button className="btn">
      //   {this.props.children}
      // </button>

      <button {...this.props} className="btn">

      </button>
    )
  }
}

export default ThemedButton;