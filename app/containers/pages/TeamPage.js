import { connect } from 'react-redux';
import TeamPage from 'components/pages/TeamPage';
import { getTeamList } from 'actions/team';

const mapStateToProps = (state) => ({
  team: state.team.teamList
});

const mapDispatchToProps = (dispatch) => ({
  getTeamList: () => dispatch(getTeamList())
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamPage);
