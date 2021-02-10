export const getBooksS = state => {
    return state.booksReducer.books
}

export const booksPageNum = state => {
    return state.booksReducer.booksPageNum
}

export const booksTotalPages = state => {
    return state.booksReducer.booksTotalPages
}