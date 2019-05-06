import {
    FETCH_TRANSLATE_THEME_LIST,
    FETCH_TRANSLATE_THEME_LIST_SUCCESS,
    FETCH_TRANSLATE_THEME_LIST_FAILED,
} from './constants';

const initialState = {
    loading: false,
    themeList: [],
    failed: false
}

export const translateThemeList = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TRANSLATE_THEME_LIST:
            return {
                ...state,
                loading: action.loading
            }


        case FETCH_TRANSLATE_THEME_LIST_SUCCESS:
            return {
                ...state,
                themeList: action.themeList,
                loading: action.loading
            }

        case FETCH_TRANSLATE_THEME_LIST_FAILED:
            return {
                ...state,
                loading: action.loading,
                failed: action.failed
            }

        default:
            return state;
    }
}