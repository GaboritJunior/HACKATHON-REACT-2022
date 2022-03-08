import React, { useCallback, useEffect, useState } from "react";

const SessionForm = props => {

    const {
        onSubmit
    } = props

    const [list, setList] = useState([])

    const [formState, setFormState] = useState({
        placeId: 0,
        dateStart: '2022-02-11T00:00' ,
        dateEnd: '2022-02-11T00:00',
    })

    const getData = useCallback(() => {
        fetch('/api/places')
          .then(res => res.json())
          .then(data => setList(data))
      }, [])

      
      useEffect(() => {
        getData()
      }, [getData])
    
    

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

    return <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="placeId">Lieu :</label>
            <select onChange={handleFormChange}  name="placeId" id="placeId">
            {list.map(place => <option value={place.id} key={place.id}>
                {place.name}
            </option>)}
            </select>
            <label htmlFor="dateStart">Date de debut :</label>
            <input
                type="datetime-local"
                id="dateStart"
                name="dateStart"
                value={formState.dateStart}
                onChange={handleFormChange}
            />
            <label htmlFor="dateEnd">Date de fin :</label>
            <input
                type="datetime-local"
                id="dateEnd"
                name="dateEnd"
                value={formState.dateEnd}
                onChange={handleFormChange}
            />
            <input type="submit"
                value="Créer"
            />
        </form>
    </div>

}

export default SessionForm