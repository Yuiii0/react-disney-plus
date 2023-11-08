import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNGNiZjJkZTdhYTk5NDBmZGQyYTRjMjcwZWIxYjU1OSIsInN1YiI6IjY1MDU5NDExNDJkOGE1MDBhYmIzNTBiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nRdw47sDfUd039YGLbSp5Tx23bOThGP0rrndahvV7xQ",
  },
  params: {
    language: "ko-KR",
  },
});

export default instance;
