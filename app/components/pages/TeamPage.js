import React from 'react';
import NavLink from 'containers/common/NavLink';

class PeoplePage extends React.Component {
  componentWillMount() {
    if (!this.props.team.length) {
      this.props.getTeamList();
    }
  }
  render() {
    return (
      <div className="row">
        <div className="column">
          <h2>{this.context.t('team')}</h2>

          {this.props.team.length > 0 &&
            this.props.team.map((item, index) => (
              <li key={index}>
                <NavLink to={`/map?team=${item.alias}`} text={item.name} />
              </li>
            ))
          }
        </div>
      </div>
    );
  }
}

PeoplePage.contextTypes = {
  t: React.PropTypes.func.isRequired
};

PeoplePage.propTypes = {
  getTeamList: React.PropTypes.func.isRequired,
  team: React.PropTypes.array
};

export default PeoplePage;
