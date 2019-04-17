import { TASKS_FETCH_DATA_SUCCESS } from '../actions/constants'

export const tasks = (state = [], action) => {
    switch (action.type) {
        case TASKS_FETCH_DATA_SUCCESS:
            return [...state, ...action.tasks]
        default:
            return state
    }
}