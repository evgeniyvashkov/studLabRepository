import { combineReducers } from 'redux';
import btnStatus from './isBtnPressed';
import loginStatus from './login';


const rootReducer = combineReducers({
    btnStatus,
    loginStatus
});

export default rootReducer;