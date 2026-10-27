import "./Header.scss";
import { useState } from "react";
import logoImage from "../assets/images/logo.png";
import phoneIcon from "../assets/images/icons/mob.png";

function Header({ menuItems, onMenuItemClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuItemClick = (id) => {
    onMenuItemClick(id);
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isMenuOpen ? "header--menu-open" : ""}`}>
      <Logo onMenuItemClick={onMenuItemClick} />

      <button
        className={`hamburgerButton ${isMenuOpen ? "active" : ""}`}
        type="button"
        aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          className="hamburgerButton__img"
          aria-hidden="true"
        >
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="6.5"
            strokeLinecap="round"
          >
            <path d="M72 82.286h28.75" />
            <path d="M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554" />
            <path d="M72 125.143h28.75" />
            <path d="M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554" />
            <path d="M100.75 82.286h28.75" />
            <path d="M100.75 125.143h28.75" />
          </g>
        </svg>
      </button>

      <Menu
        menuItems={menuItems}
        onMenuItemClick={handleMenuItemClick}
        isMenuOpen={isMenuOpen}
        phone={<Phone />}
      />
    </header>
  );
}

function Logo({ onMenuItemClick }) {
  return (
    <a
      href="#boards"
      className="logo"
      onClick={(event) => {
        event.preventDefault();
        onMenuItemClick("boards");
      }}
    >
      <div className="logo__img-box">
        <img className="logo__img" src={logoImage} alt="Surfboard" />
      </div>
    </a>
  );
}

function Phone() {
  return (
    <address className="address">
      <a href="tel:+88009039090" className="address__phone">
        <div className="address__img-box">
          <img className="address__img" src={phoneIcon} alt="telephone" />
        </div>
        8 800 903 90 90
      </a>
    </address>
  );
}

function Menu({ menuItems, onMenuItemClick, isMenuOpen, phone }) {
  return (
    <nav className={`nav ${isMenuOpen ? "nav--open" : ""}`}>
      <ul className="nav__list">
        {menuItems.map((item) => (
          <MenuItem
            key={item.id}
            item={item}
            onMenuItemClick={onMenuItemClick}
          />
        ))}
      </ul>

      <div className="nav__phone">{phone}</div>
    </nav>
  );
}

function MenuItem({ item, onMenuItemClick }) {
  return (
    <li className="nav__item">
      <button
        className="nav__link"
        type="button"
        onClick={() => onMenuItemClick(item.id)}
      >
        {item.title}
      </button>
    </li>
  );
}

export default Header;
