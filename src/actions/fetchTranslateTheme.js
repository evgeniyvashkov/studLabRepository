import {
    FETCH_TRANSLATE_THEME_LIST,
    FETCH_TRANSLATE_THEME_LIST_SUCCESS,
    FETCH_TRANSLATE_THEME_LIST_FAILED,
} from './constants';

const fetchTransleteThemes = () => ({
    type: FETCH_TRANSLATE_THEME_LIST,
    loading: true
})

const fetchTransleteThemesSuccess = (themeList) => ({
    type: FETCH_TRANSLATE_THEME_LIST_SUCCESS,
    loading: false,
    themeList
})

const fetchTransleteThemesFailed = () => ({
    type: FETCH_TRANSLATE_THEME_LIST_FAILED,
    loading: false,
    faild: false
})

export const tasksFetchData = (url) => dispatch => {
    dispatch(fetchTransleteThemes());

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                dispatch(fetchTransleteThemesFailed())
            }
            return response;
        })
        .then(response => {
            return response.json()
        })
        .then(tasks => dispatch(fetchTransleteThemesSuccess(tasks)))

        .catch(() => dispatch(fetchTransleteThemesFailed()))
}