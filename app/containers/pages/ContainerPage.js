import { connect } from 'react-redux';
import ContainerPage from 'components/pages/ContainerPage';
import { setLanguage } from 'redux-i18n';

const mapStateToProps = (state, { params }) => ({
  lang: params.lang
});

const mapDispatchToProps = (dispatch) => ({
  setLanguage: lang => dispatch(setLanguage(lang))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContainerPage);
