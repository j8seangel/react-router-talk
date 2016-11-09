import { connect } from 'react-redux';
import Map from 'components/team/Map';
import { updateMapURL } from 'actions/map';

function getActiveMembers(team) {
  if (!team.activeMembers.length) return [];
  return team.teamList.filter((member) => team.activeMembers.indexOf(member.alias) > -1);
}

const mapStateToProps = (state) => ({
  map: state.map,
  members: getActiveMembers(state.team)
});

const mapDispatchToProps = (dispatch) => ({
  updateMapURL: (params) => dispatch(updateMapURL(params))
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
