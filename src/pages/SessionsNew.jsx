import React, { useContext } from "react";
import { UserContext } from "../App";
import SessionForm from "../components/SessionForm";
import { Navigate } from 'react-router';

const SessionsNew = () => {


    const user = useContext(UserContext);

    function create(placeId, dateStart, dateEnd) {
        let start = Date.parse(dateStart);
        let end = Date.parse(dateEnd);
        fetch('http://localhost:8080/api/sessions', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify({
                "placeId": parseInt(placeId),
                "dateStart": start,
                "dateEnd": end,
                "instructorId": user['id'],
                "studentId": null
            })
        }).then(res => {
            if (res.ok) {
              console.log(res.json())
            } else {
              throw new Error('Unable to create sessions')
            }
          })
    }
    
    const handleSubmit = (
        {
          placeId,
          dateStart,
          dateEnd
        }
      ) => {
        create(
          placeId,
          dateStart,
          dateEnd
        )
      }
    

    return <div>
        <SessionForm
            onSubmit={handleSubmit}
        />
    </div>
}

export default SessionsNew