import React from 'react';
import MarkerComponent from '../MarkerComponent.js';

export default function bus(state = {}, action) {
  switch(action.type){
    case "BUS_LIST_SAVE":
      // console.log('save bus lis');
      return {
        ...state,
        busses: action.busses.map((bus) => <MarkerComponent lat={bus.Latitude} long = {bus.Longitude}/>)
      };
    default:
      return state;
  }
}
