import useSessions from "../hooks/useSessions";
import { useState } from "react";

const FilterDate = (props) => {
  /*const [filtres, setFiltres] = useState({
    minDate: "",
  }); 

  const handleChange = (e) => {
    console.log(e.target.name)
    setFiltres({
      ...filtres,
      [e.target.name]: e.target.value,
    })
  }*/

  const { onChange, value } = props;

  const { refresh, lastUpdate, data } = useSessions({
    minDate: Date.parse(value),
  });

  return (
    <div>
      <input
        type="date"
        onChange={onChange}
        name="minDate"
        value={value}
      ></input>
    </div>
  );
};

export default FilterDate;
