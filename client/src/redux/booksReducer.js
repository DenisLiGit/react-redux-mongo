import {ApiData} from "../api/Api";
import {loaderAC} from "./contentReducer";

const SET_BOOK_DATA = "SET-BOOK-DATA"
const SET_BOOK_PAGE = "SET-BOOK-PAGE"
const SET_BOOK_TOTAL_PAGE = "SET-BOOK-TOTAL-PAGE"
const startPage = 1

const initialState = {
    books: [ ],
    booksPageNum: startPage,
    booksTotalPages: startPage,
}

const booksReducer = (store = initialState, action) => {
    switch (action.type) {
        case SET_BOOK_DATA:
            return {
                ...store,
                books: [
                    ...action.value.map((item) => {
                        return {
                            title: {
                                name: 'Название',
                                content: item.title
                            },
                            cycle: {
                                name: 'Цикл',
                                content: item.cycle
                            },
                            author: {
                                name: 'Автор',
                                content: item.author
                            },
                            genre: {
                                name: 'Жанр',
                                content: item.genre
                            },
                            description: {
                                name: 'Описание',
                                content: item.description
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
        case SET_BOOK_PAGE:
            return {
                ...store,
                booksPageNum: action.value
            }
        case SET_BOOK_TOTAL_PAGE:
            return {
                ...store,
                booksTotalPages: action.value
            }
        default: return store
    }
}

export const setBookDataAC = (value) => ({
    type: SET_BOOK_DATA, value
})

export const booksPageAC = (value) => ({
    type: SET_BOOK_PAGE, value
})

export const booksTotalPagesAC = (value) => ({
    type: SET_BOOK_TOTAL_PAGE, value
})

export const getBookThunk = (page) => (dispatch) => {
    dispatch(loaderAC(true))
    ApiData.getBookDataAction(page).then(data => {
        dispatch(setBookDataAC(data.books))
        dispatch(booksTotalPagesAC(data.pageCount))
        dispatch(loaderAC(false))
    })
}

export default  booksReducer