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
        updateAboutMe: (state: any, payload: any) => ({ ...state, ...payload }),
        resetAboutMe: (state: any, payload: any) => ({ ...state, ...payload })
    }
};
