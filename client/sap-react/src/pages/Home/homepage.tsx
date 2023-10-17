import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ToastContainer } from "react-toastify";
import "./home-style.css";

const Home = () => {
  return (
    <Carousel
      autoPlay
      interval={3000}
      showArrows={true}
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      infiniteLoop={true}
      className="custom-carousel"
    >
      <div>
        <img src="" alt="slika1" />
        <p className="legend">Tekst za prvu sliku</p>
      </div>
      <div>
        <img src="" alt="slika2" />
        <p className="legend">Tekst za drugu sliku</p>
      </div>
      <div>
        <img src="" alt="slika3" />
        <p className="legend">Tekst za trecu sliku</p>
      </div>
    </Carousel>
  );
};

export default Home;
