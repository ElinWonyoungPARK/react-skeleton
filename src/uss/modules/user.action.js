import { userConstants } from './user.constant'

const register = user => dispatch =>{

    const request = user => {
        return {type: userConstants.REGISTER_REQUEST, user}
    }
    const success = user => {
        return {type: userConstants.REGISTER_SUCCESS, user}
    }
    const failure = user => {
        return {type: userConstants.REGISTER_FAILURE, user}
    }
}
const list = count => dispatch =>{
    
    const request = user => {
        return {type: userConstants.LIST_REQUEST, count}
    }
    const success = user => {
        return {type: userConstants.LIST_SUCCESS, count}
    }
    const failure = user => {
        return {type: userConstants.LIST_FAILURE, count}
    }
}
const detail = userid => dispatch =>{
    
    const request = user => {
        return {type: userConstants.DETAIL_REQUEST, userid}
    }
    const success = user => {
        return {type: userConstants.DETAIL_SUCCESS, userid}
    }
    const failure = user => {
        return {type: userConstants.DETAIL_FAILURE, userid}
    }
}
const login = user => dispatch =>{
    
    const request = user => {
        return {type: userConstants.LOGIN_REQUEST, user}
    }
    const success = user => {
        return {type: userConstants.LOGIN_SUCCESS, user}
    }
    const failure = user => {
        return {type: userConstants.LOGIN_FAILURE, user}
    }
}
const logout = () => {
    return { type: userConstants.LOGOUT}
}

const update = user => dispatch =>{
    
    const request = user => {
        return {type: userConstants.UPDATE_REQUEST, user}
    }
    const success = user => {
        return {type: userConstants.UPDATE_SUCCESS, user}
    }
    const failure = user => {
        return {type: userConstants.UPDATE_FAILURE, user}
    }
}
const remove = user => dispatch =>{
    
    const request = user => {
        return {type: userConstants.REMOVE_REQUEST, user}
    }
    const success = user => {
        return {type: userConstants.REMOVE_SUCCESS, user}
    }
    const failure = user => {
        return {type: userConstants.REMOVE_FAILURE, user}
    }
}

export const userActions = {
    register, 
     list, 
     detail, login, logout, update, remove
}