import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import { connect } from "react-redux";
import ReactMapGL, {Feature} from 'react-map-gl';
import MarkerComponent from './MarkerComponent.js';
import {getKey} from './config.js';
import api from './api/api.js';
import './styles/App.css';

class App extends Component {

  constructor() {
    super();

    this.onViewportChange = this.onViewportChange.bind(this);
    this.fetchBusList = this.fetchBusList.bind(this);
    this.createMarkers = this.createMarkers.bind(this);
    this.filterBusList = this.filterBusList.bind(this);
  }

  // Get list of busses from api before map is rendered
  componentWillMount() {
    this.fetchBusList();
  }

  // Filter busses based on viewport
  filterBusList() {
    const map = this.mapRef.getMap().getBounds();
    const {_ne: upper, _sw: lower} = map
    return this.props.busses.filter((bus) => {
      return bus.Latitude <= upper.lat && bus.Longitude <= upper.lng
        && bus.Latitude >= lower.lat && bus.Longitude >= lower.lng
    });
  }

  fetchBusList() {
    this.props.dispatch({
      type: 'MAP_FETCH_BUSSES'
    });
  }

  onViewportChange(v) {
    this.props.dispatch({
      type: 'VIEWPORT_CHANGED',
      state: v
    })
  }

  // Create marker components on filtered list of busses
  createMarkers() {
    console.log("creating markers");
    if (this.props.busses) {
      return this.filterBusList(this.props.busses).map((bus) =>
        <MarkerComponent key={bus.VehicleNo} lat={bus.Latitude} long = {bus.Longitude} info={bus}/>
      )
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-intro">
          <ReactMapGL
            {...this.props.viewport}
            ref = { map => this.mapRef = map }
            width={window.innerWidth}
            height={window.innerHeight}
            mapStyle="mapbox://styles/mapbox/streets-v10"
            onViewportChange={v => this.onViewportChange(v)}
            preventStyleDiffing={false}
            mapboxApiAccessToken={getKey()}>
              {this.props.busses && this.mapRef ? this.createMarkers(): null}  
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
