import React from 'react';
import MarkerComponent from '../MarkerComponent.js';

export default function map(state = {}, action) {
  switch(action.type){
    case "VIEWPORT_CHANGE":
      // console.log("REDUCER MAP", action.action.state);
      return {
        ...state,
        viewport: action.state
      };
    default:
      return state;
  }
}
