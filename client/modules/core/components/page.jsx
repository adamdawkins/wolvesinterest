import React from 'react';

class Page extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {title, description, children} = this.props;
    return (
      <div className="page">
        <h1 className="page__title">{title}</h1>
        {!description ? null : (
          <p className="page__description">{description}</p>
        )}
        <div className="page__body">
          {children}
        </div>
      </div>
    );
  }
}

export default Page;
