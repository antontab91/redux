import React from 'react';
import getUserData from './users.gateway';
import { connect } from 'react-redux';

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

  onSubmitForm = (e) => {
    // e.preventDefault();
    getUserData(this.state.userData)
      .then((userData) => {
        console.log(userData)
        return userData;
      })
  }

  render() {
    return (
      <div className="name-form" >
        <input type="text" className="name-form__input" onChange={this.handleChange} value={this.state.userData} />
        <button onClick={() => { this.onSubmitForm() }} className="name-form__btn btn">Show</button>
      </div>
    )
  }
}

export default SearchField;