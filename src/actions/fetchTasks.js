import {
    FETCH_TASKS,
    FETCH_TASKS_SUCCESS,
    FETCH_TASKS_FAILED
} from '../actions/constants'

const fetchTasks = () => ({
    type: FETCH_TASKS,
    loading: true
})

const fetchTasksSuccess = (tasksList) => ({
    type: FETCH_TASKS_SUCCESS,
    loading: false,
    tasksList
})

const fetchTasksFailed = () => ({
    type: FETCH_TASKS_FAILED,
    loading: false,
    faild: false
})

export const tasksFetchData = (url) => dispatch => {
    dispatch(fetchTasks());

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                dispatch(fetchTasksFailed())
            }
            return response;
        })
        .then(response => {
            return response.json()
        })
        .then(tasks => dispatch(fetchTasksSuccess(tasks)))

        .catch(() => dispatch(fetchTasksFailed()))
}