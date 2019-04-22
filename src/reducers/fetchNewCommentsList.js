import {
    FETCH_NEW_COMMENTS,
    FETCH_NEW_COMMENTS_SUCCESS,
    FETCH_NEW_COMMENTS_FAILED
} from '../actions/constants';

const initialState = {
    loading: false,
    newCommentsList: [],
    failed: false
}

export const newComments = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_NEW_COMMENTS:
            return {
                ...state,
                loading: action.loading
            }

        case FETCH_NEW_COMMENTS_SUCCESS:
            return {
                ...state,
                loading: action.loading,
                newCommentsList: action.newCommentsList
            };
        case FETCH_NEW_COMMENTS_FAILED:
            return {
                ...state,
                loading: action.loading,
                failed: action.failed
            };


        default:
            return state
    }
}