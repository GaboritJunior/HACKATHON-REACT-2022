import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router'
import { useNavigate } from 'react-router'
import { useAuth } from '../hooks/auth'
import Alert from '../components/Alert'
import LoginForm from '../components/LoginForm'

// import FooterSmall from "components/FooterSmall.js";

export default function Login() {

  const [loginState, actions] = useAuth()

  const navigate = useNavigate()

  const {
    login
  } = actions

  const {
    error,
    loading,
    user
  } = loginState

  const handleSubmit = ({
    email,
    password
  }) => {
    login(
      email,
      password
    )
  }

  useEffect(() => {
    if(user) {
      navigate('/')
    }
  }, [user])

  // useEffect(() => {
  //   return () => {
  //     dispatch({
  //       type: 'login_reset'
  //     })
  //   }
  // }, [])

  return (
    <div className='container'>
      {user && <Navigate to="/" />}
        <section className='login'>
          {/* Mettez l'alerte ici ! */}
          {error && <Alert
            status="error"
            description="Identifiants invalides"
          />}
          <h2 className='login-title'>Se connecter</h2>
          <LoginForm
            onSubmit={handleSubmit}
            disabled={loading}
          />
        </section>
    </div>
  )
}
