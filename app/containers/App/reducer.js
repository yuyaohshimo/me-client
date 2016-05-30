/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import {
  TOGGLE_MENU,
} from './constants';
import { fromJS } from 'immutable';

const initialState = fromJS({
  openMenu: false,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MENU:
      return state
        .set('openMenu', !state.get('openMenu'));
    default:
      return state;
  }
}

export default homeReducer;
