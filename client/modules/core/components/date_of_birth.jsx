import React from 'react';
import Page from '../containers/page';

class DateOfBirth extends React.Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const dob = form.dob.value;

    this.props.setDob(dob);
  }
  render() {
    const { firstName } = this.props;
    return (
      <div>
        <Page
          title={`Hi ${firstName}, what's your date of birth?`}
          description="Our different teams have different age ranges and cut-off points"
          >
          <form onSubmit={this.handleSubmit}>
            <input type="date" name="dob" />
            <button type="submit">Next</button>
          </form>
        </Page>
      </div>
    );
  }
}

export default DateOfBirth;
