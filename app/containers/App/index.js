/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { connect } from 'react-redux';

import { createSelector } from 'reselect';

import {
  selectMenuState,
} from './selectors';

import { toggleMenu } from './actions';

import styles from './styles.css';

// material ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// ui components
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';


/* eslint-disable react/prefer-stateless-function */
export class App extends React.Component {

  static propTypes = {
    children: React.PropTypes.node,
    openMenu: React.PropTypes.bool,
    toggleMenu: React.PropTypes.func,
  };

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          <AppBar
            title="title"
            onLeftIconButtonTouchTap={this.props.toggleMenu}
          >
            <div>
              {this.props.children}
            </div>
          </AppBar>
          <Drawer
            docked={false}
            open={this.props.openMenu}
            onRequestChange={this.props.toggleMenu}
          >
            <MenuItem onTouchTap={this.props.toggleMenu}>Menu Item</MenuItem>
            <MenuItem onTouchTap={this.props.toggleMenu}>Menu Item 2</MenuItem>
          </Drawer>
        </div>
      </MuiThemeProvider>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleMenu: () => dispatch(toggleMenu()),
    dispatch,
  };
}

export default connect(createSelector(
  selectMenuState(),
  (openMenu) => ({ openMenu })
), mapDispatchToProps)(App);
