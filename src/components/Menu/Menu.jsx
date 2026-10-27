import "./Menu.scss";
import MenuList from "./MenuList.jsx";
import { menuData } from "./MenuData.js";

function Menu() {
  

  return (
    <section
      className="menu section"
      data-section-id="menu"
      data-fixed-menu-theme="white"
    >
      <div className="container">
        <h2>Меню</h2>
        <MenuList items={menuData} />
      </div>
    </section>
  );
}

export default Menu;
