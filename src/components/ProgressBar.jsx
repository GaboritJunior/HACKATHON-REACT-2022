import React, { useCallback, useEffect, useState, useContext } from 'react';
import { UserContext } from "../App";;

const ProgressBar = props => {

    const user = useContext(UserContext);
    const scheduledTime = 27 * 60 * 60 * 100;
    const today = Date.now();

    const [list, setList] = useState([])
    const [hoursWorked, setHoursWorked] = useState([])

    const getData = useCallback(() => {
        fetch(`/api/sessions?studentId=2&dateEnd_lte=1649213229216`)
            .then(res => res.json())
            .then(data => {
                setList(data);
                if (data.length > 0) {
                    setHoursWorked(data.map(x => x.dateEnd - x.dateStart).reduce((previousValue, currentValue) => previousValue + currentValue))
                }
            })
    })



    useEffect(() => {
        getData()
    }, [])


    return <progress id="file" max="100" value={(100 / scheduledTime) * hoursWorked}> {(100 / scheduledTime) * hoursWorked}% </progress>
}

export default ProgressBar
