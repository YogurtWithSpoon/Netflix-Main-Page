import React, { useEffect, useState } from "react";
import requestBuilder, { pictureURL } from "../../api/requestBuilder";
import requests from "../../api/requests";
import "./banner.scss";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  function cutString(review, symbols) {
    return review?.length > symbols
      ? review.slice(0, symbols - 3) + " ..."
      : review;
  }

  useEffect(() => {
    async function fetchMovies() {
      const movies = await requestBuilder.get(requests.fetchNetflixOriginals);
      const movie =
        movies.data.results[
          Math.floor(Math.random() * (movies.data.results.length - 1))
        ];
      setMovie(movie);
      return movie;
    }
    fetchMovies();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${pictureURL + movie?.backdrop_path})`,
        backgroundPosition: "top center",
      }}
    >
      <div className="banner__contents">
        <div className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </div>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">List</button>
        </div>
        <div className="banner__description">
          {cutString(movie.overview, 300)}
        </div>
      </div>
      <div className="banner__fade"></div>
    </header>
  );
};

export default Banner;
