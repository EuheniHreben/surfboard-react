import { useState } from "react";

function MenuList({ items }) {
  const [activeItem, setActiveItem] = useState(null);

  const handleMenuClick = (id) => {
    setActiveItem((currentId) => (currentId === id ? null : id));
  };

  return (
    <ul className="menu__list">
      {items.map((item) => {
        const isActive = activeItem === item.id;

        return (
          <li
            key={item.id}
            className={`menu__item ${isActive ? "menu__item--active" : ""}`}
          >
            <button
              type="button"
              className="menu__link"
              style={{ backgroundImage: `url(${item.image})` }}
              aria-expanded={isActive}
              onClick={() => handleMenuClick(item.id)}
            >
              <span className="menu__title">{item.name}</span>
            </button>

            <div className="menu__content" onClick={() => setActiveItem(null)}>
              <div className="menu__content-inner">
                <p className="menu__role">{item.role}</p>
                <img src={item.pic} alt={item.name} className="menu__img" />
                <p className="menu__desc">{item.description}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default MenuList;
