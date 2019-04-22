import {
    FETCH_TARIFFS,
    FETCH_TARIFFS_SUCCESS,
    FETCH_TARIFFS_FAILED
} from '../actions/constants';

const initialState = {
    loading: false,
    tariffPlansList: [],
    failed: false
}

export const tariffPlans = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_TARIFFS:
            return {
                ...state,
                loading: action.loading
            }

        case FETCH_TARIFFS_SUCCESS:
            return {
                ...state,
                loading: action.loading,
                tariffPlansList: action.tariffPlansList
            };
        case FETCH_TARIFFS_FAILED:
            return {
                ...state,
                loading: action.loading,
                failed: action.failed
            };


        default:
            return state
    }
}