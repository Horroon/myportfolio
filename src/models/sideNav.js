export const SideNav = {
    state: {
        isOpen: false
    },
    reducers: {
        open: (state, payload) => ({ ...state, ...{isOpen: payload} }),
        close: (state) => ({ ...state, isOpen: false })
    }
};
