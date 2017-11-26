import React, { Component } from 'react';
import {Marker} from 'react-map-gl';

class MarkerComponent extends Component {
  
  shouldComponentUpdate(nextProps) {
    return true;
  }

  render() {
    // console.log('hi');
    return (
      <Marker latitude={this.props.lat || 49.2765} longitude={this.props.long || -123.2177}>
        <div className="marker">B
          <div className="marker-test"/>
        </div>
      </Marker>
    );
  }
}

export default MarkerComponent;
