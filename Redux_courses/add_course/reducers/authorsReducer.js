import C from '../constants'

export default function(state = [], action) {
    const {type, payload} = action

    switch(type) {
        case C.LOAD_AUTHOR_SUCCESS: return payload
        case C.CREATE + C.AUTHOR: return [...state, payload]        

        default: return state
    }
}