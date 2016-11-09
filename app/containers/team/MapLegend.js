import { connect } from 'react-redux';
import MapLegend from 'components/team/MapLegend';
import { updateTeamURL } from 'actions/team';

const mapStateToProps = (state) => ({
  team: state.team.teamList,
  activeMembers: state.team.activeMembers
});

const mapDispatchToProps = (dispatch) => ({
  updateTeamURL: (params) => dispatch(updateTeamURL(params))
});

export default connect(mapStateToProps, mapDispatchToProps)(MapLegend);
