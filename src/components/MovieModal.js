import React, { useRef } from "react";
import "./MovieModal.css";
import useOnClickModal from "../hooks/useOnClickModal.js";
const MovieModal = ({
  title,
  release_date,
  first_air_date,
  backdrop_path,
  overview,
  name,
  vote_average,
  setModalOpen,
}) => {
  const ref = useRef();
  useOnClickModal(ref, () => setModalOpen(false));
  return (
    <div className="wrapper-modal">
      <div className="modal" ref={ref}>
        <span
          className="modal-close"
          onClick={() => {
            setModalOpen(false);
          }}
        >
          X
        </span>
        <img
          className="modal__poster"
          alt="modal__poster-img"
          src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
        />
        <div className="modal__contents">
          <p className="modal__details">
            100% for you{"     "}
            <span>
              {"     "}
              {"     "}
              {release_date ? release_date : first_air_date}
            </span>
          </p>
          <h2 className="modal__title">{title ? title : name}</h2>
          <p className="modal__rate">평점: {vote_average}</p>
          <p className="modal__overview">{overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
