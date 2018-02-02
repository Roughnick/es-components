import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes` from { transform: rotate(0deg);} to { transform: rotate(360deg);}`;

const StyledSmallSpinner = styled.div`
  display: inline-block;
  width: ${props => props.size}px;

  & .indicator {
      animation: ${rotate360} 1.4s infinite linear;
      transform-origin 50% 50%;
  }
`;

function SmallSpinner({ size, text }) {
  return (
    <StyledSmallSpinner size={size} aria-hidden>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 281.77 281.77">
        <defs>
          <style>
            {`
              .track { fill:#eee;}
              .arc-tail { fill:url(#linear-gradient);}
              .arc-head { fill:#573866;}
              .arc-clear { fill:none;} `}
          </style>
          <linearGradient
            id="linear-gradient"
            x1="168.16"
            y1="97.33"
            x2="309.04"
            y2="97.33"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.02" stopColor="#eee" />
            <stop offset="0.13" stopColor="#c9c1cc" />
            <stop offset="0.25" stopColor="#a697ad" />
            <stop offset="0.37" stopColor="#897593" />
            <stop offset="0.5" stopColor="#735a7f" />
            <stop offset="0.62" stopColor="#644771" />
            <stop offset="0.75" stopColor="#5a3c69" />
            <stop offset="0.89" stopColor="#573866" />
          </linearGradient>
        </defs>
        <g transform="translate(-27.28 -26.9)">
          <title>
            {text}
          </title>
          <path
            className="track"
            d="M168.16,26.9A140.88,140.88,0,1,0,309,167.78,140.88,140.88,0,0,0,168.16,26.9Zm0,239.24a98.36,98.36,0,1,1,98.36-98.36A98.36,98.36,0,0,1,168.16,266.14Z"
          />
          <g className="indicator">
            <path
              className="arc-tail"
              d="M266.52,167.77H309A140.88,140.88,0,0,0,168.16,26.9V69.42A98.36,98.36,0,0,1,266.52,167.77Z"
            />
            <path
              className="arc-head"
              d="M266.52,167.57H309c0,77.8-63.08,141.09-140.88,141.09V266.13C222.48,266.13,266.52,221.89,266.52,167.57Z"
            />
            <path
              className="arc-clear"
              d="M69.8,167.77H27.28A140.88,140.88,0,0,1,168.16,26.9V69.42A98.36,98.36,0,0,0,69.8,167.77Z"
            />
            <path
              className="arc-clear"
              d="M69.8,167.78H27.28A140.88,140.88,0,0,0,168.16,308.65V266.13A98.36,98.36,0,0,1,69.8,167.78Z"
            />
          </g>
        </g>
      </svg>
    </StyledSmallSpinner>
  );
}

SmallSpinner.propTypes = {
  /** Specify icon size in pixels */
  size: PropTypes.number,
  /** The title text for accessibility appears as a tooltip in most browsers */
  text: PropTypes.string
};

export default SmallSpinner;
