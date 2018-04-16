import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from 'ducks/shared';

class MainContainer extends Component {
  static propTypes = {};

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { users, polls } = this.props;
    const userArr = Object.values({ ...users });
    return userArr.map((user) => (
      <div key={user.id}>{`User name is ${user.name}, and id is ${user.id}`}</div>
    ));
  }
}

function mapStateToProps({ users, polls }) {
  return {
    users,
    polls
  };
}

export default connect(mapStateToProps)(MainContainer);
