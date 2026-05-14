export const SideNav = {
    state: {
        isOpen: false,
        component:{path:'/'}
    },
    reducers: {
        open: (state: any, payload: any) => ({ ...state, ...payload }),
        close: (state: any) => ({ ...state, isOpen: false })
    }
};
