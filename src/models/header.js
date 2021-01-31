export const headerInformation = {
    state: {
            headerclasses: 'normal-header'
    },
    reducers: {
        updateheaderclasses: (state, payload) => ({ ...state, ...payload }),
        resetheaderclasses: (state, payload) => ({ ...state, ...payload })
    }
};
