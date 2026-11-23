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
          type="button"
          className="boards__arrow boards__arrow--prev"
          onClick={handlePrev}
          aria-label="Предыдущая доска"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="boards__dots" role="tablist" aria-label="Выбор доски">
          {items.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={`boards__dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Показать ${item.title}`}
              aria-selected={index === currentIndex}
            />
          ))}
        </div>

        <button
          type="button"
          className="boards__arrow boards__arrow--next"
          onClick={handleNext}
          aria-label="Следующая доска"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default BoardsList;
