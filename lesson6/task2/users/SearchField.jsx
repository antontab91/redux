import React from 'react';
import getUserData from './users.gateway';

class SearchField extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      userData: '',
    }
  }

  handleChange = (e) => {
    this.setState({
      userData: e.target.value,
    })
  }

  render() {
    return (
      <div className="name-form" >
        <input type="text" className="name-form__input" onChange={this.handleChange} value={this.state.userData} />
        <button className="name-form__btn btn">Show</button>
      </div>
    )
  }
}

export default SearchField;