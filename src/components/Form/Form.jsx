import "./Form.scss";
import { useState } from "react";
import Modal from "../Modal.jsx";

function Form({ selectedBoard, setSelectedBoard }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [street, setStreet] = useState("");
  const [house, setHouse] = useState("");
  const [apartment, setApartment] = useState("");
  const [floor, setFloor] = useState("");
  const [payment, setPayment] = useState("");
  const [noCall, setNoCall] = useState(false);

  const handleClear = (e) => {
    e.preventDefault();

    setName("");
    setPhone("");
    setStreet("");
    setHouse("");
    setApartment("");
    setFloor("");
    setComment("");
    setPayment("");
    setNoCall(false);
    setSelectedBoard("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name.trim()) {
      return;
    }

    setIsModalOpen(true);
  };

  return (
    <section
      className="form section"
      data-section-id="form"
      data-fixed-menu-theme="white"
    >
      <div className="container form__container">
        <h2>Закажите доставку</h2>

        <form className="form__content" onSubmit={handleSubmit}>
          <div className="form__main">
            <div className="form__row">
              <label className="form__field">
                <span>Имя</span>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  autoComplete="name"
                />
              </label>

              <label className="form__field">
                <span>Телефон</span>
                <input
                  type="tel"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </label>
            </div>

            <label className="form__field">
              <span>Улица</span>
              <input
                type="text"
                name="street"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
            </label>

            <div className="form__row form__row--address">
              <label className="form__field">
                <span>Дом</span>
                <input
                  type="text"
                  name="house"
                  value={house}
                  onChange={(e) => setHouse(e.target.value)}
                />
              </label>

              <label className="form__field">
                <span>Квартира</span>
                <input
                  type="text"
                  name="apartment"
                  value={apartment}
                  onChange={(e) => setApartment(e.target.value)}
                />
              </label>

              <label className="form__field">
                <span>Этаж</span>
                <input
                  type="text"
                  name="floor"
                  value={floor}
                  onChange={(e) => setFloor(e.target.value)}
                />
              </label>
            </div>
          </div>

          <div className="form__aside">
            <label className="form__field">
              <span>Комментарий</span>
              <textarea
                name="comment"
                rows="6"
                value={
                  selectedBoard
                    ? `Хочу заказать доску: ${selectedBoard}`
                    : comment
                }
                onChange={(e) => {
                  if (selectedBoard) {
                    setComment(e.target.value);
                    setSelectedBoard("");
                  } else {
                    setComment(e.target.value);
                  }
                }}
              />
            </label>
          </div>

          <div className="form__bottom">
            <div className="form__options">
              <label className="form__option">
                <input
                  type="radio"
                  name="payment"
                  value="cash"
                  checked={payment === "cash"}
                  onChange={(e) => setPayment(e.target.value)}
                />
                <span>Оплата наличными</span>
              </label>

              <label className="form__option">
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={payment === "card"}
                  onChange={(e) => setPayment(e.target.value)}
                />
                <span>Оплата картой</span>
              </label>

              <label className="form__option">
                <input
                  type="checkbox"
                  name="noCall"
                  checked={noCall}
                  onChange={(e) => setNoCall(e.target.checked)}
                />
                <span>Не перезванивать</span>
              </label>
            </div>

            <div className="form__actions">
              <button
                type="button"
                className="form__button form__button--reset button button_secondary"
                onClick={handleClear}
              >
                Очистить
              </button>

              <button
                type="submit"
                className="form__button form__button--submit button"
              >
                Заказать
              </button>
            </div>
          </div>
        </form>
        {isModalOpen && (
          <Modal name={name.trim()} onClose={() => setIsModalOpen(false)} />
        )}
      </div>
    </section>
  );
}

export default Form;
