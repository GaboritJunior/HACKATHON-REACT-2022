import { useEffect, useState } from "react";
import { stringToDate, formatToDate } from "../utils/dateFormat";

const SessionItem = (props) => {
    const { session } = props

    const [instructor, setInstructor] = useState({})
    const [place, setPlace] = useState({})


    const note = Math.round(instructor.note*2)/2
    // Get instructor of the session
    const getInstructor = (id) => {
        fetch(`/api/instructors/${id}`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(res => setInstructor(res))
    }

    // Get place of the session
    const getPlace = (id) => {
        fetch(`/api/places/${id}`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(res => setPlace(res))
    }

    console.log(session.dateStart);

    useEffect(() => {
        getInstructor(session.instructorId)
        getPlace(session.placeId)
    }, [])

    const resiliation = (sessionId) => {
        fetch(`/api/sessions/${sessionId}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify({
                studentId: null,
            }),
        }).then(res => {
            if (res.ok) {
                console.log(res.json())
                window.location.reload();
            } else {
                throw new Error('Unable to cancel')
            }
        })
    };

return <li>
    {instructor.firstName} {instructor.lastName}<br />
    {place.name}<br />
    {stringToDate(session.dateStart)} - {stringToDate(session.dateEnd)}<br />
    <button onClick={() => resiliation(session.id)}>Annuler</button>
</li>
}

export default SessionItem