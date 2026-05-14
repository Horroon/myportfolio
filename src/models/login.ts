export const loginInformation = {
    state: {
            email: '',
            tokenId:''
    },
    reducers: {
        updatelogin: (state: any, payload: any) => ({ ...state, ...payload }),
        removelogin: (state: any, payload: any) => ({ ...state, ...payload })
    }
};
