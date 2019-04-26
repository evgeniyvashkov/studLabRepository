import { combineReducers } from 'redux';
import loginStatus from './login';
import { tariffPlans } from './fetchTarifPlansList';
import { tasks } from './fetchTasksList';
import { newComments } from './fetchNewCommentsList';
import { myComments } from './fetchMyCommentsList';
import { taskCommentsList } from './fetchTaskCommentsList';


const rootReducer = combineReducers({
    loginStatus,
    tasks,
    newComments,
    myComments,
    tariffPlans,
    taskCommentsList
});

export default rootReducer;