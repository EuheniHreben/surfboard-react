import { useState } from "react";

function BoardsList({ items, onOrder }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div className="boards__viewport">
      <ul
        className="boards__list"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item) => (
          <li key={item.id} className="boards__item">
            <div className="boards__img-box">
              <img src={item.image} alt={item.title} className="boards__img" />
            </div>

            <div className="boards__info">
              <h2 className="boards__title">{item.title}</h2>

              <p className="boards__desc">{item.description}</p>

              <ul className="boards__specs">
                <li className="boards__spec">
                  <span className="boards__spec-name">Длина</span>
                  <span className="boards__spec-value">{item.length}</span>
                </li>

                <li className="boards__spec">
                  <span className="boards__spec-name">Ширина</span>
                  <span className="boards__spec-value">{item.width}</span>
                </li>

                <li className="boards__spec">
                  <span className="boards__spec-name">Толщина</span>
                  <span className="boards__spec-value">{item.thickness}</span>
                </li>

                <li className="boards__spec">
                  <span className="boards__spec-name">Срок службы</span>
                  <span className="boards__spec-value">{item.lifespan}</span>
                </li>

                <li className="boards__spec">
                  <span className="boards__spec-name">Вес</span>
                  <span className="boards__spec-value">{item.weight}</span>
                </li>
              </ul>

              <div className="boards__footer">
                <span className="boards__price">{item.price} $</span>

                <button
                  className="button boards__btn"
                  onClick={() => onOrder(item.title)}
                >
                  Заказать
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="boards__controls">
        <button
          className="boards__arrow"
          onClick={handlePrev}
          aria-label="Предыдущая доска"
        >
          ←
        </button>

        <button
          className="boards__arrow"
          onClick={handleNext}
          aria-label="Следующая доска"
        >
          →
        </button>
      </div>
    </div>
  );
}

export default BoardsList;
