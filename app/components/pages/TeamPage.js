import React from 'react';
import TeamMap from 'containers/team/Map';
import TeamLegend from 'containers/team/MapLegend';

class PeoplePage extends React.Component {
  componentWillMount() {
    if (!this.props.team.length) {
      this.props.getTeamList();
    }
  }

  getContent() {
    return (
      <div className="row collapse">
        <div className="l-map column small-12 medium-6">
          <TeamMap />
        </div>
        <div className="l-legend column small-12 medium-6">
          <TeamLegend />
        </div>
      </div>
    );
  }

  render() {
    return !this.props.team.length
      ? null
      : this.getContent();
  }
}

PeoplePage.propTypes = {
  getTeamList: React.PropTypes.func.isRequired,
  team: React.PropTypes.array
};

export default PeoplePage;
