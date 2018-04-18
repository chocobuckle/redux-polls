import React from 'react';
import {} from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

Navbar.propTypes = {};

function Navbar() {
  return (
    <List>
      <ListItem>
        <RouterLink exact to="/">Home</RouterLink>
      </ListItem>
      <ListItem>
        <RouterLink to="/leaderboard">Leaderboard</RouterLink>
      </ListItem>
      <ListItem>
        <RouterLink to="/add">Add Poll</RouterLink>
      </ListItem>
    </List>
  );
}

const List = styled.ul`
  display: flex;
  margin-top: 0;
`;

const ListItem = styled.li``;

const RouterLink = styled(NavLink)``;

export default Navbar;
