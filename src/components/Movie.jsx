import { Link } from "react-router-dom";
function Movie({ movie, setFavorites, favorites }) {
  const check = favorites.some((a) => a.id === movie.id);
  const handleFavorite = () => {
    if (check) {
      setFavorites([...favorites.filter((a) => a.id !== movie.id)]);
      return;
    }
    setFavorites([...favorites, movie]);
  };
  return (
    <div className="movie">
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt=""
      />
      <h3>{movie.title}</h3>
      <Link className="read__more" to={`movie/${movie.id}`}>
        Ətraflı
      </Link>
      <button onClick={handleFavorite}>
        {check ? "Remove Favorite" : "Add Favorite"}
      </button>
    </div>
  );
}

export default Movie;
