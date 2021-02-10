export const getSerials = state => {
    return state.serialsReducer.serials
}

export const serialsPageNum = state => {
    return state.serialsReducer.serialsPageNum
}

export const serialsTotalPages = state => {
    return state.serialsReducer.serialsTotalPages
}
