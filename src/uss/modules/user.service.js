const register = user => {
    const requestOption = {
        method: `POST`,
        headers: {},
        body: JSON.stringify(user)
    }
    return fetch(``, requestOption).then()
}
const list = count => {
    return fetch(``)
}
const detail = userid => {
    return fetch(``)
}
const login = user => {
    return fetch(``)
}
const logout = userid => {
    return fetch(``)
}
const update = user => {
    return fetch(``)
}
const remove = user => {
    return fetch(``)
}

export const userService = {
    register, list, detail, login, logout, update, remove
}