import {ApiData} from "../api/Api";

const USER_LOGIN = 'USER-LOGIN'
const USER_LOGOUT = 'USER-LOGOUT'
const USER_EMAIL = 'USER-EMAIL'
const USER_PASSWORD = 'USER-PASSWORD'
const USER_LOADING = 'USER-LOADING'

const initialState = {
    userInfo: {
        email: '',
        password: '',
        token: null,
        userid: null,
        isAuthenticated: false,
        loading: false
    }
}

const userReduser = (store = initialState, action) => {
    switch (action.type) {
        case USER_EMAIL:
            return {
                ...store,
                userInfo: {...store.userInfo, email: action.value},
            }
        case USER_PASSWORD:
            return {
                ...store,
                userInfo: {...store.userInfo, password: action.value},
            }
        case USER_LOGIN:
            return {
                ...store,
                userInfo: {
                    ...store.userInfo,
                    token: action.value.token,
                    userid: action.value.userid,
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
        default:
            return store
    }
}

export const userEmail = (value) => ({
    type: USER_EMAIL, value
})

export const userPassword = (value) => ({
    type: USER_PASSWORD, value
})

export const logUserIn = (value) => ({
    type: USER_LOGIN, value
})

export const logUserOut = () => ({
    type: USER_LOGOUT
})

export const userloading = (value) => ({
    type: USER_LOADING, value
})

export const loginUserThunk = (useInfo) => (dispatch) => {
    console.log(1)
    dispatch(userloading(true))
    ApiData.loginUserAction(useInfo).then(data => {
        console.log(data)
        dispatch(logUserIn(data))
        dispatch(userloading(false))
    })
}

export const registerUserThunk = (userInfo) => (dispatch) => {
    ApiData.registerUserAction(userInfo)
}

export default userReduser