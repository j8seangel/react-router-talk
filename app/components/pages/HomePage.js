import React from 'react';
import { Link } from 'react-router';

function HomePage(props, context) {
  return (
    <div className="row">
      <div className="column">
        <p>Hi !</p>
        <Link to={`/${props.lang}/team`}>{context.t('seeTeam')}</Link>
      </div>
    </div>
  );
}

HomePage.contextTypes = {
  t: React.PropTypes.func.isRequired
};

HomePage.propTypes = {
  lang: React.PropTypes.string.isRequired
};

export default HomePage;
