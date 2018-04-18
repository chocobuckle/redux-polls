import React from 'react';
import styled from 'styled-components';

Dashboard.propTypes = {};

function Dashboard({
  handleShowAnsweredPolls,
  handleShowUnansweredPolls,
  pollsList,
  showAnsweredPolls
}) {
  return (
    <div>
      <Unanswered
        onClick={handleShowUnansweredPolls}
        showAnsweredPolls={showAnsweredPolls}>
        Unanswered
      </Unanswered>
      <span> | </span>
      <Answered
        onClick={handleShowAnsweredPolls}
        showAnsweredPolls={showAnsweredPolls}>
        Answered
      </Answered>
      <ul>{pollsList.map((poll) => <li key={poll.id}>{poll.question}</li>)}</ul>
    </div>
  );
}

const Button = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`;

const Unanswered = Button.extend`
  text-decoration: ${({ showAnsweredPolls }) =>
    !showAnsweredPolls ? 'underline' : 'none'};
`;

const Answered = Button.extend`
  text-decoration: ${({ showAnsweredPolls }) =>
    showAnsweredPolls ? 'underline' : 'none'};
`;

export default Dashboard;
