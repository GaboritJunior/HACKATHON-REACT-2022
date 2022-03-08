import React, { useState } from 'react'

const LoginForm = props => {

    const {
        disabled,
        onSubmit
    } = props


    const [formState, setFormState] = useState({
        email: '',
        password: ''
    })

    const handleFormChange = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = evt => {
        evt.preventDefault()
        return onSubmit(formState)
    }

    return <form className='form' onSubmit={handleSubmit}>
        <input
            type="email"
            id="email"
            className='form-input'
            placeholder="Email"
            style={{ transition: "all .15s ease" }}
            name="email"
            value={formState.email}
            onChange={handleFormChange}
            disabled={disabled}
        />
        <input
            type="password"
            className='form-input'
            placeholder="Mot de passe"
            style={{ transition: "all .15s ease" }}
            name="password"
            id="password"
            value={formState.password}
            onChange={handleFormChange}
            disabled={disabled}
        />

        <input type="submit"
            className='form-submit'
            style={{ transition: "all .15s ease" }}
            disabled={disabled}
            value="Connexion"
        />
            
    </form>
}

export default LoginForm
