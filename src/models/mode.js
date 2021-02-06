import {CommonProperties} from '../constants';

export const mode = {
    state: {
        mode:CommonProperties.modes.dark
    },
    reducers: {
        updatelogin: (state, payload) => ({ ...state, ...payload }),
        removelogin: (state, payload) => ({ ...state, ...payload })
    }
};
