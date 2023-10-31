import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Movie from "./pages/Movie";
import Favorites from "./pages/Favorites";
function App() {
  const [movies, setMovies] = useState([]);
  const localFavs = JSON.parse(localStorage.getItem("favs"));
  const [favorites, setFavorites] = useState(localFavs || []);
  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(favorites));
  }, [favorites]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${
        import.meta.env.VITE_KEY
      }`
    )
      .then((a) => a.json())
      .then((a) => {
        setMovies(a.results);
      });
  }, []);
  const routes = [
    {
      path: "/",
      element: (
        <Home
          favorites={favorites}
          setFavorites={setFavorites}
          movies={movies}
        />
      ),
    },
    {
      path: "/about",
      element: <About movies={movies} />,
    },
    {
      path: "/movie/:id",
      element: <Movie />,
    },
    {
      path: "/favorites",
      element: (
        <Favorites
          setFavorites={setFavorites}
          favorites={favorites}
          movies={favorites}
        />
      ),
    },
  ];
  return (
    <>
      <Header favs={favorites.length} />
      <Routes>
        {routes.map((a) => (
          <Route key={a.path} {...a} />
        ))}
      </Routes>
      <Footer />
    </>
  );
}
export default App;
