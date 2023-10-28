import Movie from "../components/Movie";
import Hero from "../components/Hero";
function Home({ movies, setFavorites, favorites }) {
  return (
    <div className="container">
      <main>
        <Hero movies={movies.slice(10)} />
        <section className="movies">
          {movies.slice(0, 10).map((a) => (
            <Movie
              setFavorites={setFavorites}
              favorites={favorites}
              key={a.id}
              movie={a}
            />
          ))}
        </section>
      </main>
    </div>
  );
}

export default Home;
