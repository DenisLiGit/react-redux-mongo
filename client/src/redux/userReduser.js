import {ApiData} from "../api/Api";

const USER_LOG_IN = 'USER-LOG-IN'
const USER_LOGOUT = 'USER-LOGOUT'
const USER_ACTION = 'USER-ACTION'
const USER_LOADING = 'USER-LOADING'
const USER_MESSAGE = 'USER-MESSAGE'

const initialState = {
    userInfo: {
        userRegister: false,
        token: null,
        userId: null,
        isAuthenticated: false,
        loading: false,
        userMessage: null
    }
}

const userReduser = (store = initialState, action) => {
    switch (action.type) {
        case USER_ACTION:
            return {
                ...store,
                userRegister: action.value,
            }
        case USER_LOG_IN:
            return {
                ...store,
                userInfo: {
                    ...store.userInfo,
                    token: action.value.token,
                    userId: action.value.userid,
                    isAuthenticated: !!action.value.token
                },

            }
        case USER_LOGOUT:
            // localStorage.removeItem(api.storageName)
            return {
                ...store,
                userInfo: {
                    ...store.userInfo,
                    token: null,
                    userid: null,
                    isAuthenticated: false
                },
            }
        case USER_LOADING:
            return {
                ...store,
                userInfo: {...store.userInfo, loading: action.value}
            }
        case USER_MESSAGE:
            return {
                ...store,
                userMessage: action.value
            }
        default:
            return store
    }
}

export const userMessageAC = (value) => ({
    type: USER_MESSAGE, value
})

export const userRegisterAC = (value) => ({
    type: USER_ACTION, value
})

export const userLogIn = (value) => ({
    type: USER_LOG_IN, value
})

export const logUserOut = () => ({
    type: USER_LOGOUT
})

export const userloading = (value) => ({
    type: USER_LOADING, value
})

export const loginUserThunk = (useInfo) => (dispatch) => {
    dispatch(userloading(true))
    ApiData.loginUserAction(useInfo).then(data => {
        dispatch(userLogIn(data))
        dispatch(userloading(false))
       if (data.data){
           dispatch(userMessageAC(data.data.message))
       }
    })
}

export const registerUserThunk = (userInfo) => (dispatch) => {
    ApiData.registerUserAction(userInfo).then(data => {
        dispatch(userMessageAC(data.data.message))
        if (data.status === 201) loginUserThunk(userInfo)(dispatch)
    })
}

export default userReduser