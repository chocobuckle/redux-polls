import React from 'react';
import styled from 'styled-components';

function Leaderboard({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <ListItem key={user.name}>
          <UserImage src={user.avatarURL} />
          <UserInfo>
            <UserName>{user.name}</UserName>
            <UserStats>Polls {user.polls}</UserStats>
            <UserStats>Answers {user.answers}</UserStats>
          </UserInfo>
        </ListItem>
      ))}
    </ul>
  );
}

const ListItem = styled.li`
  display: flex;
`;

const UserImage = styled.img`
  border-radius: 50%;
  height: 3em;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.75em;
`;

const UserName = styled.h2`
  margin: 0 0 0.2em;
`;

const UserStats = styled.p`
  margin: 0.2em 0;
`;

export default Leaderboard;
