import React, { useState, useEffect } from "react";
// requests
import requestBuilder, { pictureURL } from "../../api/requestBuilder";
// youtube embed
import Youtube from "react-youtube";
// search movie trailer
import movieTrailer from "movie-trailer";
// styles
import "./category.scss";

const Category = ({ title, fetchURL, isLarge }) => {
  const [movies, setMovies] = useState([""]);
  const [trailerURL, setTrailerURL] = useState("");
  const [isLoading, setLoading] = useState(false);

  const handleClick = (movie) => {
    if (trailerURL) {
      setTrailerURL("");
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
        .then((url) => {
          const trailerParam = new URLSearchParams(new URL(url).search);
          setTrailerURL(trailerParam.get("v"));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    async function fetchMovies() {
      setLoading(true);
      const request = await requestBuilder.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    setLoading(false);
    fetchMovies();
  }, [fetchURL]);

  const config = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className={`category`}>
      <h2 className="category__title">{title}</h2>
      <div className="category__gallery">
        {isLoading ? (
          movies.map((item) => (
            <img
              className={`category__poster${
                isLarge ? " category__poster_large" : ""
              }`}
              key={item.id}
              onClick={() => handleClick(item)}
              src={
                pictureURL + (isLarge ? item?.poster_path : item?.backdrop_path)
              }
              alt={item.name}
            />
          ))
        ) : (
          <p className="category__loading">Loading</p>
        )}
      </div>
      {trailerURL && <Youtube videoId={trailerURL} opts={config} />}
    </div>
  );
};

export default Category;
