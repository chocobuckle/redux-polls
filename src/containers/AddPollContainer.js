import React, { Component } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleAddPoll } from '../ducks/polls';

class AddPollContainer extends Component {
  state = {
    question: '',
    a: '',
    b: '',
    c: '',
    d: '',
    redirectToHomePage: false
  };

  handleInputChange = (e) => {
    const { value, name } = e.target;

    this.setState(() => ({
      [name]: value
    }));
  };

  isDisabled = () => {
    const { question, a, b, c, d } = this.state;

    return question === '' || a === '' || b === '' || c === '' || d === '';
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(handleAddPoll(this.state));
    this.setState({
      redirectToHomePage: true
    });
  };

  render() {
    const { question, a, b, c, d, redirectToHomePage } = this.state;
    return redirectToHomePage ? (
      <Redirect push to="/" />
    ) : (
      <Form onSubmit={this.handleSubmit}>
        <h3 style={{ marginBottom: '0.5em' }}>What is your question?</h3>
        <PollInput
          value={question}
          onChange={this.handleInputChange}
          name="question"
          type="text"
        />
        <h3 style={{ marginBottom: '0.5em' }}>What are the options?</h3>
        <label htmlFor="a">
          A.
          <PollInput
            value={a}
            onChange={this.handleInputChange}
            name="a"
            id="a"
            type="text"
          />
        </label>
        <label htmlFor="b">
          B.
          <PollInput
            value={b}
            onChange={this.handleInputChange}
            name="b"
            id="b"
            type="text"
          />
        </label>
        <label htmlFor="c">
          C.
          <PollInput
            value={c}
            onChange={this.handleInputChange}
            name="c"
            id="c"
            type="text"
          />
        </label>
        <label htmlFor="d">
          D.
          <PollInput
            value={d}
            onChange={this.handleInputChange}
            name="d"
            id="d"
            type="text"
          />
        </label>
        <SubmitButton type="submit" disabled={this.isDisabled()}>
          Submit
        </SubmitButton>
      </Form>
    );
  }
}

const Form = styled.form`
  margin-left: 4em;
`;

const SubmitButton = styled.button`
  width: 6em;
  height: 1.75em;
`;

const PollInput = styled.input`
  border: 1px solid grey;
  width: 30em;
  margin-top: 0.1em;
  height: 2.25em;
  padding: 0.15em 0.3em;
`;

export default connect()(AddPollContainer);
