import React from "react";
import Nav from "../../components/Nav";
import Banner from "../../components/Banner";
import Category from "../../components/Category";
import Row from "../../components/Row";
import styled from "styled-components";
import requests from "../../api/movies";

const MainPage = () => {
  return (
    <Container>
      <Nav />
      <Banner />
      <Category />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Popular" fetchUrl={requests.fetchPopular} />
      <Row title="UpComing" fetchUrl={requests.fetchUpComing} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
    </Container>
  );
};

export default MainPage;

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center/cover no-repeat
      fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
