import { combineReducers } from 'redux';
import loginStatus from './login';
import { tasks } from './tasks'


const rootReducer = combineReducers({
    loginStatus,
    tasks
});

export default rootReducer;