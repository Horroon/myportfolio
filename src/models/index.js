import { init } from '@rematch/core';
import { createLogger } from 'redux-logger';
import { LogRocket } from "logrocket";
import { loginInformation } from './login';
import {SideNav} from './sideNav';

const logger = _ => {
    // if (process.env.NODE_ENV === 'production') {
    //     return LogRocket.reduxMiddleware();
    // }
    return createLogger({ collapsed: (getState, action, logEntry) => !logEntry.error });
};

export const store = init({
    models: {
        loginInformation,
        SideNav
    },
    redux: {
        middlewares: [
            ...(process.env.NODE_ENV == "development" ? [logger()] : []),//benchmarkingMiddleWare
        ],
        rootReducers: { RESET: _ => undefined },
        devtoolOptions: {
            trace: true,
            traceLimit: 25,
        },
    },
});