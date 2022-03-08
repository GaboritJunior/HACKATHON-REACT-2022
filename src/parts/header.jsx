import { useAuth } from "../hooks/auth";
import { Link } from "react-router-dom";

const Header = () => {

  const [loginState] = useAuth(true)

  const { user } = loginState

  return <section className="sidebar">
    <nav className="nav">
      <ul className="nav-list">
        <Link to="/dashboard">
          <li className="nav-list__item">Profil</li>
        </Link>
        <Link to="#">
          <li className="nav-list__item">Mes préférences</li>
        </Link>
        <Link to="#">
          <li className="nav-list__item">Carnet de bord</li>
        </Link>
        <Link to="/sessions">
          <li className="nav-list__item nav-list__item--subitem">Mes séances</li>
        </Link>
        <Link to="#">
          <li className="nav-list__item nav-list__item--subitem">Mon évolution</li>
        </Link>
        <Link to="#">
          <li className="nav-list__item nav-list__item--subitem">Mon livret</li>
        </Link>
        <Link to="/dashboard/credits">
          <li className="nav-list__item">Crédits</li>
        </Link>
      </ul>
    </nav>
  </section>
}
export default Header;