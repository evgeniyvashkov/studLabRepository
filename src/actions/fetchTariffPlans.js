import {
    FETCH_TARIFFS,
    FETCH_TARIFFS_SUCCESS,
    FETCH_TARIFFS_FAILED
} from '../actions/constants'

const fetchTariff = () => ({
    type: FETCH_TARIFFS,
    loading: true
})

const fetchTariffSuccess = (tariffPlansList) => ({
    type: FETCH_TARIFFS_SUCCESS,
    loading: false,
    tariffPlansList
})

const fetchTariffFailed = () => ({
    type: FETCH_TARIFFS_FAILED,
    loading: false,
    failed: true
})

export const fetchTariffPlans = (url) => {
    return (dispatch) => {
        dispatch(fetchTariff());

        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    dispatch(fetchTariffFailed())
                }
                return response;
            })
            .then(response => {
                return response.json()
            })
            .then(tariffPlans => dispatch(fetchTariffSuccess(tariffPlans)))

            .catch(() => dispatch(fetchTariffFailed()))

    }
}