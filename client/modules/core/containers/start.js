import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Start from '../components/start.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  setName: actions.interest.setName,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Start);
