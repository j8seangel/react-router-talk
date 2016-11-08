import { connect } from 'react-redux';
import HomePage from 'components/pages/HomePage';

const mapStateToProps = (state) => ({
  lang: state.i18nState.lang
});

const mapDispatchToProps = () => ({});


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
