import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  } from 'prop-types';

class LeaderboardContainer extends Component {
  static propTypes = {

  };

  render() {
    return (
      <div>
        LeaderboardContainer
      </div>
    );
  }
}

function mapStateToProps({ polls }) {
  console.log(polls);
  return {
    polls
  };
}

export default connect(mapStateToProps)(LeaderboardContainer);
