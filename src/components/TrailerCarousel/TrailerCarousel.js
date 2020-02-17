/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import Swiper from "swiper/dist/js/swiper.js";
import "./TrailerCarousel.scss";

class TrailerCarousel extends Component {
  render() {
    // Initiates carousel
    (() => {
      const sliderEl = document.querySelectorAll(".trailer-swiper-container");
      if (!sliderEl) {
        return;
      }
    })();

    return (
      <div className="trailer-carousel">
        <div className="trailer-swiper-container">
          <div className="swiper-wrapper">
            {this.props.movieTrailers.results.map(trailer => (
              <div key={trailer.key} className="swiper-slide">
                <iframe
                  title="1"
                  width="420"
                  height="315"
                  src={`https://www.youtube.com/embed/${trailer.key}`}
                ></iframe>
              </div>
            ))}
          </div>

          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
    );
  }
}

export default TrailerCarousel;
