import React from 'react';
import { getPercentage } from '../utils/helpers';

function Poll({
  answered,
  authedUser,
  authorAvatar,
  handleAnswer,
  poll,
  totalVotes,
  vote
}) {
  return (
    <div>
      <h1 className="question">{poll.question}</h1>
      <div className="poll-author">
        By <img src={authorAvatar} alt="Author's avatar" />
      </div>
      <ul>
        {['aText', 'bText', 'cText', 'dText'].map((key) => {
          const count = poll[`${key[0]}Votes`].length;
          return (
            <li
              key={key}
              onClick={() => {
                if (vote === null && !answered) {
                  handleAnswer(key[0]);
                }
              }}
              className={`option ${vote === key[0] ? 'chosen' : ''}`}>
              {vote === null ? (
                poll[key]
              ) : (
                <div className="result">
                  <span>{poll[key]}</span>
                  <span>
                    {getPercentage(count, totalVotes)}% ({count})
                  </span>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Poll;
