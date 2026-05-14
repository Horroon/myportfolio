import {CommonProperties} from '../constants';

export const mode = {
    state: {
        mode:CommonProperties.modes.dark
    },
    reducers: {
        updatelogin: (state: any, payload: any) => ({ ...state, ...payload }),
        removelogin: (state: any, payload: any) => ({ ...state, ...payload })
    }
};
