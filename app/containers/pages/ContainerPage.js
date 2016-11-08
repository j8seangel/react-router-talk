import { connect } from 'react-redux';
import ContainerPage from 'components/pages/ContainerPage';
import { updateLang } from 'actions/locales';

const mapStateToProps = (state, { params }) => ({
  lang: params.lang
});

const mapDispatchToProps = (dispatch) => ({
  updateLang: lang => dispatch(updateLang(lang))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContainerPage);
