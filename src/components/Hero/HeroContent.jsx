import "./HeroContent.scss";
import "../../styles/button.scss";

function HeroContent({ onBtnClick }) {
  return (
    <div className="title">
      <h1>Профессиональные доски для серфинга</h1>
      <p>Самый большой выбор серфбордов в мире</p>
      <div className="title__btn">
        <button className="button" onClick={() => onBtnClick("form")}>
          Заказать
        </button>
      </div>
    </div>
  );
}

export default HeroContent;
