import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { handleInitialData } from 'ducks/shared';
import { DashboardContainer } from 'containers';


class MainContainer extends Component {
  static propTypes = {};

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { error, authedUser } = this.props;
    if (error) return <Error>ERROR!!!</Error>;
    if (!authedUser) return <Loading>LOADING!!!</Loading>;
    return <DashboardContainer />;
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
