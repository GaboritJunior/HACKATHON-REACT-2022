import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/auth'
import { Navigate } from 'react-router';

const Logout = () => {

    const [loginState, actions] = useAuth()
    let navigate = useNavigate();

    const {
        logout
    } = actions

    useEffect(() => {
        logout()
        navigate("/")
    }, []) 

    return <main>
        Vous êtes déconnectez
    </main>
}

export default Logout