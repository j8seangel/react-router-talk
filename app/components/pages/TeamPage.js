import React from 'react';

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
                <p>{item.name}</p>
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
