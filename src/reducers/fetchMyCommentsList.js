import {
    FETCH_MY_COMMENTS,
    FETCH_MY_COMMENTS_SUCCESS,
    FETCH_MY_COMMENTS_FAILED
} from '../actions/constants';

const initialState = {
    loading: false,
    myCommentsList: [],
    faild: false
}

export const myComments = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_MY_COMMENTS:
            return {
                ...state,
                loading: action.loading
            }

        case FETCH_MY_COMMENTS_SUCCESS:
            return {
                ...state,
                loading: action.loading,
                myCommentsList: action.myCommentsList
            };
        case FETCH_MY_COMMENTS_FAILED:
            return {
                ...state,
                loading: action.loading,
                failed: action.failed
            };


        default:
            return state
    }
}