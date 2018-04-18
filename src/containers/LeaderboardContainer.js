import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Leaderboard } from '../components';

class LeaderboardContainer extends Component {
  static propTypes = {};

  render() {
    const { users, polls } = this.props;
    return <Leaderboard users={users} polls={polls} />;
  }
}

function mapStateToProps({ users }) {
  return {
    users: Object.keys(users)
      .map((userId) => {
        const { name, avatarURL, polls, answers } = users[userId];

        return {
          name,
          avatarURL,
          polls: polls.length,
          answers: answers.length
        }
      })
      .sort((a, b) => b.polls + b.answers > a.polls + a.answers)
  };
}

export default connect(mapStateToProps)(LeaderboardContainer);
