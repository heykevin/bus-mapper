import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import { connect } from "react-redux";
import logo from './logo.svg';
import './styles/Test.css';

class Test extends Component {

  constructor(props) {
    super(props);

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    this.props.dispatch({
      type: "TEST_CLICK",
      counting: this.props.counting
    });
  }

  render() {
    return (
      <div className="section">
        <div className="whitespace"/>
        <span> {this.props.counting} </span>
        <div className="whitespace"/>
        <Button bsStyle="primary" onClick={this.onButtonClick}>Primary</Button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    counting: state.test.counting ? state.test.counting : 0
  };
}

export default connect(mapStateToProps)(Test);
