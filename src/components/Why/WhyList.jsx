import featureSvg from "../../assets/svg/feature.svg";
import { useState } from "react";

function WhyList({ items }) {
  const [activeItem, setActiveItem] = useState("");

  return (
    <ul className="why__list">
      {items.map((item) => (
        <li
          key={item.id}
          className={`why__item ${activeItem === item.id ? "active" : ""}`}
          onPointerEnter={(event) => {
            if (event.pointerType === "mouse") {
              setActiveItem(item.id);
            }
          }}
          onPointerLeave={(event) => {
            if (event.pointerType === "mouse") {
              setActiveItem("");
            }
          }}
        >
          <div className="why__img-box">
            <svg className="why__img">
              <use xlinkHref={`${featureSvg}#${item.svgId}`} />
            </svg>
          </div>
          <div className="why__desc">
            <h3 className="why__desc-title">{item.title}</h3>
            <p className="why__desc-text">{item.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default WhyList;
