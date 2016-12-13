import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import SelectTeam from '../components/select_team.jsx';

export const composer = ({context}, onData) => {
  const { LocalState } = context();
  const dob = LocalState.get('dob');
  const tooOld = LocalState.get('tooOld');
  const tooYoung = LocalState.get('tooYoung');
  const availableTeams = LocalState.get('availableTeams');
  console.log('dob', dob);
  onData(null, {
    dob,
    tooOld,
    tooYoung,
    availableTeams,
  });
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(SelectTeam);
