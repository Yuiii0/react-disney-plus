import axios from "../../api/utils/instance";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import styled from "styled-components";

const Detail = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  console.log(movieId);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}`
      );
      setMovie(response.data);
    }
    fetchData();
  }, [movieId]);

  if (!movie) return null;
  return (
    <Container>
      <BgImg
        className="modal__poster--img"
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt={movie.title}
      ></BgImg>
    </Container>
  );
};

export default Detail;

const Container = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;
const BgImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
