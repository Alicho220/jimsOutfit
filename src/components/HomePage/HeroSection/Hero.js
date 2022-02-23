import React from "react";
import pix1 from "../../assets/Machine.jpg";
import pix2 from "../../assets/scissors.jpg";
import pix3 from "../../assets/thread.jpg";
import "./hero.scss";

function Hero() {
  return (
    <div className="overall">
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active overall">
            <img src={pix1} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item overall">
            <img src={pix2} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item overall">
            <img src={pix3} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Hero;
