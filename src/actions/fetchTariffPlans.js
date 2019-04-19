import {
    FETCH_TARIFFS,
    FETCH_TARIFFS_SUCCESS,
    FETCH_TARIFFS_FAILED
} from '../actions/constants'

export const fetchTariff = () => ({
    type: FETCH_TARIFFS,
    loading: true
})

export const fetchTariffSuccess = (tariffPlansList) => ({
    type: FETCH_TARIFFS_SUCCESS,
    loading: false,
    tariffPlansList
})

export const fetchTariffFailed = () => ({
    type: FETCH_TARIFFS_FAILED,
    loading: false,
    failed: true
})

export const fetchTariffPlans = (url) => {
    return (dispatch) => {
        dispatch(fetchTariff());

        fetch(url)

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