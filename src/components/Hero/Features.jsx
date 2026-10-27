import "./Features.scss";
import featureSvg from "../../assets/svg/feature.svg";

function Features({ features }) {
  return (
    <div className="features">
      <ul className="features__list">
        {features.map((item) => (
          <li key={item.svg} className="features__item">
            <div className="features__img-box">
              <svg className="features__img">
                <use xlinkHref={`${featureSvg}#${item.svg}`} />
              </svg>
            </div>

            <p className="features__text">{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Features;