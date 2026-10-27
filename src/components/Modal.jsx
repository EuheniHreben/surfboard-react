import "./Modal.scss";

function Modal({ name, onClose }) {
  return (
    <div className="modal">
      <div className="modal__overlay" onClick={onClose}>
        <div
          className="modal__content"
          onClick={(event) => event.stopPropagation()}
        >
          <h2>Спасибо, {name}!</h2>
          <p>Ваш заказ успешно оформлен.</p>
          <button type="button" onClick={onClose}>
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
