import { init } from '@rematch/core';
import { createLogger } from 'redux-logger';
import { LogRocket } from "logrocket";
import { Mixpanel } from '../constants/index';
import { loginInformation } from './login';

const logger = _ => {
    if (process.env.NODE_ENV === 'production') {
        return LogRocket.reduxMiddleware();
    }
    return createLogger({ collapsed: (getState, action, logEntry) => !logEntry.error });
};

const mixpanelMiddleWare = _ => next => action => {
    const { Actions } = Mixpanel;

    const { type, payload = {}, meta } = action;
    const mixpanelActionMap = {
        [Actions.LOGIN_FETCH_START]: _ => loginInformation.updatelogin({email:"asdfjasd", token:"ajkdhfku34872938jksdhf893457"}),
    };
    /* 
    [Actions.FORM_GROUP_SELECT_CHANGE]: _ => mix.formGroupChange(payload),
    [Actions.MODAL_OPEN]: _ => mix.modalOpen(payload),
    [Actions.MIXPANEL_ADD_META_DATA]: _ => mix.mixpanelEvent(payload),
    [Actions.SHOP_LAUNCHED]: _ => mix.shopLaunched(),
    [Actions.START_SHOP_CHECKOUT]: _ => mix.startShopCheckout(payload),
    [Actions.RADIO_SELECTED]: _ => mix.radioSelected(payload, meta),
    [Actions.PREPAYMENT_STARTED]: _ => mix.prepaymentStarted(),
    [Actions.CHECKIN_QR_TOGGLED]: _ => mix.checkinQrToggled(payload),
    [Actions.FORM_SUBMITTED]: _ => mix.formSubmitted(), */
    const mixpanelAction = mixpanelActionMap[type];
    if (mixpanelAction) mixpanelAction();
    next(action);
};
/* const localStore = init({
    models: { benchmarkResults },
    redux: { middlewares: [logger()] },
}); */

export const store = init({
    models: {
        loginInformation
    },
    redux: {
        middlewares: [
            logger(),
            mixpanelMiddleWare,
            ...(process.env.NODE_ENV === "DEVELOPMENT" ? [] : []),//benchmarkingMiddleWare
        ],
        rootReducers: { RESET: _ => undefined },
        devtoolOptions: {
            trace: true,
            traceLimit: 25,
        },
    },
});