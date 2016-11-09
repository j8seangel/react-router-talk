import React from 'react';

class MapLegend extends React.Component {
  constructor() {
    super();
    this.toggleMember = this.toggleMember.bind(this);
  }

  toggleMember(alias) {
    const index = this.props.activeMembers.indexOf(alias);
    const activeMembers = this.props.activeMembers;
    if (index === -1) {
      activeMembers.push(alias);
    } else {
      activeMembers.splice(index, 1);
    }
    this.props.updateTeamURL(activeMembers);
  }

  render() {
    return (
      <div className="c-team-legend">
        {this.props.team.length > 0 &&
          this.props.team.map((member, index) => (
            <div
              key={index}
              className={`member ${this.props.activeMembers.indexOf(member.alias) > -1 ? '-active' : ''}`}
              onClick={() => this.toggleMember(member.alias)}
              style={{ backgroundImage: `url(${member.picture_url})` }}
            />
          ))
        }
      </div>
    );
  }
}

MapLegend.propTypes = {
  team: React.PropTypes.array,
  activeMembers: React.PropTypes.array,
  updateTeamURL: React.PropTypes.func.isRequired
};

export default MapLegend;
