import { useEffect, useContext, useState } from "react";
import { UserContext } from "../App";
import Header from './../parts/Header'
import { stringToDate } from "../utils/dateFormat";
import SessionItem from "@components/SessionItem";
import FavoritePlaces from "@components/FavoritePlaces";
import FavoriteInstructors from "@components/FavoriteInstructors";
import ProgressBar from "@components/ProgressBar";
import { Navigate } from 'react-router';


const Dashboard = () => {
    
    const user = useContext(UserContext)
    const [sessions, setSessions] = useState([])



    const getSessions = (user) => {
        fetch(`/api/sessions?studentId=${user.id}`, {
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => setSessions(data))
    }
    
    useEffect(() => {
        getSessions(user)
    }, [])

    return <main className="wrapper">
        <Header />
        <section className="dashboard">
        <h2>Dashboard</h2>
        <h3>Vous avez actuellement {sessions.length} séance{sessions.length < 1 ? 's' : ''} de prévue</h3>
        {sessions &&<ul>
            {sessions.map(session => {
                return <SessionItem key={session.id} session={session} />
            })}
        </ul>}

        <FavoritePlaces></FavoritePlaces>
        <FavoriteInstructors></FavoriteInstructors>
        <ProgressBar></ProgressBar>
        </section>
    </main>
}

export default Dashboard