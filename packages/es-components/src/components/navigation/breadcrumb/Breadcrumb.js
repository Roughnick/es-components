import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider, withTheme } from 'styled-components';
import tinycolor from 'tinycolor2';
import viaTheme from 'es-components-via-theme';

import genId from '../../util/generateAlphaName';

function darkenPrimary(primary) {
  return tinycolor(primary).darken(15).toRgbString();
}

const OrderedList = styled.ol`
  background-color: ${props => props.theme.colors.gray1};
  border-radius: 2px;
  line-height: 1.4;
  list-style: none;
  margin-bottom: 25px;
  margin-top: 0;
  padding: 8px 15px;

  > li + li {
    padding-left: 24px;

    &::before {
      border-color: ${props => props.theme.colors.gray5};
      border-style: solid;
      border-width: 0 2px 2px 0;
      box-sizing: border-box;
      content: '';
      display: block;
      height: 13px;
      left: 0px;
      position: absolute;
      top: 20%;
      transform: rotate(-45deg);
      width: 13px;
    }
  }
`;

const Crumb = styled.li`
  color: ${props => props.theme.colors.info};
  display: inline-block;
  margin-right: 2px;
  position: relative;

  > a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
  }

  > a:hover {
    color: ${props => darkenPrimary(props.theme.colors.primary)};
    text-decoration: underline;
  }
`;

function Breadcrumb({ children, ...props }) {
  return (
    <ThemeProvider theme={props.theme}>
      <OrderedList {...props}>
        {React.Children.map(children, child => (
          <Crumb key={genId()}>{child}</Crumb>
        ))}
      </OrderedList>
    </ThemeProvider>
  );
}

Breadcrumb.propTypes = {
  children: PropTypes.node.isRequired,
  /**
   * Theme object used by the ThemeProvider,
   * automatically passed by any parent component using a ThemeProvider
   */
  theme: PropTypes.object
};

Breadcrumb.defaultProps = {
  theme: viaTheme
};

export default withTheme(Breadcrumb);
