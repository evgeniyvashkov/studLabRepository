import {
    FETCH_NEW_COMMENTS,
    FETCH_NEW_COMMENTS_SUCCESS,
    FETCH_NEW_COMMENTS_FAILED
} from '../actions/constants'

const fetchNewComments = () => ({
    type: FETCH_NEW_COMMENTS,
    loading: true
})

const fetchNewCommentsSuccess = (newCommentsList) => ({
    type: FETCH_NEW_COMMENTS_SUCCESS,
    loading: false,
    newCommentsList
})

const fetchNewCommentsFailed = () => ({
    type: FETCH_NEW_COMMENTS_FAILED,
    loading: false,
    failed: true
})

export const newCommentsFetchData = (url) => {
    return (dispatch) => {
        dispatch(fetchNewComments());

        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    dispatch(fetchNewCommentsFailed())
                }
                return response;
            })
            .then(response => {
                return response.json()
            })
            .then(newComments => dispatch(fetchNewCommentsSuccess(newComments)))

            .catch(() => dispatch(fetchNewCommentsFailed()))

    }
}