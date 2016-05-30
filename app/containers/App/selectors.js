import { createSelector } from 'reselect';

const selectGlobal = () => (state) => state.get('global');

const selectMenuState = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('openMenu')
);

// selectLocationState expects a plain JS object for the routing state
const selectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

export {
  selectMenuState,
  selectLocationState,
};
