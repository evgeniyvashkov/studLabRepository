import {
    FETCH_TASK_COMMENTS_LIST,
    FETCH_TASK_COMMENTS_LIST_FAILED,
    FETCH_TASK_COMMENTS_LIST_SUCCESS,
} from '../actions/constants';

const fetchTaskCommentsList = () => ({
    type: FETCH_TASK_COMMENTS_LIST,
    loading: false
})

const fetchTaskCommentsListSuccess = (taskCommentsList) => ({
    type: FETCH_TASK_COMMENTS_LIST_SUCCESS,
    loading: true,
    taskCommentsList
})

const fetchTaskCommentsListFailed = () => ({
    type: FETCH_TASK_COMMENTS_LIST_FAILED,
    loading: false,
    failed: true
})

export const fetchTaskComments = (url) => dispatch => {
    dispatch(fetchTaskCommentsList());

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                dispatch(fetchTaskCommentsListFailed());
            }

            return response;
        })
        .then(response => response.json())
        .then(taskCommentsList => dispatch(fetchTaskCommentsListSuccess(taskCommentsList)))
        .catch(() => dispatch(fetchTaskCommentsListFailed()))
}