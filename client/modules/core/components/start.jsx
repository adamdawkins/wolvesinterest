import React from 'react';
import Page from '../containers/page';

class Start extends React.Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;

    this.props.setName(firstName, lastName);
  }
  render() {
    return (
      <div>
        <Page
          title="What is your name?"
          description="Just so we know what to call you."
          >
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="firstName" placeholder="e.g. Tom" autofocus={true}/>
            <input type="text" name="lastName" placeholder="e.g. Brady" />
            <button type="submit">Next</button>
          </form>
        </Page>
      </div>
    );
  }
}

export default Start;
