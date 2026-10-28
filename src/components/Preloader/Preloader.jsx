import "./Preloader.scss";
import logo from "../../assets/images/background/logo-preloader.webp";

function Preloader({ preloaderRef, isExiting, onExitEnd }) {
  return (
    <section
      ref={preloaderRef}
      className={`preloader ${isExiting ? "preloader--exit" : ""}`}
      data-section-id="preloader"
      onAnimationEnd={(event) => {
        if (
          event.target === event.currentTarget &&
          event.animationName === "preloader-exit"
        ) {
          onExitEnd();
        }
      }}
    >
      <div className="preloader__logo">
        <img className="preloader__logo-white" src={logo} alt="Surfboard" />

        <div className="preloader__fill">
          <img src={logo} alt="" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

export default Preloader;
