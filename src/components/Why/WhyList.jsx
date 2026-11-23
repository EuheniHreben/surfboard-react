import featureSvg from "../../assets/svg/feature.svg";

function WhyList({ items }) {
  return (
    <ul className="why__list">
      {items.map((item) => (
        <li key={item.id} className="why__item">
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
