export const SideNav = {
    state: {
        isOpen: false,
        component:{path:'/'}
    },
    reducers: {
        open: (state, payload) => ({ ...state, ...payload }),
        close: (state) => ({ ...state, isOpen: false })
    }
};
