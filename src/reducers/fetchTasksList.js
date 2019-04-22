import {
    FETCH_TASKS,
    FETCH_TASKS_SUCCESS,
    FETCH_TASKS_FAILED
} from '../actions/constants';

const initialState = {
    loading: false,
    tasksList: [],
    failed: false
}

export const tasks = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_TASKS:
            return {
                ...state,
                loading: action.loading
            }

        case FETCH_TASKS_SUCCESS:
            return {
                ...state,
                loading: action.loading,
                tasksList: action.tasksList
            };
        case FETCH_TASKS_FAILED:
            return {
                ...state,
                loading: action.loading,
                failed: action.failed
            };


        default:
            return state
    }
}