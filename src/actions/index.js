import {
    LOG_IN,
    LOG_OUT,
    TASKS_FETCH_DATA_SUCCESS
} from './constants';


export const logIn = () => ({
    type: LOG_IN,
})

export const logOut = () => ({
    type: LOG_OUT,
})

export const tasksFetchDataSuccess = (tasks) => ({
    type: TASKS_FETCH_DATA_SUCCESS,
    tasks
})

export const tasksFetchData = (url) => {
    return (dispatch) => {
        fetch(url)
            .then(response => {
                if (!response.ok) { throw new Error(response.statusText) }
                return response;
            })
            .then(response => {
                return response.json()
            })
             .then(tasks => dispatch(tasksFetchDataSuccess(tasks)))

    }
}