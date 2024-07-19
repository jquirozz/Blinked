import { NavLink } from "react-router-dom";

import "./NavBar.scss";
import { IoHome, IoSettingsSharp } from "react-icons/io5";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { BsPersonCircle } from "react-icons/bs";

const LINKS = [
  {
    text: "Home",
    url: "/",
    icon: <IoHome />,
  },
  {
    text: "Explore",
    url: "/explore",
    icon: <FaMagnifyingGlass />,
  },
  {
    text: "Settings",
    url: "/settings",
    icon: <IoSettingsSharp />,
  },
];

function NavBar({ theme }) {
  return (
    <nav className="NavBar">
      <header>
        <img
          src={`/assets/logos/${
            theme === "light" ? "tr_black.png" : "tr_white.png"
          }`}
          alt=""
        />
      </header>
      <section className="links">
        {LINKS.map(({ text, url, icon }) => (
          <NavLink to={url} key={url}>
            {icon}
            <h3>{text}</h3>
          </NavLink>
        ))}
      </section>
      <footer>
        <NavLink to="/profile">
          <BsPersonCircle />
          <h3>Profile</h3>
        </NavLink>
      </footer>
    </nav>
  );
}

export default NavBar;
