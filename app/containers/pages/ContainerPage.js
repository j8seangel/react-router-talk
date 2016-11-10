import { connect } from 'react-redux';
import ContainerPage from 'components/pages/ContainerPage';

const mapStateToProps = (state, { params }) => ({
  lang: params.lang
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ContainerPage);
