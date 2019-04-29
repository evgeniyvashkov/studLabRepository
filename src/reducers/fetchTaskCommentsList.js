import {
    FETCH_TASK_COMMENTS_LIST,
    FETCH_TASK_COMMENTS_LIST_FAILED,
    FETCH_TASK_COMMENTS_LIST_SUCCESS,
} from '../actions/constants';

const initialState = {
    loading: false,
    taskCommentsList: [],
    failed: false
}

export const taskCommentsList = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TASK_COMMENTS_LIST:
            return {
                ...state,
                loading: action.loading
            }

        case FETCH_TASK_COMMENTS_LIST_SUCCESS:
            return {
                ...state,
                taskCommentsList: action.taskCommentsList,
                loading: action.loading,
            }

        default: {
            return state;
        }
    }
}