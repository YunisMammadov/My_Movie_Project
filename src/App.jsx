import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
function App() {
  const [movies, setMovies] = useState([]);
  const localFavs = JSON.parse(localStorage.getItem("favs"));
  const [favorites, setFavorites] = useState(localFavs || []);
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
  ];
  return (
    <>
      <Header favs={favorites.length} />
      <Routes>
        {routes.map((a) => (
          <Route key={a.path} {...a} />
        ))}
      </Routes>
    </>
  );
}
export default App;
