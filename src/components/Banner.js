import React, { useEffect, useState } from "react";
import axios from "../api/utils/instance";
import requests from "../api/movies";

import "./Banner.css";
import styled from "styled-components";

const Banner = () => {
  const [movie, setMovie] = useState({});
  const [isClick, setIsClick] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get(requests.fetchNowPlaying);

    //random으로 movieID 가져오기
    const movieId =
      response.data.results[
        Math.floor(Math.random() * response.data.results.length)
      ].id;

    //ID로 영화정보 가져오기
    const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
      params: { append_to_response: "videos" },
    });
    setMovie(movieDetail);
    console.log();
  };
  function truncate(str, n) {
    return str?.length > n ? str.substring(0, n) + "..." : str;
  }

  if (isClick) {
    return (
      <>
        <Container className="cntina">
          <button className="video__button" onClick={() => setIsClick(false)}>
            X
          </button>
          <Iframe
            width="640"
            height="360"
            src={`https://www.youtube.com/embed/${movie.videos.results[0].key}`}
            title="YouTube video player"
            frameborder="0"
            allow=" autoplay; fullscreen; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></Iframe>
        </Container>
      </>
    );
  } else {
    return (
      <header
        className="banner"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
      >
        <div className="banner__contents">
          <h2 className="banner__title">
            {movie.title || movie.name || movie.original__name}
          </h2>
          {movie.videos?.results[0]?.key && (
            <button className="banner__button" onClick={() => setIsClick(true)}>
              Play
            </button>
          )}

          <p className="banner__description">{truncate(movie.overview, 100)}</p>
        </div>
        <div className="banner--fadeBottom"></div>
      </header>
    );
  }
};

export default Banner;

const Container = styled.div`
  position: relative;
  height: 90vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  opacity: 0.65;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
