export const headerInformation = {
    state: {
            headerclasses: 'normal-header'
    },
    reducers: {
        updateheaderclasses: (state: any, payload: any) => ({ ...state, ...payload }),
        resetheaderclasses: (state: any, payload: any) => ({ ...state, ...payload })
    }
};
