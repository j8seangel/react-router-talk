import React from 'react';
import NavLink from 'containers/common/NavLink';

function HomePage(props, context) {
  return (
    <div className="row align-middle c-home">
      <div className="column">
        <h1>{context.t('welcomeTo')}</h1>
        <h2><NavLink to="/team" i18nText="goToTheTeam" /></h2>
      </div>
    </div>
  );
}

// Example of getting something from the context
// In this case the global function to translate
HomePage.contextTypes = {
  t: React.PropTypes.func.isRequired
};

export default HomePage;
