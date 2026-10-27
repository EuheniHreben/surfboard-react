import { useEffect, useRef, useState } from "react";
import Hero from "./components/Hero/Hero.jsx";
import Why from "./components/Why/Why.jsx";
import Boards from "./components/Boards/Boards.jsx";
import Team from "./components/Team/Team.jsx";
import Menu from "./components/Menu/Menu.jsx";
import Reviews from "./components/Reviews/Reviews.jsx";
import Video from "./components/Video/Video.jsx";
import Form from "./components/Form/Form.jsx";
import Contacts from "./components/Contacts/Contacts.jsx";
import Preloader from "./components/Preloader/Preloader.jsx";

function App() {
  const [selectedBoard, setSelectedBoard] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [isHeroReady, setIsHeroReady] = useState(false);

  const preloaderRef = useRef(null);

  useEffect(() => {
    if (!isLoading) return;

    const preventScroll = (event) => {
      event.preventDefault();
    };

    const preventScrollKeys = (event) => {
      const scrollKeys = [
        "ArrowDown",
        "ArrowUp",
        "PageDown",
        "PageUp",
        "Home",
        "End",
        " ",
      ];

      if (scrollKeys.includes(event.key)) {
        event.preventDefault();
      }
    };

    window.addEventListener("wheel", preventScroll, {
      passive: false,
    });
    window.addEventListener("touchmove", preventScroll, {
      passive: false,
    });
    window.addEventListener("keydown", preventScrollKeys);

    return () => {
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
      window.removeEventListener("keydown", preventScrollKeys);
    };
  }, [isLoading]);

  useEffect(() => {
    const fillTimer = setTimeout(() => {
      const hero = document.querySelector('[data-section-id="hero"]');

      if (hero) {
        hero.scrollIntoView({ behavior: "smooth" });
      }

      setIsHeroReady(true);
      setIsExiting(true);
    }, 3100);

    return () => clearTimeout(fillTimer);
  }, []);

  const scrollToSection = (id) => {
    const element = document.querySelector(`[data-section-id="${id}"]`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOrderBoard = (boardTitle) => {
    setSelectedBoard(boardTitle);
    scrollToSection("form");
  };

  return (
    <>
      {isLoading && (
        <Preloader
          preloaderRef={preloaderRef}
          isExiting={isExiting}
          onExitEnd={() => setIsLoading(false)}
        />
      )}
      <Hero onScrollRequest={scrollToSection} isReady={isHeroReady} />
      <Why />
      <Boards onOrder={handleOrderBoard} />
      <Team />
      <Menu />
      <Reviews />
      <Video />
      <Form selectedBoard={selectedBoard} setSelectedBoard={setSelectedBoard} />
      <Contacts />
    </>
  );
}

export default App;
