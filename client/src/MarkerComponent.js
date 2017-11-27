import React, { Component } from 'react';
import {Marker} from 'react-map-gl';
import PopoverComponent from './PopoverComponent.js';

// Dumb component for Markers
class MarkerComponent extends Component {
  render() {
    const info = this.props.info
    return (
      <Marker latitude={this.props.lat || 49.2765} longitude={this.props.long || -123.2177}>
        <PopoverComponent destination={info.Destination} route={info.RouteNo}/>
      </Marker>
    );
  }
}

export default MarkerComponent;
