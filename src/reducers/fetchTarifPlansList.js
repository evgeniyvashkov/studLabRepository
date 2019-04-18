import {
    FETCH_TARIFS,
    FETCH_TARIFS_SUCCESS,
    FETCH_TARIFS_FAILD
} from '../actions/constants';

const initialState = {
    loading: false,
    tarifPlansList: [],
    faild: false
}

export const tarifPlans = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_TARIFS:
            return {
                ...state,
                loading: action.loading
            }

        case FETCH_TARIFS_SUCCESS:
            return {
                ...state,
                loading: action.loading,
                tarifPlansList: action.tarifPlansList
            };
        case FETCH_TARIFS_FAILD:
            return {
                ...state,
                loading: action.loading,
                faild: action.faild
            };


        default:
            return state
    }
}