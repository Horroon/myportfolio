export const loginInformation = {
    state: {
            email: '',
            tokenId:''
    },
    reducers: {
        updatelogin: (state, payload) => ({ ...state, ...payload }),
        removelogin: (state, payload) => ({ ...state, ...payload })
    }
};
