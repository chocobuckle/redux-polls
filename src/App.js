import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import LoadingBar from 'react-redux-loading';
import { connect } from 'react-redux';
import { Navbar } from 'components';
import {
  DashboardContainer,
  LeaderboardContainer,
  AddPollContainer
} from 'containers';
import { handleInitialData } from 'ducks/shared';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1em;
  width: 100%;
`;

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { error, loading } = this.props;
    if (error) return <Error>ERROR!!!</Error>;
    if (loading) return null;
    return (
      <BrowserRouter>
        <Wrapper>
          <LoadingBar />
          <Route component={Navbar} />
          {error ? (
            <Error>ERROR!!!</Error>
          ) : loading ? null : (
            <Switch>
              <Route exact path="/" component={DashboardContainer} />
              <Route
                exact
                path="/leaderboard"
                component={LeaderboardContainer}
              />
              <Route exact path="/add" component={AddPollContainer} />
              <Route render={() => <p>Page Not Found!</p>} />
            </Switch>
          )}
        </Wrapper>
      </BrowserRouter>
    );
  }
}

function mapStateToProps({ shared, authedUser }) {
  const { error } = shared;
  return {
    error,
    loading: authedUser === null
  };
}

const Error = styled.div``;

export default connect(mapStateToProps)(App);
