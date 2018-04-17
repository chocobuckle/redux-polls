import React from 'react';
import {} from 'prop-types';
import styled from 'styled-components';

Dashboard.propTypes = {};

function Dashboard({
  handleShowUnansweredPollsClick,
  handleShowAnsweredPollsClick,
  showAnsweredPolls,
  showUnansweredPolls,
  usersAnsweredPolls,
  usersUnansweredPolls
}) {
  return (
    <div>
      <div>
        <UnansweredHeader
          showUnansweredPolls={showUnansweredPolls}
          onClick={handleShowUnansweredPollsClick}>
          Unanswered
        </UnansweredHeader>
        <span> | </span>
        <AnsweredHeader
          showAnsweredPolls={showAnsweredPolls}
          onClick={handleShowAnsweredPollsClick}>
          Answered
        </AnsweredHeader>
      </div>
      <ul>
        {showUnansweredPolls &&
          usersUnansweredPolls.map((poll) => (
            <li key={poll.id}>{poll.question}</li>
          ))}
        {showAnsweredPolls &&
          usersAnsweredPolls.map((poll) => (
            <li key={poll.id}>{poll.question}</li>
          ))}
      </ul>
    </div>
  );
}

const UnansweredHeader = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  text-decoration: ${({ showUnansweredPolls }) =>
    showUnansweredPolls ? 'underline' : 'none'};
`;

const AnsweredHeader = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  text-decoration: ${({ showAnsweredPolls }) =>
    showAnsweredPolls ? 'underline' : 'none'};
`;

export default Dashboard;
