import { LOG_IN, LOG_OUT } from '../actions/constants';

const initialState = {
    isLogged: false,
    userInfo: {
        "userName": "Eugene Vashov",
        "avatarLink": ""
    }
}

const loginStatus = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN:
            return {
                ...state,
                isLogged: true,
            };

        case LOG_OUT:
            return {
                ...state,
                isLogged: false
            };

        default:
            return state
    }
}

export default loginStatus;