import React, { useCallback, useEffect, useState, useContext } from "react";
import { UserContext } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../hooks/auth";

const FavoritePlaces = (props) => {
  const { onChange, value } = props;

  const [loginState, actions] = useAuth();
  const { user } = loginState;

  //const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);

  const getData = useCallback(() => {
    fetch(`/api/places?q=${value}`)
      .then((res) => res.json())
      .then((data) => setList(data));
  }, [value]);

  useEffect(() => {
    getData();
  }, [getData, value.length]);

  const setFavoritePlaces = (favoritePlaceId) => {
    const newFavoritePlaces = [...user["favoritePlacesId"]];
    var index = newFavoritePlaces.indexOf(favoritePlaceId);

    if (index === -1) {
      newFavoritePlaces.push(favoritePlaceId);
    } else {
      newFavoritePlaces.splice(index, 1);
    }

    fetch("/api/users/" + user["id"], {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        favoritePlacesId: newFavoritePlaces,
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
        actions.setUser(user);
      });
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Rechercher un lieu..."
          value={value}
          onChange={onChange}
        />
      </div>
      {!!list.length && user && !!value && (
        <div>
          <ul>
            {list.map((place) => (
              <li key={place.id}>
                <p>
                  {place.name}{" "}
                  <FontAwesomeIcon
                    icon={faStar}
                    className={
                      "rank__e " +
                      (user["favoritePlacesId"].includes(place.id)
                        ? "rank__e--inversed"
                        : "")
                    }
                    onClick={() => setFavoritePlaces(place.id)}
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

export default FavoritePlaces;
