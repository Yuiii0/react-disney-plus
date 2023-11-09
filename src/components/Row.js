import React, { useCallback, useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Row.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styled from "styled-components";
import axios from "../api/utils/instance";
import MovieModal from "./MovieModal";
const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMovie, setselectedMovie] = useState({});

  const fetchMovieData = useCallback(async () => {
    const response = await axios.get(fetchUrl);
    setMovies(response.data.results);
  }, [fetchUrl]);

  useEffect(() => {
    fetchMovieData();
  }, [fetchMovieData]);

  //modal클릭시
  const handleClick = (movie) => {
    setModalOpen(true);
    setselectedMovie(movie);
  };

  return (
    <>
      <Container>
        <h2>{title}</h2>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          loop={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          breakpoints={{
            1378: {
              slidesPerView: 5, //한번에 보이는 슬라이드 개수
              slidesPerGroup: 5, //몇개씩 슬라이드 할지
            },
            998: {
              slidesPerView: 4, //한번에 보이는 슬라이드 개수
              slidesPerGroup: 4, //몇개씩 슬라이드 할지
            },
            625: {
              slidesPerView: 3, //한번에 보이는 슬라이드 개수
              slidesPerGroup: 3, //몇개씩 슬라이드 할지
            },

            0: {
              slidesPerView: 2, //한번에 보이는 슬라이드 개수
              slidesPerGroup: 2, //몇개씩 슬라이드 할지
            },
          }}
        >
          <Content>
            {movies.map((movie) => (
              <SwiperSlide key={movie.id}>
                <Wrap>
                  <img
                    onClick={() => handleClick(movie)}
                    key={movie.id}
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                    alt={movie.name}
                  ></img>
                </Wrap>
              </SwiperSlide>
            ))}
          </Content>
        </Swiper>
      </Container>
      {modalOpen && (
        <MovieModal {...selectedMovie} setModalOpen={setModalOpen} />
      )}
    </>
  );
};

export default Row;

const Container = styled.div`
  padding: 0 0 26px;
`;
const Content = styled.div``;
const Wrap = styled.div`
  width: 95%;
  height: 95%;
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0 /73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 /80%) 0px 40px 58px -16px,
      rgb(0 0 0 /72%) 0px 30px 22px -10px;
    transform: scale(0.98);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
