import React, { Component } from "react";
import { Link } from "react-router-dom";
import Swiper from "swiper/dist/js/swiper.js";

import "./HomeHeader.scss";

class HomeHeader extends Component {
  // Compare the item genres with the genre list and returns genre names
  handleGetGenre = genreId => {
    let mainGenre;
    if (this.props.movieGenres.genres) {
      this.props.movieGenres.genres.forEach(genre => {
        if (genre.id === genreId[0]) {
          mainGenre = genre.name;
        }
      });
    }

    return mainGenre;
  };

  render() {
    const config = this.props.MDBConfig;

    // Initiates carousels
    (() => {
      const sliderEl = document.querySelector(".home-swiper-container");
      if (!sliderEl) {
        return;
      }
    })();

    return (
      <div className="home-swiper-container">
        {/* Loops through items and creates a carousel item */}
        <div className="swiper-wrapper">
          {this.props.items.map((item, i) => {
            if (i > 3 && i < 7) {
              return (
                <Link
                  key={item.id}
                  to={`/details/${this.props.itemType.toLowerCase()}/${
                    item.id
                  }`}
                  className="swiper-slide"
                  style={{
                    background: `linear-gradient(
                rgba(0, 0, 0, 0.6),
                rgba(0, 0, 0, 0.6)
              ) center center no-repeat, #fff url(${
                config.images ? config.images.secure_base_url : ""
              }${config.images ? config.images.backdrop_sizes[2] : ""}${
                      item.backdrop_path
                    }) center top no-repeat`,
                    backgroundSize: "cover, cover"
                  }}
                >
                  <div>
                    <p className="swiper-slide__category">
                      {"Latest".toUpperCase()}
                    </p>
                    <h2 className="swiper-slide__title">
                      {this.props.itemType === "MOVIE" ? item.title : item.name}
                    </h2>
                    <p className="swiper-slide__item-duration">
                      {this.handleGetGenre(item.genre_ids)} |{" "}
                      {item.vote_average} Rating
                    </p>
                  </div>
                </Link>
              );
            }
          })}
        </div>

        <div className="home-swiper-pagination"></div>
      </div>
    );
  }
}

export default HomeHeader;
