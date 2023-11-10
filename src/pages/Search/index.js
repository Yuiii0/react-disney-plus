import axios from "../../api/utils/instance";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useDebounce from "../../hooks/useDebounce";
import "./searchPage.css";

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const searchParams = new URLSearchParams(useLocation().search);
  const navigate = useNavigate();
  let searchTerm = searchParams.get("q");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const fetchSearchMovie = async () => {
    try {
      const request = await axios.get(
        `search/multi?include_adult=false&query=${searchTerm}`
      );
      setSearchResults(request.data.results);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchSearchMovie();
    }
  }, [debouncedSearchTerm]);

  if (searchResults.length > 0 && searchTerm) {
    return (
      <section className="search-container">
        <div className="movies">
          {searchResults.map((movie) => {
            if (movie.backdrop_path !== null && movie.media_type !== "person") {
              const movieImgUrl =
                "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
              return (
                <div
                  className="movie__poster__container"
                  onClick={() => navigate(`/${movie.id}`)}
                >
                  <img
                    className="movie__poster"
                    alt={movie.title}
                    src={movieImgUrl}
                  ></img>
                </div>
              );
            }
          })}
        </div>
      </section>
    );
  }
  return (
    <section className="no-results">
      <div className="no-results__text">
        <p>찾고자하는 검색어 "{searchTerm}"에 맞는 영화가 없습니다.</p>
      </div>
    </section>
  );
};

export default Search;
