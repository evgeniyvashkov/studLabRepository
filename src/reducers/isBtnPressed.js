import { BUTTON_PRESSED } from '../actions/constants'

const initialState = { 
    isBtnPressed: false 
}

const btnStatus = (state = initialState, action) => {
    switch (action.type) {
        case BUTTON_PRESSED:
            return ({ ...state, isBtnPressed: !state.isBtnPressed })
        default:
            return state;
    }
}

export default btnStatus