import React from 'react';
import NavLink from 'containers/common/NavLink';

function HomePage() {
  return (
    <div className="row align-middle c-home">
      <div className="column">
        <h1>Welcome to the React Router Redux example</h1>
        <h2><NavLink to="/team" i18nText="goToTheTeam" /></h2>
      </div>
    </div>
  );
}

export default HomePage;
