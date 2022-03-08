import React, { useCallback, useEffect, useState, useContext } from "react";
import { UserContext } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../hooks/auth";

const FavoriteInstructors = (props) => {
  const { onChange, value } = props;

  const [loginState, actions] = useAuth();
  const { user } = loginState;

  //const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);

  const getData = useCallback(() => {
    fetch(`/api/instructors?&q=${value}`)
      .then((res) => res.json())
      .then((data) => setList(data));
  }, [value]);

  useEffect(() => {
    getData();
  }, [getData, value.length]);

  const setFavoriteInstructors = (favoriteInstructorId) => {
    const newFavoriteInstructors = [...user["favoriteInstructorsId"]];
    var index = newFavoriteInstructors.indexOf(favoriteInstructorId);

    if (index === -1) {
      newFavoriteInstructors.push(favoriteInstructorId);
    } else {
      newFavoriteInstructors.splice(index, 1);
    }

    fetch("/api/users/" + user["id"], {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        favoriteInstructorsId: newFavoriteInstructors,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Unable to reserve");
        }
      })
      .then((user) => {
        console.log(user);
        actions.setUser(user);
      });
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Rechercher un instructeur..."
          value={value}
          onChange={onChange}
        />
      </div>
      {!!list.length && !!value && (
        <div>
          <ul>
            {list.map((instructor) => (
              <li key={instructor.id}>
                <p>
                  {instructor.firstName}{" "}
                  <FontAwesomeIcon
                    icon={faStar}
                    className={
                      "rank__e " +
                      (user["favoriteInstructorsId"].includes(instructor.id)
                        ? "rank__e--inversed"
                        : "")
                    }
                    onClick={() => setFavoriteInstructors(instructor.id)}
                  />
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FavoriteInstructors;
