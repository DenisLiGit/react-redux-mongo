
export const loader = state => {
    return state.contentReducer.loader
}

export const isAuthenticated = state => {
    return state.userReduser.userInfo.isAuthenticated
}
