import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import { connect } from "react-redux";
import MapGL from 'react-map-gl';
import {getKey} from './config.js';
import logo from './logo.svg';
import './styles/App.css';
import Test from './Test.js';

class App extends Component {

  constructor(props) {
    super(props);

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  getViewPort() {
    return({
      latitude: 37.785164,
      longitude: -122.41669,
      zoom: 14,
      bearing: 0,
      pitch: 0,
      width: 700,
      height: 400
    });
  }

  onButtonClick() {
    this.props.dispatch({
      type: "BUTTON_CLICK",
      counter: this.props.counter,
      title: "ribbit"
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Bus Map</h1>
          
        </header>
        <div className="App-intro">
          <div className="whitespace"/>
          <span> {this.props.counter} </span>
          <div className="whitespace"/>
          <Button bsStyle="primary" onClick={this.onButtonClick}>Primary</Button>
          <MapGL
            {...this.getViewPort()}
            mapStyle="mapbox://styles/mapbox/dark-v9"
            onViewportChange={v => this.setState({viewport: v})}
            preventStyleDiffing={false}
            mapboxApiAccessToken={getKey()} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    counter: state.app.counter ? state.app.counter : 0,
    title: state.app.title ? state.app.title: "woof"
  };
}

export default connect(mapStateToProps)(App);
