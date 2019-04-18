import {
    FETCH_NEW_COMMENTS,
    FETCH_NEW_COMMENTS_SUCCESS,
    FETCH_NEW_COMMENTS_FAILD
} from '../actions/constants'

export const fetchNewComments = () => ({
    type: FETCH_NEW_COMMENTS,
    loading: true
})

export const fetchNewCommentsSuccess = (newCommentsList) => ({
    type: FETCH_NEW_COMMENTS_SUCCESS,
    loading: false,
    newCommentsList
})

export const fetchNewCommentsFaild = () => ({
    type: FETCH_NEW_COMMENTS_FAILD,
    loading: false,
    faild: false
})

export const newCommentsFetchData = (url) => {
    return (dispatch) => {
        dispatch(fetchNewComments());

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    dispatch(fetchNewCommentsFaild())
                }
                return response;
            })
            .then(response => {
                return response.json()
            })
            .then(newComments => dispatch(fetchNewCommentsSuccess(newComments)))

    }
}