import { Link } from "react-router-dom"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Footer = () => {
  return  <footer>
  <nav class="menu__mobile">
    <ul>
      <li>
        <Link className="menu__mobile--col" to={'/dashboardRecherche'}><i class="far fa-search"></i>Rechercher</Link>
      </li>
      <li>
        <Link className="menu__mobile--col" to={'/'}><i class="fal fa-book-open"></i>Mon carnet de bord</Link>
      </li>
      <li>
        <Link className="menu__mobile--col" to={'/'}><i class="fas fa-star"></i>Mes préférences</Link>
      </li>
      <li>
        <Link className="menu__mobile--col" to={''}><i class="fal fa-coins"></i>Mes crédits</Link>
      </li>
      <li>
        <Link className="menu__mobile--col" to={''}><i class="fas fa-user"></i>Mon profil</Link>
      </li>
    </ul>
  </nav>
</footer>
}

export default Footer