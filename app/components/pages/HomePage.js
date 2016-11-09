import React from 'react';
import NavLink from 'containers/common/NavLink';

function HomePage() {
  return (
    <div className="row">
      <div className="column">
        <p>Hi !</p>
        <NavLink to="/team" i18nText="seeTeam" />
      </div>
    </div>
  );
}

export default HomePage;
