import {
    FETCH_MY_COMMENTS,
    FETCH_MY_COMMENTS_SUCCESS,
    FETCH_MY_COMMENTS_FAILD
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

export const fetchMyCommentsFaild = () => ({
    type: FETCH_MY_COMMENTS_FAILD,
    loading: false,
    faild: false
})

export const myCommentsFetchData = (url) => {
    return (dispatch) => {
        dispatch(fetchMyComments());

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    dispatch(fetchMyCommentsFaild())
                }
                return response;
            })
            .then(response => {
                return response.json()
            })
            .then(myComments => dispatch(fetchMyCommentsSuccess(myComments)))

    }
}