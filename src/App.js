import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { MainContainer, LeaderboardContainer, AddPollContainer } from './containers';

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Route component={Navbar} />
        <Switch>
          <Route exact path='/' component={MainContainer} />
          <Route exact path='/leaderboard' component={LeaderboardContainer} />
          <Route exact path='/add' component={AddPollContainer} />
          <Route render={() => <p>Page Not Found!</p>} />
        </Switch>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
