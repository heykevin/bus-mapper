import React, { Component } from 'react';
import { connect } from "react-redux";
import ReactMapGL from 'react-map-gl';
import MarkerComponent from './MarkerComponent.js';
import {getKey} from './config.js';
import './styles/App.css';

class App extends Component {

  constructor() {
    super();

    this.onViewportChange = this.onViewportChange.bind(this);
    this.fetchBusList = this.fetchBusList.bind(this);
    this.createMarkers = this.createMarkers.bind(this);
    this.filterBusList = this.filterBusList.bind(this);
    this.onMousewheel = this.onMousewheel.bind(this);
  }

  // Get list of busses from api before map is rendered
  componentWillMount() {
    this.fetchBusList();
  }

  componentDidMount() {
    // Retrieve list of busses from api every 10 seconds
    this.timer = setInterval(this.fetchBusList, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  // Filter busses depending if they are in the viewport bounds
  filterBusList() {
    const map = this.mapRef.getMap().getBounds();
    const {_ne: upper, _sw: lower} = map
    return this.props.busses.filter((bus) => {
      return bus.Latitude <= upper.lat && bus.Longitude <= upper.lng
        && bus.Latitude >= lower.lat && bus.Longitude >= lower.lng
    });
  }

  // Get list of busses from api
  fetchBusList() {
    this.props.dispatch({
      type: 'MAP_FETCH_BUSSES'
    });
  }
  onViewportChange(v) {
    this.props.dispatch({
      type: 'VIEWPORT_CHANGE',
      state: v
    })
  }

  // Create marker components on filtered list of busses
  createMarkers() {
    // console.log("creating markers");
    if (this.props.busses) {
      return this.filterBusList(this.props.busses).map((bus) =>
        <MarkerComponent key={bus.VehicleNo} lat={bus.Latitude} long = {bus.Longitude} info={bus}/>
      )
    }
  }

  // Custom zoom implementation ot ignore mouse wheel acceleration
  // Acceleration resulted in poor performance when causing big jumps of zoom
  onMousewheel(event) {
    event.preventDefault();
    const minZoom = 12;
    const maxZoom = 16;
    if (event.deltaY > 0) {
      const newZoom = this.props.viewport.zoom - 0.1
      this.onViewportChange({...this.props.viewport, zoom: newZoom <= minZoom ? minZoom : newZoom});
    } else {
      const newZoom = this.props.viewport.zoom + 0.1
      this.onViewportChange({...this.props.viewport, zoom: newZoom >= maxZoom ? maxZoom : newZoom});
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-intro" onWheel={this.onMousewheel}>
          <ReactMapGL
            {...this.props.viewport}
            ref = { map => this.mapRef = map }
            scrollZoom={false}
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
    latitude: 49.2606052,
    longitude:  -123.2459938,
    zoom: 14,
    bearing: 0,
    pitch: 0
  }

  return {
    busses: state.bus.busses || [],
    viewport: state.map.viewport ? Object.assign({}, viewport, state.map.viewport) : viewport
  };
}

export default connect(mapStateToProps)(App);
