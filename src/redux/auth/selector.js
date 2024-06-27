export const userIsLoggedIn = (state) => state.auth.isLoggedIn;
export const userSelector = (state) => state.auth.user;

export const refreshSelector = (state) => state.auth.isRefresh;
