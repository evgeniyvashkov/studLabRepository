import { combineReducers } from 'redux';
import loginStatus from './login';
import { tarifPlans } from './fetchTarifPlansList';
import { tasks } from './fetchTasksList';
import { newComments } from './fetchNewCommentsList';
import { myComments } from './fetchMyCommentsList';


const rootReducer = combineReducers({
    loginStatus,
    tasks,
    newComments,
    myComments,
    tarifPlans
});

export default rootReducer;