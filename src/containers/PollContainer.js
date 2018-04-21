import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Poll } from '../components';
import { handleAddAnswer } from '../ducks/polls';

const getVoteKeys = () => ['aVotes', 'bVotes', 'cVotes', 'dVotes']

class PollContainer extends Component {
  handleAnswer = (answer) => {
    const { poll, authedUser } = this.props
    this.answered = true

    this.props.dispatch(handleAddAnswer({
      authedUser,
      answer,
      id: poll.id,
    }))
  }

  render() {
    if (this.props.poll === null) {
      return <p>This poll does not exist</p>;
    }

    const { poll, vote, authorAvatar } = this.props;

    const totalVotes = getVoteKeys().reduce(
      (total, key) => total + poll[key].length,
      0
    );
    return (
      <Poll
        answered={this.answered}
        handleAnswer={this.handleAnswer}
        poll={poll}
        vote={vote}
        authorAvatar={authorAvatar}
        totalVotes={totalVotes}
      />
    );
  }
}

function mapStateToProps({ authedUser, polls, users }, { match }) {
  const { id } = match.params;
  const poll = polls[id];

  if (!poll) {
    return {
      poll: null
    };
  }

  const vote = ['aVotes', 'bVotes', 'cVotes', 'dVotes'].reduce((vote, key) => {
    if (vote !== null) {
      return vote[0];
    }

    return poll[key].includes(authedUser) ? key : vote;
  }, null);

  return {
    poll,
    vote,
    authedUser,
    authorAvatar: users[poll.author].avatarURL
  };
}

export default connect(mapStateToProps)(PollContainer);
