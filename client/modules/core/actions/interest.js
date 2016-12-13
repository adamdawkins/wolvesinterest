export default {
  setName({ Meteor, FlowRouter, LocalState }, firstName, lastName) {
    LocalState.set('firstName', firstName);
    LocalState.set('lastName', lastName);

    FlowRouter.go('/date-of-birth');
  },
  setDob({ Meteor, FlowRouter, LocalState }, dobString) {
    const dob = new Date(dobString);
    LocalState.set('dob', dob);
    let availableTeams = [];
    const upperAge = new Date('1999-12-31');
    const youthLowerLimit = new Date('2002-12-31');
    const cadetLowerLimit = new Date('2008-12-31');
    // if a date is smaller, it happened 'before', i.e. older < newer
    if (dob < upperAge) {
      console.log(`${dob} < ${upperAge}: too old`);
      LocalState.set('tooOld', true);
    } else if (dob < youthLowerLimit) {
      console.log(`${dob} < ${youthLowerLimit}: can play youth`);
      availableTeams.push('youth-flag');
      availableTeams.push('youth-contact');
    } else if (dob < cadetLowerLimit) {
      console.log(`${dob} < ${cadetLowerLimit}: can play cadet`);
      availableTeams.push('cadet-flag');
    } else {
      LocalState.set('tooYoung', true);
      console.log(`${dob} is really low: too young`);
    }
    
    LocalState.set('availableTeams', availableTeams);
    FlowRouter.go('/select-team');
  },
};
