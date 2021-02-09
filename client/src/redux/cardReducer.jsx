import {ApiData} from "../api/Api";

const CARD_TYPE = 'CARD-TYPE'

const initialState = {
    cardType: null
}

const cardReducer = (store = initialState, action) => {
    switch (action.type) {
        case CARD_TYPE:
            return {
                ...store,
                cardType: action.value
            }
        default:
            return store
    }
}

export const cardTypeAC = value => ({
    type: CARD_TYPE, value
})

export const createFavoriteThunk = (cardInfo) => (dispatch) => {
    ApiData.setFavoriteDataAction(cardInfo)
}

export default cardReducer