import React from 'react';
import getUserData from './users.gateway';
import { connect } from 'react-redux';
import * as usersActions from './user.actions';


class SearchField extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      userName: '',
    }
  }

  handleChange = (e) => {
    this.setState({
      userName: e.target.value,
    })
  }

  handleUserSearch = () => {
    // this.props.showSpinner()
    // getUserData(this.state.userName)
    //   .then((userData) => {
    //     this.props.userDataRecived(userData);
    //   })

    this.props.fetchUserData(this.state.userName);
  }

  render() {

    return (
      <div className="name-form" >
        <input type="text"
          className="name-form__input"
          onChange={this.handleChange}
          value={this.state.userName} />
        <button
          onClick={() => { this.handleUserSearch() }}
          className="name-form__btn btn">Show</button>
      </div>
    )
  }
}

const mapDispatch = {
  // showSpinner: usersActions.showSpinner,
  // userDataRecived: usersActions.userDataRecived,
  fetchUserData: usersActions.fetchUserData,
}


const connector = connect(null, mapDispatch)
const connectedSearchField = connector(SearchField);

export default connectedSearchField;