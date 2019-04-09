import {
    BUTTON_PRESSED,
    LOG_IN,
    LOG_OUT
} from './constants';

export const isBtnPressed = () => ({
    type: BUTTON_PRESSED
});

export const logIn = () => ({
    type: LOG_IN,
})

export const logOut = () => ({
    type: LOG_OUT,
})