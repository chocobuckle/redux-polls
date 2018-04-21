import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
      <ul>
        {pollsList.map((poll) => (
          <Question key={poll.id}>
            <Link to={`polls/${poll.id}`}>{poll.question}</Link>
          </Question>
        ))}
      </ul>
    </div>
  );
}

const Button = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`;

const Question = styled.li`
  &:hover {
    font-weight: bold;
  }
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
