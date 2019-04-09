import { connect } from 'react-redux';

import { App } from '../components/App';
import { isBtnPressed, logIn, logOut } from '../actions'

const mapStateToProps = (state) => ({
    isBtnPressed: state.btnStatus.isBtnPressed,
    isLoged: state.loginStatus.isLoged
})

const mapDispatchToProps = (dispatch) => ({
    changeText: () => dispatch(isBtnPressed()),
    logIn: () => dispatch(logIn()),
    logOut: () => dispatch(logOut()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
