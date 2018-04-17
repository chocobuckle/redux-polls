import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { handleInitialData } from 'ducks/shared';
import { Dashboard } from '.';


class MainContainer extends Component {
  static propTypes = {};

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { error, authedUser, users, polls } = this.props;
    const userArr = Object.values({ ...users });
    if (error) return <Error>ERROR!!!</Error>;
    if (!authedUser) return <Loading>LOADING!!!</Loading>;
    return <Dashboard />;
  }
}

function mapStateToProps({ shared, users, polls, authedUser }) {
  const { error } = shared;
  return {
    error,
    authedUser,
    polls,
    users
  };
}

const Error = styled.div``;
const Loading = styled.div``;

export default connect(mapStateToProps)(MainContainer);
