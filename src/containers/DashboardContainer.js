import React, { Component } from 'react';
import { connect } from 'react-redux';
import {} from 'prop-types';
import { Dashboard } from 'components';
import { showAnsweredPolls, showUnansweredPolls } from 'ducks/dashboard';

class DashboardContainer extends Component {
  static propTypes = {};

  handleShowAnsweredPollsClick = () => {
    this.props.dispatch(showAnsweredPolls());
  };

  handleShowUnansweredPollsClick = () => {
    this.props.dispatch(showUnansweredPolls());
  };

  render() {
    const {
      showAnsweredPolls,
      showUnansweredPolls,
      usersAnsweredPolls,
      usersUnansweredPolls
    } = this.props;
    return (
      <Dashboard
        handleShowAnsweredPollsClick={this.handleShowAnsweredPollsClick}
        handleShowUnansweredPollsClick={this.handleShowUnansweredPollsClick}
        showAnsweredPolls={showAnsweredPolls}
        showUnansweredPolls={showUnansweredPolls}
        usersAnsweredPolls={usersAnsweredPolls}
        usersUnansweredPolls={usersUnansweredPolls}
      />
    );
  }
}

function mapStateToProps({ users, polls, authedUser, dashboard }) {
  if (authedUser) {
    const { answers } = users[authedUser];
    const { showAnsweredPolls, showUnansweredPolls } = dashboard;
    const usersPollIDArr = Object.values({ ...answers });
    const pollArr = Object.values({ ...polls });
    const usersAnsweredPolls = pollArr.filter((poll) =>
      usersPollIDArr.includes(poll.id)
    );
    const usersUnansweredPolls = pollArr.filter(
      (poll) => !usersPollIDArr.includes(poll.id)
    );
    return {
      showAnsweredPolls,
      showUnansweredPolls,
      usersAnsweredPolls,
      usersUnansweredPolls
    };
  }
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(DashboardContainer);
