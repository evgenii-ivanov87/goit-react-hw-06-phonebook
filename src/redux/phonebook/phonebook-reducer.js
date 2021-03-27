import { combineReducers } from "redux"
import types from './phonebook-types'

const items = (state = [], { type, payload }) => {
    
    switch (type) {
        case types.ADD:
            return [...state, payload];
        case types.DELETE:
            return state.filter(({id})=> id !== payload)
        default:
            return state;
    }
}


const filters = (state = '', { type, payload }) => {
    switch (type) {
        case types.FILTERS:
            return  payload;
        
        default:
            return state;
    }
}

export default combineReducers({
    items,
    filters
})