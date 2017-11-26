import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import { connect } from "react-redux";
import MapGL, {Marker} from 'react-map-gl';
import MarkerComponent from './MarkerComponent.js';
import {getKey} from './config.js';
import api from './api/api.js';
import logo from './logo.svg';
import './styles/App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.onButtonClick = this.onButtonClick.bind(this);
    this.onViewportChange = this.onViewportChange.bind(this);
  }

  onButtonClick() {
    this.props.dispatch({
      type: "BUTTON_CLICK",
      counter: this.props.counter,
      title: "ribbit"
    });
  }

  onViewportChange(v) {
    console.log("change");
    this.props.dispatch({
      type: "VIEWPORT_CHANGED",
      state: v
    })
  }

  render() {
    api.getBus();
    return (
      <div className="App">
        <div className="App-intro">
          <MapGL
            {...this.props.viewport}
            width={window.innerWidth}
            height={window.innerHeight}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            onViewportChange={v => this.onViewportChange(v)}
            preventStyleDiffing={false}
            mapboxApiAccessToken={getKey()}>
              <MarkerComponent lat={49.2765} long={-123.2177} />
            </MapGL>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const viewport = {
    latitude: 49.2765,
    longitude:  -123.2177,
    zoom: 14,
    bearing: 0,
    pitch: 0
  }
  return {
    viewport: state.map.viewport ? Object.assign({}, viewport, state.map.viewport) : viewport
  };
}

export default connect(mapStateToProps)(App);
