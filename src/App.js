import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import styled from 'styled-components';
import { MainContainer } from './containers';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Route component={MainContainer} />
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
