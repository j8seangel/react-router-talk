import React from 'react';
import I18n from 'redux-i18n';
import Header from 'containers/common/Header';

import { translations } from 'locales/translations';

class ContainerPage extends React.Component {

  // Example of how to save "things" in the context
  getChildContext() {
    const location = this.props.location;
    location.params = this.props.params;
    return { location };
  }

  render() {
    return (
      <I18n translations={translations}>
        <div>
          <Header />
          <div className="l-main">
            {this.props.children}
          </div>
        </div>
      </I18n>
    );
  }
}

// Example of using context
ContainerPage.childContextTypes = {
  location: React.PropTypes.object
};

ContainerPage.propTypes = {
  /* Define required content for page */
  children: React.PropTypes.element.isRequired,
  /* Finds the router params */
  params: React.PropTypes.object,
  /* Finds the route of current location in URL */
  location: React.PropTypes.object
};

export default ContainerPage;
