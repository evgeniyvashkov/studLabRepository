import { connect } from 'react-redux';

import { LoginForm } from '../components/LoginForm';
import { logIn } from '../actions'

const mapStateToProps = (state) => ({
    isLogged: state.loginStatus.isLogged
})

const mapDispatchToProps = (dispatch) => ({
    logIn: () => dispatch(logIn())
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);