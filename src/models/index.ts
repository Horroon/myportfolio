import { init } from '@rematch/core';
import { createLogger } from 'redux-logger';
import { loginInformation } from './login';
import {SideNav} from './sideNav';
import {headerInformation} from './header';
import {aboutMe} from './about';
import {mode} from './mode';

const logger = createLogger({ collapsed: (getState: any, action: any, logEntry: any) => !logEntry.error });

export const store: any = init({
    models: {
        loginInformation,
        SideNav,
        headerInformation,
        aboutMe,
        mode
    },
    redux: {
        middlewares: [
            ...(process.env.NODE_ENV == "development" ? [logger] : []),//benchmarkingMiddleWare
        ],
        rootReducers: { RESET: (_: any) => undefined },
        devtoolOptions: {
            trace: true,
            traceLimit: 25,
        },
    },
});
