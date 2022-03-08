import { useContext, useState, useEffect } from "react";
import { UserContext } from "../App";
import SessionItem from "@components/SessionItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from "@fortawesome/free-solid-svg-icons";

const History = () => {
    const today = Date.now()
    //useContext(UserContext)
    const user = {id: 8}
    const [sessions, setSessions] = useState([])
    const [note, setNote] = useState(0)

    const getSessions = (user) => {
        fetch(`/api/sessions?studentId=${user.id}&dateEnd_lte=${today}&_expand=instructor`, {
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => setSessions(data))
    }

    useEffect(() => {
        getSessions(user)
    }, [])

    const postNote = (note) =>{
        fetch(`/api/instructors/${3}`, {
            method : 'PATCH',
            headers: {
                "Content-Type": 'application/json',
              },
              body: JSON.stringify({
                note : note
              }) 
        }).then(res => {
            if(res.ok){
                console.log(res.json())
            }
        })
    } 


    return <main>
        <h2>Historique</h2>
        
        {sessions.length > 0 &&<ul> 
           
            {sessions.map(session => {
                return <SessionItem key={session.id} session={session} />
            })}
            
        </ul>}

        {sessions.length <= 0 &&<section>
            <span>
                Vous n'avez pas encore eu de séances, c'est le moment parfait pour commencer !
            </span>
        </section>}
        
        <div className="rank"> 
            <FontAwesomeIcon icon={faStar} className="rank__e" onClick={() => setNote(5)}/>
            <FontAwesomeIcon icon={faStar} className="rank__e" onClick={() => setNote(4)}/>
            <FontAwesomeIcon icon={faStar} className="rank__e" onClick={() => setNote(3)}/>
            <FontAwesomeIcon icon={faStar} className="rank__e" onClick={() => setNote(2)}/>
            <FontAwesomeIcon icon={faStar} className="rank__e" onClick={() => setNote(1)}/>
            {note > 0 && <button onClick={() => postNote(note)}>Valider</button>}
        </div>
      
    </main>
}

export default History