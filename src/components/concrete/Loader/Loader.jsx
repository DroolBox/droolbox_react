
import React, { PureComponent } from 'react';

import Circle from './Circle';

export default class Loader extends PureComponent {
  componentDidMount() {
    this.loader.style.opacity = 0;
    window.requestAnimationFrame(() => {
      this.loader.style.transition = 'opacity 1000ms';
      this.loader.style.opacity = 1;
    });
    this.animate();
  }

  componentWillUnmount() {
    cancelAnimationFrame(this._animationReq);
  }

  _amplitude = 20
  _currentAnimationTime = 0
  _centreY = 75

  animate = () => {
    this.cLeft.setAttribute(
      'cy',
      this._centreY + (this._amplitude * (Math.sin(this._currentAnimationTime)))
    );
    this.cCentre.setAttribute(
      'cy',
      this._centreY + (this._amplitude * Math.sin(this._currentAnimationTime - 1))
    );
    this.cRight.setAttribute(
      'cy',
      this._centreY + (this._amplitude * (Math.sin(this._currentAnimationTime - 2)))
    );

    this._currentAnimationTime += 0.15;
    this._animationReq = requestAnimationFrame(this.animate);
  }

  bindElement = (id, element) => {
    this[id] = element;
  }

  bindLoader = element => {
    this.loader = element;
  }

  render() {
    return (
      <svg
        id="loader"
        width="300"
        height="150"
        ref={this.bindLoader}
        style={{
          position: 'absolute',
          left: 'calc(50% - 150px)',
          top: 'calc(50vh - 150px)'
        }}
      >
        <defs>
          <linearGradient id="linear" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#b9deed" />
            <stop offset="100%" stopColor="#efefef" />
          </linearGradient>
        </defs>
        <Circle
          bindElement={this.bindElement}
          id="cLeft"
          cx="120"
          cy="75"
          r="8.5"
        />
        <Circle
          bindElement={this.bindElement}
          id="cCentre"
          cx="150"
          cy="75"
          r="10"
        />
        <Circle
          bindElement={this.bindElement}
          id="cRight"
          cx="180"
          cy="75"
          r="8.5"
        />
      </svg>
    );
  }
}
