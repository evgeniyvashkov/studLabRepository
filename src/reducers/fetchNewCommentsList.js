import {
    FETCH_NEW_COMMENTS,
    FETCH_NEW_COMMENTS_SUCCESS,
    FETCH_NEW_COMMENTS_FAILD
} from '../actions/constants';

const initialState = {
    loading: false,
    newCommentsList: [],
    faild: false
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
        case FETCH_NEW_COMMENTS_FAILD:
            return {
                ...state,
                loading: action.loading,
                faild: action.faild
            };


        default:
            return state
    }
}