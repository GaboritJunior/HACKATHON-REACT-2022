import React, { useState } from 'react'

const RegisterForm = props => {

    const {
        role,
        onSubmit,
        color
    } = props

    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        password: '',
        email: '',
        role: role
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
                type="text"
                className='form-input'
                id= {role + 'firstName'}
                placeholder='Prénom'
                name="firstName"
                value={formState.firstName}
                onChange={handleFormChange}
            />
            <input
                type="text"
                className='form-input'
                id= {role +'lastName'}
                placeholder='Nom'
                name="lastName"
                value={formState.lastName}
                onChange={handleFormChange}
            />
            <input
                type="text"
                className='form-input'

                id= {role +'email'}
                placeholder='Email'
                name="email"
                value={formState.email}
                onChange={handleFormChange}
            />
            <input
                type="password"
                className='form-input'
                id={role +'password'}
                placeholder='Mot de passe'
                name="password"
                value={formState.password}
                onChange={handleFormChange}
            />
            <input type="submit"
                
                value="S'inscrire"
                className={`form-submit form-submit--${color}`}
            />
        </form>

}

export default RegisterForm