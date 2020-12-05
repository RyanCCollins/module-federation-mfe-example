// (C) Copyright 2017-2021 Hewlett Packard Enterprise Development LP

import React from 'react';
import PropTypes from 'prop-types';

export const ElementBase = ({
  width,
  height,
}) => (
  <svg
    version='1.1'
    viewBox='0 0 1920 783.3'
    width={width}
    height={height}
  >
    <g>
      <rect
        fill='none'
        width='1920'
        height='783.3'
      />
      <path
        fill='#01a982'
        d='M323.8,574.2h1272.4V209.1H323.8V574.2z M1516.7,494.8H403.3V288.5h1113.3V494.8z'
      />
    </g>
  </svg>
);

ElementBase.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

ElementBase.defaultProps = {
  width: undefined,
  height: undefined,
};

export default ElementBase;
