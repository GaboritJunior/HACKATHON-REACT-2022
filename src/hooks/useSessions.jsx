import { useCallback, useEffect, useState } from "react"

const useSessions = (settings) => {

  const{
    minDate,
    favoritePlaces,
    favoriteInstructor
    } = settings

  const[session, setSession] = useState({data: null, lastUpdate: null});


  const refresh = useCallback( () => {
    const seachParams = new URLSearchParams();
    seachParams.append("_expand","instructor")
    seachParams.append("_expand","place")
  
    if(minDate){
      seachParams.append("dateStart_gte", minDate);
    }
   
    
    fetch("/api/sessions?" + seachParams.toString())
    .then(res => res.json())
        .then(data => {
          setSession({data, lastUpdate: Date.now()})
          })
        },[minDate]);
  
  useEffect( () => {
    refresh();
  }, [refresh])
  
  return {
    ...session,
    refresh
  }

}

export default useSessions;