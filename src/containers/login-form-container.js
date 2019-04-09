import { connect } from 'react-redux';

import { LoginForm } from '../components/LoginForm';
import { logIn } from '../actions'

const mapStateToProps = (state) => ({
    isLoged: state.loginStatus.isLoged
})

const mapDispatchToProps = (dispatch) => ({
    logIn: () => dispatch(logIn())
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);