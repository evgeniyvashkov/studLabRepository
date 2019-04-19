import {
    FETCH_TARIFS,
    FETCH_TARIFS_SUCCESS,
    FETCH_TARIFS_FAILD
} from '../actions/constants'

export const fetchtarifPlans = () => ({
    type: FETCH_TARIFS,
    loading: true
})

export const fetchtarifPlansSuccess = (tarifPlansList) => ({
    type: FETCH_TARIFS_SUCCESS,
    loading: false,
    tarifPlansList
})

export const fetchtarifPlansFaild = () => ({
    type: FETCH_TARIFS_FAILD,
    loading: false,
    faild: true
})

export const fetchTarifPlans = (url) => {
    return (dispatch) => {
        dispatch(fetchtarifPlans());

        fetch(url)

            .then(response => {
                if (!response.ok) {
                    dispatch(fetchtarifPlansFaild())
                }
                return response;
            })
            .then(response => {
                return response.json()
            })
            .then(tarifPlans => dispatch(fetchtarifPlansSuccess(tarifPlans)))

            .catch(() => dispatch(fetchtarifPlansFaild()))

    }
}