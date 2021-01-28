import { userConstants } from './user.constant'

export const userReducer = ( state = {}, action ) => {
    switch (action.type) {
        case userConstants.REGISTER_REQUEST: return {...state, payload: action.payload}
        case userConstants.REGISTER_SUCCESS:return {...state, payload: action.payload}
        case userConstants.REGISTER_FAILURE:return {...state, payload: action.payload}

        case userConstants.LIST_REQUEST: return {...state, payload: action.payload}
        case userConstants.LIST_SUCCESS:return {...state, payload: action.payload}
        case userConstants.LIST_FAILURE:return {...state, payload: action.payload}

        case userConstants.DETAIL_REQUEST: return {...state, payload: action.payload}
        case userConstants.DETAIL_SUCCESS:return {...state, payload: action.payload}
        case userConstants.DETAIL_FAILURE:return {...state, payload: action.payload}

        case userConstants.LOGIN_REQUEST: return {...state, payload: action.payload}
        case userConstants.LOGIN_SUCCESS:return {...state, payload: action.payload}
        case userConstants.LOGIN_FAILURE:return {...state, payload: action.payload}

        case userConstants.UPDATE_REQUEST: return {...state, payload: action.payload}
        case userConstants.UPDATE_SUCCESS:return {...state, payload: action.payload}
        case userConstants.UPDATE_FAILURE:return {...state, payload: action.payload}

        case userConstants.REMOVE_REQUEST: return {...state, payload: action.payload}
        case userConstants.REMOVE_SUCCESS:return {...state, payload: action.payload}
        case userConstants.REMOVE_FAILURE:return {...state, payload: action.payload}

        default:return state
    }
}