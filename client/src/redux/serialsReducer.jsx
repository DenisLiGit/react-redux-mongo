const SET_SERIAL_DATA = "SET-SERIAL-DATA"
const SET_SERIAL_PAGE = "SET-SERIAL-PAGE"
const SET_SERIAL_TOTAL_PAGE = "SET-SERIAL-TOTAL-PAGE"
const startPage = 1

const initialState = {
    serials: [ ],
    serialsPageNum: startPage,
    serialsTotalPages: startPage,
}

const serialsReducer = (store = initialState, action) => {
    switch (action.type) {
        case SET_SERIAL_DATA:
            return {
                ...store,
                serials: [
                    ...action.value.map((item) => {
                        return {
                            title: {
                                name: 'Название',
                                content: item.title
                            },
                            genre: {
                                name: 'Жанр',
                                content: item.genre
                            },
                            link: {
                                name: 'Ссылка',
                                content: item.link
                            },
                            id: item._id
                        }
                    })
                ]
            }
        case SET_SERIAL_PAGE:
            return {
                ...store,
                serialsPageNum: action.value
            }
        case SET_SERIAL_TOTAL_PAGE:
            return {
                ...store,
                serialsTotalPages: action.value
            }
        default: return store
    }
}

export const setSerialDataAC = (value) => ({
    type: SET_SERIAL_DATA, value
})

export const serialsPageAC = (value) => ({
    type: SET_SERIAL_PAGE, value
})

export const serialsTotalPagesAC = (value) => ({
    type: SET_SERIAL_TOTAL_PAGE, value
})

export default  serialsReducer