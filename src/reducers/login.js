import { LOG_IN, LOG_OUT } from '../actions/constants';

const initialState = {
    isLoged: false,
    activePlan: ''
}

const loginStatus = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN:
            return { ...state, isLoged: true }

        case LOG_OUT:
            return { ...state, isLoged: false }

        default:
            return state
    }
}

export default loginStatus;