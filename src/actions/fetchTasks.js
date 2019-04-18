import {
    FETCH_TASKS,
    FETCH_TASKS_SUCCESS,
    FETCH_TASKS_FAILD
} from '../actions/constants'

export const fetchTasks = () => ({
    type: FETCH_TASKS,
    loading: true
})

export const fetchTasksSuccess = (tasksList) => ({
    type: FETCH_TASKS_SUCCESS,
    loading: false,
    tasksList
})

export const fetchTasksFaild = () => ({
    type: FETCH_TASKS_FAILD,
    loading: false,
    faild: false
})

export const tasksFetchData = (url) => {
    return (dispatch) => {
        dispatch(fetchTasks());

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    dispatch(fetchTasksFaild())
                }
                return response;
            })
            .then(response => {
                return response.json()
            })
            .then(tasks => dispatch(fetchTasksSuccess(tasks)))

    }
}