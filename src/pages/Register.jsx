import React from 'react';
import RegisterForm from '../components/RegisterForm'
import { useNavigate } from 'react-router-dom'

function register(firstName, lastName, email, password, role) {
  fetch('/api/users', {
    method: 'POST',
    headers: {
      "Content-Type": 'application/json',
    },
    body: JSON.stringify({
      "firstName": firstName,
      "lastName": lastName,
      "email": email,
      "password": password,
      "favoritePlacesId": [],
      "favoriteInstructorsId" : [],
      "role": role
    }) 
  }).then(res => {
    if (res.ok) {
      return res.json()
    } else {
      throw new Error('Unable to register')
    }
  })
  .then(res => {
    if(role === 'student') {
      fetch(`/api/students?lastName=${lastName}`, {
        method: 'POST',
        headers: {
          "Content-Type": 'application/json',
        },
        body: JSON.stringify({
          "firstName": firstName,
          "lastName": lastName,
          "credits": 0
        }) 
      })
    }
  })
  .then(res => {
    if (res.ok) {
      console.log(res.json())
    } else {
      throw new Error('Unable to register')
    }
  })
}

const handleSubmit = (
  {
    firstName,
    lastName,
    email,
    password,
    role
  }
) => {
  register(
    firstName,
    lastName,
    email,
    password,
    role
  )
}



const Register = () => {  
  return <section className='container'>
    <section className='register'>
      <section className='card card--blue'>
        <h2 className='card-title'>Je suis un élève</h2>
        <RegisterForm
          color='blue'
          role="student"
          onSubmit={handleSubmit}
        />
        <a href='/login'><span>Déjà inscrit ?</span></a>
      </section>
      <section className='card card--green'>   
        <h2 className='card-title'>Je suis un moniteur</h2>
        <RegisterForm
          color='green'
          role="instructor"
          onSubmit={handleSubmit}
        />
        <a href='/login'><span>Déjà inscrit ?</span></a>
      </section>
    </section>
  </section>
}
export default Register;