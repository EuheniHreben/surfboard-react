import "./Boards.scss";
import BoardsList from "./BoardsList.jsx";
import { boards } from "./boardsData.js";

function Boards({ onOrder }) {
  return (
    <section
      className="boards section"
      data-section-id="boards"
      data-fixed-menu-theme="dark"
    >
      <div className="container">
        <BoardsList items={boards} onOrder={onOrder} />
      </div>
    </section>
  );
}

export default Boards;
