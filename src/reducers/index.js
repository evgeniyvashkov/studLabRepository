import { combineReducers } from 'redux';
import loginStatus from './login';


const rootReducer = combineReducers({
    loginStatus
});

export default rootReducer;