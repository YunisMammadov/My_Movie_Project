import Movie from "../components/Movie";
function Favorites({ movies, setFavorites, favorites }) {
  return (
    <div className="container">
      <main className="movies">
        {movies.map((a) => (
          <Movie
            setFavorites={setFavorites}
            favorites={favorites}
            key={a.id}
            movie={a}
          />
        ))}
      </main>
    </div>
  );
}

export default Favorites;
