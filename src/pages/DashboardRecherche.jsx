import FavoriteInstructors from "../components/FavoriteInstructors";
import FavoritePlaces from "../components/FavoritePlaces";
import FilterDate from "../components/FilterDate";
import { useEffect, useContext, useState } from "react";
import { useAuth } from "../hooks/auth";
import Footer from "../parts/Footer";
import Sessions from "./Sessions";
import { Navigate } from 'react-router';

const DashboardRecherche = () => {
  const [loginState] = useAuth(true);

  const user = loginState.user;

  const [filtres, setFiltres] = useState({
    minDate: "",
    favoriteInstructors: "",
    favoritePlaces: "",
  });

  const handleChange = (name, event) => {
    setFiltres({
      ...filtres,
      [name]: event.target.value,
    });
  };

  return (
    <body class="eleves eleves--bleu">
    
      {user && <h2 class="eleves__name">Bonjour {user.firstName}</h2>}
      <section class="form--recherche">
        <form action="" method="get" class="form-recherche">
          <h1 class="form-recherche__title">
            Trouve ta prochaine heure de conduite
          </h1>
          <div class="form-connexion-date">
            <FilterDate
              onChange={(value) => handleChange("minDate", value)}
              value={filtres.minDate}
            />
          </div>
          <div class="form-connexion-sceance">
            <FavoriteInstructors
              onChange={(value) => handleChange("favoriteInstructors", value)}
              value={filtres.favoriteInstructors}
            />
          </div>
          <div class="form-connexion-sceance">
            <FavoritePlaces
              onChange={(value) => handleChange("favoritePlaces", value)}
              value={filtres.favoritePlaces}
            />
          </div>
          <div class="form-btn">
            <input type="submit" value="Rechercher" />
          </div>
        </form>
      </section>
      <Sessions filtres={filtres}/> 
      <Footer />
    </body>
  );
};

export default DashboardRecherche;
