import { connect } from 'react-redux';

import { App } from '../components/App';
import { logIn, logOut } from '../actions'

const mapStateToProps = (state) => ({
    isLogged: state.loginStatus.isLogged
})

const mapDispatchToProps = (dispatch) => ({
    logIn: () => dispatch(logIn()),
    logOut: () => dispatch(logOut()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
