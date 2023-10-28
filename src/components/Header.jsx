import { NavLink } from "react-router-dom";

function Header({ favs }) {
  return (
    <header>
      <NavLink to="/" className={"logo"}>
        <h3>Logo</h3>
      </NavLink>
      <ul>
        <li>
          <NavLink to="/">Homepage</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        {favs > 0 && (
          <li>
            <NavLink to="/favorites">Favorites ({favs})</NavLink>
          </li>
        )}
      </ul>
    </header>
  );
}

export default Header;
