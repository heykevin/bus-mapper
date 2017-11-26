import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import { connect } from "react-redux";
import ReactMapGL, {Feature} from 'react-map-gl';
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
    this.fetchBusList = this.fetchBusList.bind(this);
    this.createMarkers = this.createMarkers.bind(this);
  }

  componentWillMount() {
    this.fetchBusList();
  }

  onButtonClick() {
    this.props.dispatch({
      type: "BUTTON_CLICK",
      counter: this.props.counter,
      title: "ribbit"
    });
  }

  fetchBusList() {
    this.props.dispatch({
      type: 'MAP_FETCH_BUSSES'
    });
  }

  onViewportChange(v) {
    // console.log("change");
    console.log(v);
    this.props.dispatch({
      type: "VIEWPORT_CHANGED",
      state: v
    })
  }

  createMarkers() {
    if (this.props.busses) {
      return this.props.busses.map((bus) =>
        <MarkerComponent lat={bus.Latitude} long = {bus.Longitude}/>
      )
    } else {
      return (
        <div>
          <MarkerComponent lat={49.2765} long={-123.2177} />
        </div>
      )
    }

  }

  render() {
    // console.log(this.props);


    return (
      <div className="App">
        <div className="App-intro">
          <ReactMapGL
            {...this.props.viewport}
            width={window.innerWidth}
            height={window.innerHeight}
            mapStyle="mapbox://styles/mapbox/streets-v10"
            onViewportChange={v => this.onViewportChange(v)}
            preventStyleDiffing={false}
            mapboxApiAccessToken={getKey()}>
             {/* {this.createMarkers()}  */}
               {this.props.busses}  
            </ReactMapGL>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {

  // Default location
  const viewport = {
    latitude: 49.2765,
    longitude:  -123.2177,
    zoom: 14,
    bearing: 0,
    pitch: 0
  }

  // console.log('state', state);
  return {
    busses: state.bus.busses || [],
    viewport: state.map.viewport ? Object.assign({}, viewport, state.map.viewport) : viewport
  };
}

export default connect(mapStateToProps)(App);
