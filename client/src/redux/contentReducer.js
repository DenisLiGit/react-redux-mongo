const LOADER = "LOADER"

const initialState = {
    loader: false
}

const contentReducer = (store = initialState, action) => {
    switch (action.type) {
        case LOADER:
            return {
                ...store,
                loader: action.value
            }
        default: return store
    }
}

export const loaderAC = (value) => ({
    type: LOADER, value
})

export default  contentReducer