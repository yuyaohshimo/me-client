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

// material ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

/* eslint-disable react/prefer-stateless-function */
export default class App extends React.Component {

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}
