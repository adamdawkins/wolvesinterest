import React from 'react';

class SelectTeam extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { availableTeams, tooOld, tooYoung } = this.props;
    if (tooOld) {
      return (
        <div>
          <p>Sorry, you're too old for our current teams. Would you like to help coach with us?</p>
        </div>
      );
    } else if (tooYoung) {
      return (
        <div>
          <p>Sorry, you're too young play for us yet, but please stay in touch, you'll be allowed to play soon!</p>
        </div>
      );
    } else {
    return (
      <div>
        SelectTeam
        <ul>
        {availableTeams.map((team) => (
          <li key={team}>{team}</li>
        ))}
        </ul>
      </div>
    );
    }
  }
}

export default SelectTeam;
