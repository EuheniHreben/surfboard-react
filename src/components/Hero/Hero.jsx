import Header from "../Header.jsx";
import HeroContent from "./HeroContent.jsx";
import Features from "./Features.jsx";
import "./Hero.scss";

function Hero({ onScrollRequest, isReady }) {
  const menuItems = [
    { title: "О нас", id: "why" },
    { title: "Серфборды", id: "boards" },
    { title: "Команда", id: "team" },
    { title: "Меню", id: "menu" },
    { title: "Отзывы", id: "reviews" },
    { title: "Как мы работаем", id: "video" },
    { title: "Купить", id: "form" },
    { title: "Контакты", id: "contacts" },
  ];

  const features = [
    { title: "Уникальный дизайн", svg: "main2" },
    { title: "Прочные материалы", svg: "main3" },
    { title: "Быстрая доставка", svg: "main1" },
  ];

  return (
    <section
      className={`hero section ${isReady ? "hero--ready" : ""}`}
      data-section-id="hero"
      data-fixed-menu-theme="white"
    >
      <div className="container hero-container">
        <Header menuItems={menuItems} onMenuItemClick={onScrollRequest} />
        <HeroContent onBtnClick={onScrollRequest} />
        <Features features={features} />
      </div>
    </section>
  );
}

export default Hero;
