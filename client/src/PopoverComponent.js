import React, { Component } from 'react';
import {Popover, OverlayTrigger} from 'react-bootstrap';
import './styles/PopoverComponent.css';

// Dumb component for Popover
class PopoverComponent extends Component {
  render() {
    const popoverHoverFocus = (
      <Popover id="popover-trigger-hover-focus">
        <div className='popover-body'> 
          <div className='popover-route'>
            <span className='route-number'>
              {this.props.route}
            </span>
          </div>
          <div className='popover-bus-info'>
            <span className='bus-info'> 
              {this.props.destination}
            </span>
          </div>
        </div>
      </Popover>);

    return (
      // Hover and focus allows clicking on mobile
      <OverlayTrigger trigger={['hover', 'focus']} placement={'bottom'} overlay={popoverHoverFocus}>
        <div className='marker'>
          <a className="bus-link" href="#"> 
            <i className="fa fa-bus" aria-hidden="true" /> 
          </a>
        </div>
      </OverlayTrigger>
    );
  }
}

export default PopoverComponent;
