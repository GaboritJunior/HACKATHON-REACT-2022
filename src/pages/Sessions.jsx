import useSessions from "../hooks/useSessions";
import Header from './../parts/Header'
import {useState} from "react"
import { useContext } from "react";
import { UserContext } from "../App";
import { Navigate } from 'react-router';

const Sessions = (props) => {

   const {
     filtres
   } = props

  const user = useContext(UserContext);

  function reservation(sessionId) {
    const userId = user['id'];
    const url = '/api/sessions/' + sessionId;
    fetch(url, {
      method: 'PATCH',
      headers: {
        "Content-Type": 'application/json',
      },
      body: JSON.stringify({
        studentId: userId,
      }) 
    }).then(res => {
      if (res.ok) {
        console.log(res.json())
      } else {
        throw new Error('Unable to reserve')
      }
    })
  }



  const{refresh, lastUpdate, data} = useSessions({minDate: Date.parse(filtres.minDate)})

  


  return <main className="wrapper">
    <Header />
    <section>
      <a href="/sessions/new">Ajouter une sessions</a>
    {data && <pre>
      {data.filter(item => item.studentId != null).map(i => 
          <li key={i.id}>{new Date(i.dateStart).toLocaleString()} {i.instructor.firstName} {i.instructor.lastName} {i.place.name}
            <button onClick={() => reservation(i.id)}>Reserver</button>
          </li>)}
      </pre>}
    </section>
  </main>

}

export default Sessions;