import { connect } from 'react-redux';
import PeoplePage from 'components/pages/PeoplePage';
import { getPeopleList } from 'actions/people';

const mapStateToProps = (state) => ({
  people: state.people.peopleList
});

const mapDispatchToProps = (dispatch) => ({
  getPeopleList: () => dispatch(getPeopleList())
});

export default connect(mapStateToProps, mapDispatchToProps)(PeoplePage);
