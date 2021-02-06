import {CommonProperties} from '../constants'
export const aboutMe = {
    state: {
        sidebar: {
            bgClass:CommonProperties.modes.dark
        },
        body:{
            bgClass: CommonProperties.modes.dark
        }
    },
    reducers: {
        updateAboutMe: (state, payload) => ({ ...state, ...payload }),
        resetAboutMe: (state, payload) => ({ ...state, ...payload })
    }
};
