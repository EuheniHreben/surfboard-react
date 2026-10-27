import WhyContent from "./WhyContent.jsx";
import WhyList from "./WhyList.jsx";
import "./Why.scss";

function Why() {
  const whyItems = [
    {
      id: "size",
      title: "Индивидуальный размер",
      description:
        "Мы создаем доски по индивидуальным замерам. Учитываем ваш рост, вес и уровень подготовки.",
      svgId: "why2",
    },
    {
      id: "materials",
      title: "Надёжные материалы",
      description:
        "Мы используем качественные и экологичные материалы. Ваша доска прослужит вам долгие годы.",
      svgId: "why1",
    },
    {
      id: "design",
      title: "Уникальный дизайн",
      description:
        "Вы станете обладателем уникального серфборда. Доска будет выполнена по вашему дизайну.",
      svgId: "why3",
    },
  ];

  return (
    <section
      className="why section"
      data-section-id="why"
      data-fixed-menu-theme="dark"
    >
      <div className="container">
        <WhyContent />
        <WhyList items={whyItems} />
      </div>
    </section>
  );
}

export default Why;
