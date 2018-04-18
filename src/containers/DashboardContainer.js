import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dashboard } from 'components';

class DashboardContainer extends Component {
  state = {
    showAnsweredPolls: false
  };

  handleShowAnsweredPolls = () => {
    this.setState({
      showAnsweredPolls: true
    });
  };

  handleShowUnansweredPolls = () => {
    this.setState({
      showAnsweredPolls: false
    });
  };

  render() {
    const { showAnsweredPolls } = this.state;
    const { usersAnsweredPolls, usersUnansweredPolls } = this.props;
    const pollsList = showAnsweredPolls
      ? usersAnsweredPolls
      : usersUnansweredPolls;
    return (
      <Dashboard
        handleShowAnsweredPolls={this.handleShowAnsweredPolls}
        handleShowUnansweredPolls={this.handleShowUnansweredPolls}
        pollsList={pollsList}
        showAnsweredPolls={showAnsweredPolls}
      />
    );
  }
}

function mapStateToProps({ users, polls, authedUser }) {
  if (authedUser) {
    const { answers } = users[authedUser];
    const usersAnsweredPolls = answers
      .map((id) => polls[id])
      .sort((a, b) => b.timestamp - a.timestamp);
    const usersUnansweredPolls = Object.keys(polls)
      .filter((id) => !answers.includes(id))
      .map((id) => polls[id])
      .sort((a, b) => b.timestamp - a.timestamp);
    return {
      usersAnsweredPolls,
      usersUnansweredPolls
    };
  }
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(DashboardContainer);
