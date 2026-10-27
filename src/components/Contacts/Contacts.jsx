import "./Contacts.scss";
import vkIcon from "../../assets/images/icons/vk.png";
import instagramIcon from "../../assets/images/icons/in.png";
import twitterIcon from "../../assets/images/icons/tv.png";
import markerIcon from "../../assets/svg/marker.svg";
import phoneIcon from "../../assets/images/icons/mob.png";
import { useEffect } from "react";

function Contacts() {
  useEffect(() => {
    if (!window.ymaps) {
      console.error("API Яндекс Карт не загружен");
      return;
    }

    let myMap;

    window.ymaps.ready(() => {
      const ymaps = window.ymaps;

      myMap = new ymaps.Map("map", {
        center: [24.041977, -69.773732],
        zoom: 4.5,
        controls: [],
      });

      const coords = [
        [33.407918, -65.866823],
        [26.970498, -81.180277],
        [19.289044, -67.285679],
      ];

      const myCollection = new ymaps.GeoObjectCollection();

      coords.forEach((coord) => {
        const placemark = new ymaps.Placemark(
          coord,
          {},
          {
            draggable: false,
            iconLayout: "default#image",
            iconImageHref: markerIcon,
            iconImageSize: [53, 60],
            iconImageOffset: [-3, -42],
          },
        );

        myCollection.add(placemark);
      });

      myMap.geoObjects.add(myCollection);
      myMap.behaviors.disable("scrollZoom");
    });

    return () => {
      if (myMap) {
        myMap.destroy();
      }
    };
  }, []);

  const socialLinks = [
    { name: "VK", url: "https://vk.com/", icon: vkIcon },
    {
      name: "Instagram",
      url: "https://www.instagram.com/",
      icon: instagramIcon,
    },
    { name: "Twitter", url: "https://twitter.com/", icon: twitterIcon },
  ];

  return (
    <section
      className="contacts section"
      data-section-id="contacts"
      data-fixed-menu-theme="dark"
    >
      <div id="map"></div>

      <footer className="footer">
        <div className="container footer-container">
          <address className="address">
            <div className="address__city">Москва, ул.Новый Арбат, д.31/12</div>
            <a href="tel:+88009039090" className="address__phone">
              <div className="address__img-box">
                <img className="address__img" src={phoneIcon} alt="" />
              </div>
              8 800 903 90 90
            </a>
          </address>
          <div className="social">
            <ul className="social__list">
              {socialLinks.map((social) => (
                <li className="social__item" key={social.name}>
                  <a
                    href={social.url}
                    className="social__link"
                    aria-label={social.name}
                  >
                    <img src={social.icon} alt="" className="social__img" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Contacts;
