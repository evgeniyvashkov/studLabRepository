import {
    FETCH_MY_COMMENTS,
    FETCH_MY_COMMENTS_SUCCESS,
    FETCH_MY_COMMENTS_FAILED
} from '../actions/constants'

export const fetchMyComments = () => ({
    type: FETCH_MY_COMMENTS,
    loading: true
})

export const fetchMyCommentsSuccess = (myCommentsList) => ({
    type: FETCH_MY_COMMENTS_SUCCESS,
    loading: false,
    myCommentsList
})

export const fetchMyCommentsFailed = () => ({
    type: FETCH_MY_COMMENTS_FAILED,
    loading: false,
    failed: true
})

export const myCommentsFetchData = (url) => {
    return (dispatch) => {
        dispatch(fetchMyComments());
        
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    dispatch(fetchMyCommentsFailed())
                }
                return response;
            })
            .then(response => {
                return response.json()
            })
            .then(myComments => dispatch(fetchMyCommentsSuccess(myComments)))

            .catch(() => dispatch(fetchMyCommentsFailed()))
    }
}