import React, { Component } from 'react';
import { connect } from 'react-redux';
import {} from 'prop-types';

class Dashboard extends Component {
  static propTypes = {};

  render() {
    const { usersAnsweredPolls, usersUnansweredPolls } = this.props;
    return (
      <ul>
        Answered:
        {usersAnsweredPolls.map((poll) => (
          <li key={poll.id}>{poll.question}</li>
        ))}
        Unanswered:
        {usersUnansweredPolls.map((poll) => (
          <li key={poll.id}>{poll.question}</li>
        ))}
      </ul>
    );
  }
}

function mapStateToProps({ users, polls, authedUser }) {
  if (authedUser) {
    const { answers } = users[authedUser];
    const usersPollIDArr = Object.values({ ...answers });
    const pollArr = Object.values({ ...polls });
    const usersAnsweredPolls = pollArr.filter((poll) =>
      usersPollIDArr.includes(poll.id)
    );
    const usersUnansweredPolls = pollArr.filter(
      (poll) => !usersPollIDArr.includes(poll.id)
    );
    console.log(usersAnsweredPolls, usersUnansweredPolls);
    return {
      usersAnsweredPolls,
      usersUnansweredPolls
    };
  }
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(Dashboard);
