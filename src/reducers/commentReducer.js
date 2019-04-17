const initialState = {
    comments: [],
    // loading: false,
    // error: null
};

export const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_COMMENTS': {
            return {
                ...state,
                // loading: false,
                items: action.payload.comments
            }
        }

        default:
            return state;
    }
}