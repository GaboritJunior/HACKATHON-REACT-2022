
import { useContext, useReducer, createContext, useEffect } from 'react'

const intialLoginState = {
    loading: false,
    user: null
}

export const AuthContext = createContext([intialLoginState, null])

const loginReducer = (state = intialLoginState, action) => {
    switch (action.type) {
        case 'login_pending':
            return {
                ...state,
                loading: true
            }
        case 'login_success':
            return {
                user: action.payload,
                loading: false
            }
        case 'login_error':
            return {
                loading: false,
                error: true
            }
        case 'login_reset':
            return {
                ...state,
                loading: false,
                error: false
            }
        case 'logout_success':
            return {
                loading: false,
                user: null
            }
        default:
            return state
    }
}

export const useAuth = (checkAuth = false) => {
    const [state, dispatch] = useContext(AuthContext)

    useEffect(() => {
        if (checkAuth) {
            fetch('/api/auth/me', {
                credentials: 'same-origin'
            })
                .then(res => {
                    if (!res.ok) {
                        throw new Error('Failed to retrieve user')
                    }
                    return res.json()
                })
                .then(user => fetch('/api/users/' + user.id + '?_embed=instructors&_embed=students'))
                .then(res => {
                    if (!res.ok) {
                        throw new Error('Failed to retrieve user')
                    }
                    return res.json()
                })
                .then(user => {

                    dispatch({
                        type: 'login_success',
                        payload: user
                    })
                })
                .catch(() => { })
        }
    }, [])

    const setUser = (user) => {
        dispatch({
            type: 'login_success',
            payload: user
        })
    }

    const login = (email, password) => {
        fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Authorization': 'Basic ' + btoa(email + ':' + password)
            }
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    throw new Error('Unable to authenticate')
                }
            })
            .then(data => {
                dispatch({
                    type: 'login_success',
                    payload: data.user
                })
            })
            .catch(() => {
                dispatch({
                    type: 'login_error'
                })
            })
    }

    const logout = () => {
        fetch('api/auth/logout', {
            method: 'POST',
            credentials: 'same-origin'
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to log out')
                }
                dispatch({
                    type: 'logout_success'
                })
            })
    }

    return [
        state,
        {
            login,
            logout,
            setUser
        }
    ]
}

export const AuthProvider = props => {
    const {
        children
    } = props

    const stateAndDispatch = useReducer(
        loginReducer,
        intialLoginState
    )


    return <AuthContext.Provider value={stateAndDispatch}>
        {children}
    </AuthContext.Provider>
}
