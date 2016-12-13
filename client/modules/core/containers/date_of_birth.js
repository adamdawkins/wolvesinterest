import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import DateOfBirth from '../components/date_of_birth.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections, LocalState } = context();
  const firstName = LocalState.get('firstName');
  onData(null, {firstName});
};

export const depsMapper = (context, actions) => ({
  setDob: actions.interest.setDob,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(DateOfBirth);
