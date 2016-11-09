import { connect } from 'react-redux';
import MapPage from 'components/pages/MapPage';
import { updateTeamURL } from 'actions/team';
import { updateMapURL } from 'actions/map';

const mapStateToProps = (state) => ({
  map: state.map,
  team: state.team
});

const mapDispatchToProps = (dispatch) => ({
  updateTeamURL: (params) => dispatch(updateTeamURL(params)),
  updateMapURL: (params) => dispatch(updateMapURL(params))
});

export default connect(mapStateToProps, mapDispatchToProps)(MapPage);
