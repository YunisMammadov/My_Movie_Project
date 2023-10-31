import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${
        import.meta.env.VITE_KEY
      }`
    )
      .then((a) => a.json())
      .then((a) => setMovie(a));
  }, []);
  return (
    <div className="container">
      <main className="details">
        <div className="details__img">
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt=""
          />
        </div>
        <div className="details__text">
          <h3>{movie.title}</h3>
          <p>{movie.overview}</p>
          <p>Budget: {movie.budget ? `$${movie.budget}` : "Unknown"}</p>
        </div>
      </main>
    </div>
  );
}

export default Movie;
